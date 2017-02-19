package me.ele.ssm.model;

import java.io.Serializable;

/**
 * Created by onaple on 2017/1/5.
 */
public class Restaurant implements Serializable{
    private int id = 0;
    private String brand_Logotype = "logo";
    private String shop_name = "shop";
    private String pinpai_name = "name";
    private String dianping_id;
    private String new_dom_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand_Logotype() {
        return brand_Logotype;
    }

    public void setBrand_Logotype(String brand_Logotype) {
        this.brand_Logotype = brand_Logotype;
    }

    public String getShop_name() {
        return shop_name;
    }

    public void setShop_name(String shop_name) {
        this.shop_name = shop_name;
    }

    public String getPinpai_name() {
        return pinpai_name;
    }

    public void setPinpai_name(String pinpai_name) {
        this.pinpai_name = pinpai_name;
    }

    public String getDianping_id() {
        return dianping_id;
    }

    public void setDianping_id(String dianping_id) {
        this.dianping_id = dianping_id;
    }

    public String getNew_dom_id() {
        return new_dom_id;
    }

    public void setNew_dom_id(String new_dom_id) {
        this.new_dom_id = new_dom_id;
    }

    public String toString() {
        return "Restaurant [id= " + id + ", brand_Logotype = " + brand_Logotype + ", shop_name = " + shop_name + ", pinpai_name = " + pinpai_name + "dianping_id = " + dianping_id + ", new_dom_id = " + new_dom_id + "]";
    }
}
