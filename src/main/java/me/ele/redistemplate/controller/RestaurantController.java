package me.ele.redistemplate.controller;


import me.ele.redistemplate.Service.RestaurantService;
import me.ele.redistemplate.model.Restaurant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@Controller
public class RestaurantController {
    private static Logger log = LoggerFactory.getLogger(RestaurantController.class);


    @Autowired
    private RestaurantService restaurantService;

    //http://localhost:8080/showRestaurant?id=1
    @RequestMapping(value = "/showRestaurant")
    public String toIndex(@RequestParam("id") String id, Model model) {

        System.out.println("id:" + id);
        Restaurant restaurant = this.restaurantService.findById(id);
        log.debug(restaurantService.toString());
        model.addAttribute("restaurant", restaurant);
        return "RestaurantDetails";
    }

    //http://localhost:8080/delete?id=12
    @RequestMapping(value = "/delete")
    public String delete(@RequestParam("id") String id){
        this.restaurantService.deleteRestaurant(id);
        log.debug(restaurantService.toString());
        return "successfullyDelete";
    }

    //http://localhost:8080/from
    @RequestMapping(value = "/from" )
    public String from(){
        return "ProductForm";
    }

    @RequestMapping(value="/update", method = RequestMethod.POST)


    @ResponseBody
    public String update(Restaurant restaurant, Model model) {


        this.restaurantService.updateRestaurant(restaurant);
        log.debug(restaurantService.toString());
        model.addAttribute("restaurant", restaurant);
        return "RestaurantDetails";
    }
    //http://localhost:8080/buggy1
    @RequestMapping(value = "/buggy1" )
    public String buggy1(){
        return "index";
    }

/*
    // /user/showUser2?id=1
    @RequestMapping(value = "/showUser2", method = RequestMethod.GET)
    public String toIndex2(@RequestParam("id") String id, Model model) {
        String userId = id;
        System.out.println("userId:" + userId);
        User user = this.userService.findById(userId);
        log.debug(user.toString());
        model.addAttribute("user", user);
        return "showUser";
    }


    // /user/showUser3/{id}
    @RequestMapping(value = "/showUser3/{id}", method = RequestMethod.GET)
    public String toIndex3(@PathVariable("id") String id, Map<String, Object> model) {
        String userId = id;
        System.out.println("userId:" + userId);
        User user = this.userService.findById(userId);
        log.debug(user.toString());
        model.put("user", user);
        return "showUser";
    }

    // /user/{id}
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public
    @ResponseBody
    User getUserInJson(@PathVariable String id, Map<String, Object> model) {
        String userId = id;
        System.out.println("userId:" + userId);
        User user = this.userService.findById(userId);
        log.info(user.toString());
        return user;
    }

    // /user/{id}
    @RequestMapping(value = "/jsontype/{id}", method = RequestMethod.GET)
    public ResponseEntity<User> getUserInJson2(@PathVariable String id, Map<String, Object> model) {
        String userId = id;
        System.out.println("userId:" + userId);
        User user = this.userService.findById(userId);
        log.info(user.toString());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

*/
}