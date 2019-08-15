package com.wxx.integral.utils;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import org.springframework.web.multipart.MultipartFile;


public class UploadUtils{
	
	public static String getNewName(String name)
    {
        String res="";
        String last=name.substring(name.indexOf("."));
        Date d=new Date();
        SimpleDateFormat sm=new SimpleDateFormat("yyyyMMddhhmmss");
        String date=sm.format(d);
        Random r=new Random();
        int x=r.nextInt(9999999);
        res=date+x+last;       
        return res;
    }
    
    //上传图片
    public static String up(String name,MultipartFile file,String path){
        //改名
        String new_name=getNewName(name);
        //上传
        File f=new File(path,new_name);
        if(f.getParentFile().exists())
        {
            f.getParentFile().mkdirs();
        }
        //上传
        try
        {
            file.transferTo(new File(path + File.separator + new_name));
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return new_name;
    }
}
