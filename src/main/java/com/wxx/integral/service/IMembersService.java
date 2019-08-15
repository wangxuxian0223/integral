package com.wxx.integral.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Memcards;

public interface IMembersService {

	PageInfo<Memcards> queryByPageHelper(Integer page, Integer rows, Memcards member);

	int insert(Memcards member);

	Memcards queryById(Integer memcardsRefererid);

	int update(Memcards member);

	int deleteMember(Integer memcardsId);

	int reload(Memcards member);

	List<Memcards> findList();

	void importExcel(List<Memcards> memcardsList);

}
