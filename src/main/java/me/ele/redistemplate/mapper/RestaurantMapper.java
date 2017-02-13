package me.ele.redistemplate.mapper;

import me.ele.redistemplate.model.Restaurant;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by onaple on 2017/1/6.
 */
@Repository
public interface RestaurantMapper {

    Restaurant getRestaurantByID(@Param("id") String id);

    List<Restaurant> getRestaurantByPinPaiName(@Param("pinPaiName") String pinPaiName);
    //Restaurant getRestaurantByShopName

    public void insertRestaurant(@Param("Restaurant") Restaurant restaurant);

    public void deleteRestaurant(@Param("id") String id);

    public void updateRestaurant(@Param("Restaurant") Restaurant restaurant);

}
