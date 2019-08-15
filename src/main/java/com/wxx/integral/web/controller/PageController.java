package com.wxx.integral.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page")
public class PageController {
	
	@RequestMapping("{first}/{second}")
	public String page(@PathVariable("first")String first, @PathVariable("second")String second) {
		return first + "/" + second;
	}
	
	@RequestMapping("{first}/{second}/{param}")
	public String page(@PathVariable("first")String first, @PathVariable("second")String second, @PathVariable("param")String param) {
		return first + "/" + second + "?param1=" + param;
	}
}
