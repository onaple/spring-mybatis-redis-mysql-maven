package me.ele.ssm.cache;

import me.ele.ssm.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by onaple on 2017/1/6.
 */
@Repository
public class RestaurantRedis {

    private static final String RESTAURANT = "RESTAURANT";

    @Autowired
    private RedisTemplate<String, Restaurant> redisTemplate;

    public void put(Restaurant restaurant) {
        redisTemplate.opsForHash().put(RESTAURANT, restaurant.getId(), restaurant);
    }

    public void delete(String id) {
        redisTemplate.opsForHash().delete(RESTAURANT, id);
    }

    public Restaurant get(String id) {
        return (Restaurant) redisTemplate.opsForHash().get(RESTAURANT, id);
    }

    public void addAllRestaurant(List<Restaurant> restaurants){
        restaurants.addAll(restaurants);
    }


}
