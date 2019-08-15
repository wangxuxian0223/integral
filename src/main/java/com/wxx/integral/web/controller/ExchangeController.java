package com.wxx.integral.web.controller;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wxx.integral.entity.Consumeorders;
import com.wxx.integral.entity.Exchanglogs;
import com.wxx.integral.service.IExchangeService;
import com.wxx.integral.utils.MyDateEditor;




@Controller
@RequestMapping("exchange")
public class ExchangeController {
	@Autowired
	private IExchangeService iExchangeService;
	
	@RequestMapping("addExchang")
	@ResponseBody
	public Object addExchang(Exchanglogs exchange) {
		return null;
	}
	
	//积分返现
	@RequestMapping("exchangeMoney")
	@ResponseBody
	public Object exchangeMoney(Consumeorders consumeorders) {
		int count = iExchangeService.exchangeMoney(consumeorders);
		return count;
	}
	
	@InitBinder
	protected void initBinder(HttpServletRequest request,
			ServletRequestDataBinder binder) throws Exception {
		MyDateEditor me = new MyDateEditor();
		
		binder.registerCustomEditor(Date.class, me);
	
	}
	
}
