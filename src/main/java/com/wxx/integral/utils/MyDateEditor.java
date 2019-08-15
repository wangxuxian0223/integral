package com.wxx.integral.utils;

import java.beans.PropertyEditorSupport;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MyDateEditor extends PropertyEditorSupport{
	
	public static SimpleDateFormat sdf[]=new SimpleDateFormat[] {
		new SimpleDateFormat("yyyy-MM-dd"),
		new SimpleDateFormat("MM-dd-yyyy"),
		new SimpleDateFormat("yyyy-dd-MM"),
		new SimpleDateFormat("yyyy/MM/dd")
	};
	
	public void setAsText(String text) throws IllegalArgumentException{
		Date d=null;
		if(text == null || "".equals(text.trim())) {
			setValue(d);
			return;
		}
		for (int i = 0; i < sdf.length; i++) {
			try {
				d=sdf[i].parse(text);
				break;
			}catch (ParseException e) {
				continue;
			}
		}
		System.out.println("convertDate:"+d);
		setValue(d);
	}
	

}
