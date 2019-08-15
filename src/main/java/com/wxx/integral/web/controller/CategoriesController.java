package com.wxx.integral.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wxx.integral.service.ICategoriesService;

@Controller
@RequestMapping("/categories")
public class CategoriesController {
	@Autowired
	private ICategoriesService iCategoriesService;
	
	//添加商铺时异步查询商铺类型并显示
	@RequestMapping("/queryTypeByAjax")
	@ResponseBody
	public Object queryTypeByAjax(@RequestParam(value="name")String name) {
		return iCategoriesService.queryByType(name);
	}

}
