package com.wxx.integral.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Consumeorders;
import com.wxx.integral.service.IXiaoFeiService;

@Controller
@RequestMapping("xiaofei")
public class XiaoFeiController {
	@Autowired
	private IXiaoFeiService iXiaoFeiService;
	
	@RequestMapping("fastXiaoFei")
	@ResponseBody
	public int fastXiaoFei(Consumeorders con) {
		int count = iXiaoFeiService.fastXiaoFei(con);
		return count;
	}
	
	@RequestMapping("subScore")
	@ResponseBody
	public int subScore(Consumeorders con) {
		int count = iXiaoFeiService.subScore(con);
		return count;
	}
	
	@RequestMapping("queryAllRecoreByPageHelper")
	@ResponseBody
	public Object queryByPageHelper(Integer page, Integer rows, Consumeorders con) {
		Map<String,Object> map = new HashMap<String,Object>();
		PageInfo<Consumeorders> pageInfo = iXiaoFeiService.queryAllRecoreByPageHelper(page, rows, con);
		if(pageInfo != null) {
			map.put("rows", pageInfo.getList());
			map.put("total", pageInfo.getTotal());
		}
		return map;
	}
}
