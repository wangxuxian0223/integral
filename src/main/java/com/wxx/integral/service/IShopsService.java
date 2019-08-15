package com.wxx.integral.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Shops;

public interface IShopsService {
	public PageInfo<Shops> queryByPageHelper(Integer page, Integer rows, Shops shop);

	public int insert(Shops shop);

	public int deleteShop(Integer shopId);

	public Shops queryById(Integer shopId);

	public int updateShop(Shops shop);

	public List<Shops> queryAllShopName();

}
