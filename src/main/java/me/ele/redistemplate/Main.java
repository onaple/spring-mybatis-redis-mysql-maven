package me.ele.redistemplate;

import me.ele.redistemplate.Service.RestaurantService;
import me.ele.redistemplate.model.Restaurant;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;
import java.util.List;
import java.util.Scanner;

/**
 * Created by onaple on 2017/1/4.
 */


public class Main {


    public static void main(String[] args) throws IOException {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RestaurantService restaurantService = (RestaurantService) applicationContext.getBean("restaurantService");
        //restaurantService.loaddata();
        daemonFun(restaurantService);
    }


    /*
    类似于守护进程的守护函数。
     */
    private static void daemonFun(RestaurantService restaurantService) throws IOException {
        while (true) {
            //界面展示调用。
            show();
            Restaurant restaurant = new Restaurant();
            Scanner sc = new Scanner(System.in);
            int choice = sc.nextInt();
            switch (choice) {
                case 1: {
                    //待完善
                    cinToRestaurant(restaurant);
                    restaurantService.insertRestaurant(restaurant);
                    System.out.println("Successful insertion");
                    break;
                }
                case 2: {
                    System.out.print("please enter restaurant id:");
                    String temp = sc.nextLine();
                    String id = sc.nextLine();
                    restaurantService.deleteRestaurant(id);
                    System.out.println("Successful delete");
                    break;
                }
                case 3: {
                    select(restaurantService, restaurant);
                    break;
                }
                case 4: {
                    //待完善
                    cinToRestaurant(restaurant);
                    restaurantService.updateRestaurant(restaurant);
                    System.out.println("Successful update");
                    break;
                }
                case 5: {
                    System.out.println("bye-bye");
                    return;
                }
                default:
                    System.out.println("your enter string have problem!!");
                    break;
            }

        }

    }

    //by which(id or name)77
    private static void select(RestaurantService restaurantService, Restaurant restaurant) {
        Scanner sc = new Scanner(System.in);


        System.out.println("select by which,id or pinpaiName:");
        String answer = sc.next();

        if(answer.equals("id")){
            System.out.print("please enter restaurant id:");
            //Scanner sc = new Scanner(System.in);
            String id = sc.next();
            restaurant = restaurantService.findById(id);
            if (null == restaurant) {
                System.out.println("NOT FOUND");
            } else {
                System.out.println("Restaurant info is" + restaurant);
            }
        }else if(answer.equals("pinPaiName")){

            //test bypinpainame
            System.out.print("please enter restaurant pinpainame:");
            String pinPaiName = sc.next();
            List<Restaurant> listRestaurant = restaurantService.findByPinPaiName(pinPaiName);
            if (listRestaurant.isEmpty()) {
                System.out.println("NOT FOUND");
            } else {
                System.out.println("Restaurant info is");
                for (Restaurant re : listRestaurant) {
                    System.out.println(re);
                }
            }
        }else {
            System.out.println("your input have problem,please try again");
        }


    }


    //手工填充一个restaurant
    private static void cinToRestaurant(Restaurant restaurant) {
        Scanner sc = new Scanner(System.in);

        System.out.println("请输入restaurant id：");
        restaurant.setId(sc.nextInt());

        System.out.println("请输入restaurant brand_Logotype：");
        restaurant.setBrand_Logotype(sc.next());

        System.out.println("请输入restaurant shop_name：");
        restaurant.setShop_name(sc.next());

        System.out.println("请输入restaurant pinPaiName：");
        restaurant.setPinpai_name(sc.next());

        System.out.println("请输入restaurant dianping_id：");
        restaurant.setDianping_id(sc.next());

        System.out.println("请输入restaurant new_dom_id：");
        restaurant.setNew_dom_id(sc.next());

        System.out.println("你的信息如下：");
        System.out.println(restaurant);
    }


    //简单的命令行界面展示
    private static void show() {
        System.out.println("<******>");
        System.out.println("1.insert");
        System.out.println("2.delete");
        System.out.println("3.select");
        System.out.println("4.update");
        System.out.println("5.exit");
        System.out.println("Enter your choice:");
    }

}