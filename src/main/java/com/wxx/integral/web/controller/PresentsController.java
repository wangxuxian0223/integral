package com.wxx.integral.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Exchanggifts;
import com.wxx.integral.service.IPresentsService;

@Controller
@RequestMapping("presents")
public class PresentsController {
	
	@Autowired
	private IPresentsService iPresentsService;
	
	@RequestMapping("queryByPageHelper")
	@ResponseBody
	public Object queryByPageHelper(Integer page, Integer rows, Exchanggifts gift) {
		Map<String,Object> map = new HashMap<String,Object>();
		PageInfo<Exchanggifts> pageInfo = iPresentsService.queryByPageHelper(page, rows, gift);
		if(pageInfo != null) {
			map.put("rows", pageInfo.getList());
			map.put("total", pageInfo.getTotal());
		}
		return map;
	}
	
	@RequestMapping("addPresent")
	@ResponseBody
	public int addPresent(Exchanggifts gift) {
		int count = 0;
		if(gift != null) {
			count = iPresentsService.insert(gift);
		}
		return count;
	}
	
	@RequestMapping("toupdatePresent")
	@ResponseBody
	public Object todeleteShop(Integer exchanggiftsId) {
		Map<String, Object> updateMap = new HashMap<String, Object>();
		Exchanggifts present = iPresentsService.queryById(exchanggiftsId);
		updateMap.put("Exchanggifts", present);
		return updateMap;
	} 
	
	@RequestMapping("updatePresent")
	@ResponseBody
	public int updateShop(Exchanggifts present) {
		int flag = iPresentsService.updateShop(present);
		return flag;
	}
	
	@RequestMapping("deletePresent")
	@ResponseBody
	public Object deletePresent(Integer exchanggiftsId) {
		Map<String,String> maps = new HashMap<String,String>();
		int flag = iPresentsService.deletePresent(exchanggiftsId);
		if(flag > 0) {
			maps.put("msg", "成功删除"+flag+"条数据！");
		}else {
			maps.put("msg", "删除失败！");
		}
		return maps;
	}
}
