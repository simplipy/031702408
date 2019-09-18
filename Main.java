

import java.util.ArrayList;

import java.util.LinkedHashMap;

import java.util.List;

import java.util.Map;

import java.util.regex.Matcher;

import java.util.regex.Pattern;
import java.util.Scanner;

public class main {

	

	//private static Scanner cin;



	/**
	 * 

     * 解析地址

     * @author lin

     * @param address

     * @return

     */

    /**
     * @param address
     */
    public static void addressResolution(String address){
    	String regex="(?<province>[^省]+自治区|.*?省|.*?行政区)?(?<city>[^市]+自治州|.*?地区|.*?行政单位|.+盟|市辖区|.*?市|.*?县)(?<county>[^县]+县|.+区|.+市|.+旗|.+海域|.+岛)?(?<town>[^区]+区|.+镇|.+街道)?(?<village>.*)";
        //String regex="(?<province>[^省]+自治区|.*?省|.*?行政区|.*?市)(?<city>[^市]+自治州|.*?地区|.*?行政单位|.+盟|市辖区|.*?市|.*?县)(?<county>[^县]+县|.+区|.+市|.+旗|.+海域|.+岛)?(?<town>[^区]+区|.+镇)?(?<village>.*)";

        Matcher m=Pattern.compile(regex).matcher(address);

        String province=null,city=null,county=null,town=null,village=null;

        List<Map<String,String>> table=new ArrayList<Map<String,String>>();

        Map<String,String> row=null;
        System.out.println("地址：");

        while(m.find()){

            row=new LinkedHashMap<String,String>();

            province=m.group("province");

            row.put("province", province==null?"":province.trim());
            System.out.println (province==null?"":province.trim());
            city=m.group("city");;

            row.put("city", city==null?"":city.trim());
            System.out.println (city==null?"":city.trim());

            county=m.group("county");
            row.put("county", county==null?"":county.trim());
            System.out.println (county==null?"":county.trim());

            town=m.group("town");

            row.put("town", town==null?"":town.trim());
            System.out.println (town==null?"":town.trim());


            village=m.group("village");

            row.put("village", village==null?"":village.trim());
            System.out.println (village==null?"":village.trim());

            table.add(row);

        }

       // return table;

    }
    public static String digitalextract(String s){
    	String num=null;
    	 Pattern p = Pattern.compile("\\d{11,}");//这个11是指连续数字的最少个数
	     Matcher m = p.matcher(s);
	     System.out.print("手机：");
	      while (m.find()) {
	       num=m.group();
	       System.out.println(num); 
	          }
	      s=s.replaceAll(num, " ");
	      return s;
    }

 

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		Scanner reader = new Scanner(System.in);
		String s=reader.next();
		String[] mes;
		//String s="王五,福建省福州市鼓楼18960221533区五一北路123号福州鼓楼医院";
		 mes=s.split( ",");
		 System.out.print("姓名：");
		 System.out.println(mes[0]);
	     mes[1]=digitalextract(mes[1]);
		addressResolution(mes[1]);

	}

 

}
