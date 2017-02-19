package me.ele.ssm.spittr.common;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

/**
 * Created by onaple on 2017/2/19.
 */
public class JacksonParse {
    private static ObjectMapper Maper = null;

    public static ObjectMapper getParseMaper(){
        if(Maper == null){
            SimpleModule module = new SimpleModule();
            Maper = new ObjectMapper();
            Maper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            Maper.registerModule(module);
        }
        return Maper;
    }

}
