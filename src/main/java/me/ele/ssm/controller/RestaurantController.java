package me.ele.ssm.controller;


import me.ele.ssm.Service.RestaurantService;
import me.ele.ssm.model.Restaurant;
import me.ele.ssm.spittr.domain.Spitter;
import me.ele.ssm.spittr.domain.Spittle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;


@Controller
public class RestaurantController {
    private static Logger log = LoggerFactory.getLogger(RestaurantController.class);


    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private AmqpTemplate template;


//    //http://localhost:8080/showRestaurant?id=1
//    @RequestMapping(value = "/showRestaurant")
//    public String toIndex(@RequestParam("id") String id, Model model) {
//
//        System.out.println("id:" + id);
//        Restaurant restaurant = this.restaurantService.findById(id);
//        log.debug(restaurantService.toString());
//        model.addAttribute("restaurant", restaurant);
//        return "restaurantDetails";
//    }

    //------->>>
    //http://localhost:8080/showRestaurant?id=1
    @RequestMapping(value = "/showRestaurant")
    public ModelAndView toIndex(@RequestParam("id") String id) {

        System.out.println("id:" + id);
        Restaurant restaurant = this.restaurantService.findById(id);
        log.debug(restaurantService.toString());
        ModelAndView mv = new ModelAndView();
        mv.setViewName("restaurantDetails");
        mv.addObject("restaurant", restaurant);
        return mv;
    }


    //http://localhost:8080/delete?id=12
    @RequestMapping(value = "/delete")
    public String delete(@RequestParam("id") String id) {
        this.restaurantService.deleteRestaurant(id);
        log.debug(restaurantService.toString());
        return "successfullyDelete";
    }

    //http://localhost:8080/form
    @RequestMapping(value = "/form")
    public String from() {
        return "productForm";
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ModelAndView update(Restaurant restaurant) {
        this.restaurantService.updateRestaurant(restaurant);
        log.debug(restaurantService.toString());
        ModelAndView mv = new ModelAndView();
        mv.setViewName("restaurantDetails");
        mv.addObject("restaurant", restaurant);
        return mv;
    }

    //  http://localhost:8080/restaurantChange
    @RequestMapping(value = "/restaurantChange")
    public String restaurantChange() {
        return "restaurantChange";
    }

    //  http://localhost:8080/inputID
    @RequestMapping(value = "/inputID")
    public String test() {
        return "rabbit";
    }

    //  http://localhost:8080/
    @RequestMapping(value = "/index")
    public String index() {
        return "hello";
    }


    //
    @RequestMapping(value = "/rabbit")
    public String rabbit(@RequestParam("id") String id) {

        System.out.println("id:" + id);
        long lid = Long.valueOf(id).longValue();

        Spitter spitter = new Spitter(123L, "wangxu", "wx123456", "wangxu", "onaple@qq.com", false);

        Spittle spittle = new Spittle(lid, spitter, "Hello world (" + lid + ")", new Date());
        //发送消息
        template.convertAndSend(spittle);
        /*
        //接收
        Spittle spittle1 = null;
        while (null == spittle1) {
            spittle1 = (Spittle) template.receiveAndConvert("spittle.alerts.queue");
        }


        ModelAndView mv = new ModelAndView();
        mv.setViewName("receiveSpittle");
        mv.addObject("spittle", spittle1);*/
        return "rabbit";
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