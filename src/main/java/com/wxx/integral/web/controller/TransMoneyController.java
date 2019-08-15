package com.wxx.integral.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wxx.integral.entity.Transferlogs;
import com.wxx.integral.service.ITransMoneyLogsService;

@Controller
@RequestMapping("trans")
public class TransMoneyController {
	@Autowired
	private ITransMoneyLogsService iTransMoneyLogsService;
	
	@RequestMapping("transMoney")
	@ResponseBody
	public Object transMoney(Transferlogs trans) {
		Map<String, Object> map = new HashMap<String,Object>();
		int count = iTransMoneyLogsService.insert(trans);
		map.put("count", count);
		return map;
	}
	
}
