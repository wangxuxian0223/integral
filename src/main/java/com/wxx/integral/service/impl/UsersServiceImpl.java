package com.wxx.integral.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wxx.integral.dao.UsersMapper;
import com.wxx.integral.entity.Shops;
import com.wxx.integral.entity.Users;
import com.wxx.integral.service.IUsersService;

@Service
public class UsersServiceImpl implements IUsersService{
	@Autowired
	private UsersMapper usersMapper;

	@Override
	public Users login(Users user) {
		Users loginUser = null;
		if(user != null) {
			loginUser = usersMapper.queryByPwd(user.getUsersLoginname(), user.getUsersPassword());
		}
		return loginUser;
	}

	@Override
	public int pwdModify(int userid, String newpassword) {
		return usersMapper.pwdModify(userid, newpassword);
	}

	@Override
	public int insert(Users user) {
		return usersMapper.insertSelective(user);
	}


}
