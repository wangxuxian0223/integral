package com.wxx.integral.service;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Exchanggifts;

public interface IPresentsService {

	PageInfo<Exchanggifts> queryByPageHelper(Integer page, Integer rows, Exchanggifts gift);

	int insert(Exchanggifts gift);

	Exchanggifts queryById(Integer exchanggiftsId);

	int updateShop(Exchanggifts present);

	int deletePresent(Integer exchanggiftsId);

}
