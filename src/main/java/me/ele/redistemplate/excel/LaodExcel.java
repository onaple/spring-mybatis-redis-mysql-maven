package me.ele.redistemplate.excel;

import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;
import me.ele.redistemplate.model.Restaurant;
import org.springframework.stereotype.Repository;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by onaple on 2017/1/10.
 */
@Repository
public class LaodExcel {
    public List<Restaurant> restaurants = new ArrayList<Restaurant>();
    jxl.Workbook readwb = null;
    //直接从本地文件创建Wor
    InputStream instream = null;

    public List<Restaurant> load() {
        try {
            instream = new FileInputStream("/Users/onaple/Desktop/123.xls");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        try {
            readwb = Workbook.getWorkbook(instream);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (BiffException e) {
            e.printStackTrace();
        }
        //第一张表
        Sheet readsheet = readwb.getSheet(0);
        int rsColumns = readsheet.getColumns();
        int rsRows = readsheet.getRows();
        for (int i = 1; i < rsRows; i++) {
            int j = 0;

            Restaurant restaurant = new Restaurant();
            restaurant.setId(65538+i);
            restaurant.setBrand_Logotype(readsheet.getCell(j++, i).getContents());
            restaurant.setShop_name(readsheet.getCell(j++, i).getContents());
            restaurant.setPinpai_name(readsheet.getCell(j++, i).getContents());
            restaurant.setDianping_id(readsheet.getCell(j++, i).getContents());
            restaurant.setNew_dom_id(readsheet.getCell(j++, i).getContents());

            restaurants.add(restaurant);
        }

        return restaurants;
    }
}
