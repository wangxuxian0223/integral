package com.wxx.integral.service;

import java.util.List;

import com.wxx.integral.entity.Shops;
import com.wxx.integral.entity.Users;

public interface IUsersService {
	public Users login(Users user);
	public int pwdModify(int userid, String newpassword);
	public int insert(Users user);
}
