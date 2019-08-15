package com.wxx.integral.web.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wxx.integral.entity.Users;
import com.wxx.integral.service.IUsersService;

@Controller
@RequestMapping("/users")
public class UsersController {
	@Autowired
	private IUsersService iUsersService;
	
	//登录
	@RequestMapping("/login")
	public String login(Users user, HttpSession session) {
		if(user.getUsersLoginname() == null || user.getUsersPassword() == null) {
			return "redirect:/login.jsp?loginResult=loginNull";
		}
		user = iUsersService.login(user);
		if(user == null) {
			return "redirect:/login.jsp?loginResult=loginNo";
		}
		session.setAttribute("userSession", user);
		return "main/main";
	}
	
	//密码修改
	@RequestMapping("/pwdmodify")
	public String pwdmodify(HttpSession session, String newpassword) {
		if(newpassword != null && session != null) {
			Users user = (Users)session.getAttribute("userSession");
			user.setUsersPassword(newpassword);
			int count = iUsersService.pwdModify(user.getUsersId(), newpassword);
			if(count > 0){
				return "redirect:/page/main/main?pwdmodifyresult=yes";
			}else {
				return "redirect:/page/main/main?pwdmodifyresult=no";
			}
		}else {
			return "redirect:/page/main/main?pwdmodifyresult=null";
		}
		
	}
	
	//退出系统
	@RequestMapping("/loginout")
	public String loginout(HttpSession session) {
		session.invalidate();
		return "redirect:/login.jsp";
	} 
	
	//商店分配管理员时添加用户
	@RequestMapping("addUsers")
	@ResponseBody
	public int addUsers(Users user) {
		int flag = iUsersService.insert(user);
		return flag;
	}
	
}
