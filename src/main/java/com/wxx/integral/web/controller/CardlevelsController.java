package com.wxx.integral.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Cardlevels;
import com.wxx.integral.service.ICardlevelsService;

@Controller
@RequestMapping("cardlevels")
public class CardlevelsController {
	@Autowired
	private ICardlevelsService iCardlevelsService;
	
	@RequestMapping("queryAllCardlevelNameByAjax")
	@ResponseBody
	public Object queryAllCardlevelNameByAjax() {
		List<Cardlevels> list = new ArrayList<Cardlevels>();
		list = iCardlevelsService.queryAllCardlevelNameByAjax();
		System.out.println("1111");
		System.out.println("2222");
		return list;
	}
	
	@RequestMapping("queryByPageHelper")
	@ResponseBody
	public Object queryByPageHelper(Integer page, Integer rows, Cardlevels cardlevels) {
		Map<String,Object> map = new HashMap<String,Object>();
		PageInfo<Cardlevels> pageInfo = iCardlevelsService.queryByPageHelper(page, rows, cardlevels);
		if(pageInfo != null) {
			map.put("rows", pageInfo.getList());
			map.put("total", pageInfo.getTotal());
		}
		return map;
	}
	
	@RequestMapping("addCardlevel")
	@ResponseBody
	public int addCardlevel(Cardlevels cardlevel) {
		int flag = iCardlevelsService.insert(cardlevel);
		return flag;
	}
	
	@RequestMapping("toupdateCardlevel")
	@ResponseBody
	public Object toupdateCardlevel(Integer cardlevelsId) {
		Map<String, Object> updateMap = new HashMap<String, Object>();
		Cardlevels cardlevel = iCardlevelsService.queryById(cardlevelsId);
		updateMap.put("cardlevel", cardlevel);
		return updateMap;
	}
	
	//修改店铺信息
	@RequestMapping("/updateCardlevel")
	@ResponseBody
	public int updateCardlevel(Cardlevels cardlevel) {
		int flag = iCardlevelsService.updateCardlevel(cardlevel);
		return flag;
	}
}
