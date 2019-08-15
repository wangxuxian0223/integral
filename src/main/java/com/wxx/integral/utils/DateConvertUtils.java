package com.wxx.integral.utils;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public  class DateConvertUtils {

	static SimpleDateFormat[] sdfs = new SimpleDateFormat[] {
			new SimpleDateFormat("yyyy-MM-dd"),
			new SimpleDateFormat("yyyy/MM/dd"),
			new SimpleDateFormat("MM-dd-yyyy"),
			new SimpleDateFormat("MM/dd/yyyy"),
			
	};
	
	public static Date getDateFromString(String date) {
		for(int i = 0; i < sdfs.length; i++) {
			try {
				return sdfs[i].parse(date);
			} catch (ParseException e) {
				continue;
			}
		}
		return null;
	}
}
