package com.wxx.integral.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Cardlevels;

public interface ICardlevelsService {
	public PageInfo<Cardlevels> queryByPageHelper(Integer page, Integer rows, Cardlevels cardlevel);

	public int insert(Cardlevels cardlevel);

	public Cardlevels queryById(Integer cardlevelsId);

	public int updateCardlevel(Cardlevels cardlevel);

	public List<Cardlevels> queryAllCardlevelNameByAjax();
}
