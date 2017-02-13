package me.ele.redistemplate.Service;

import me.ele.redistemplate.cache.RestaurantRedis;
import me.ele.redistemplate.excel.LaodExcel;
import me.ele.redistemplate.mapper.RestaurantMapper;
import me.ele.redistemplate.excel.LaodExcel;
import me.ele.redistemplate.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import java.util.List;


/**
 * Created by onaple on 2017/1/6.
 */

@Repository
@Service("restaurantService")
public class RestaurantService {

    @Autowired
    private RestaurantRedis restaurantRedis;
    @Autowired
    private RestaurantMapper restaurantMapper;
    @Autowired
    private LaodExcel loadExcel;

    public void loaddata(){
        List<Restaurant> restaurants = loadExcel.load();
        for(int i = 0; i < restaurants.size(); ++i){
            insertRestaurant(restaurants.get(i));
        }
    }

    public Restaurant findById(String id) {
        Restaurant restaurant = this.restaurantRedis.get(id);
        if(null == restaurant) {
            restaurant = this.restaurantMapper.getRestaurantByID(id);
            if(null != restaurant) {
                this.restaurantRedis.put(restaurant);
            }
        }
        return restaurant;
    }


    //redis处理
    public List<Restaurant> findByPinPaiName(String pinPaiName) {
        /*List<Restaurant> restaurant = this.restaurantRedis.get(pinPaiName);
        if(null == restaurant) {
            restaurant = this.restaurantMapper.getRestaurantByID(pinPaiName);
            if(null != restaurant) {
                this.restaurantRedis.put(restaurant);
            }
        }*/
        List<Restaurant>  restaurant = this.restaurantMapper.getRestaurantByPinPaiName(pinPaiName);
        return restaurant;
    }

    public void insertRestaurant(Restaurant restaurant){
        this.restaurantRedis.put(restaurant);
        this.restaurantMapper.insertRestaurant(restaurant);
    }

    public void deleteRestaurant(String id){
        this.restaurantRedis.delete(id);
        this.restaurantMapper.deleteRestaurant(id);
    }

    public void updateRestaurant(Restaurant restaurant){
        this.restaurantRedis.put(restaurant);
        this.restaurantMapper.updateRestaurant(restaurant);
    }
}
