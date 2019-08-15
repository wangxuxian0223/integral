package com.wxx.integral.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wxx.integral.dao.ShopsMapper;
import com.wxx.integral.entity.Shops;
import com.wxx.integral.entity.ShopsExample;
import com.wxx.integral.entity.ShopsExample.Criteria;
import com.wxx.integral.service.IShopsService;

@Service
public class ShopsServiceImpl implements IShopsService{
	@Autowired
	private ShopsMapper shopsMapper;;
	
	@Override
	public PageInfo<Shops> queryByPageHelper(Integer page, Integer rows, Shops shop) {
		ShopsExample example = new ShopsExample();
		Criteria c = example.createCriteria();
		if(shop != null) {
			if(shop.getShopAddress() != null && !"".equals(shop.getShopAddress())) {
				c.andShopAddressLike("%"+shop.getShopAddress()+"%");
			}
			if(shop.getShopName() != null && !"".equals(shop.getShopName())) {
				c.andShopNameLike("%"+shop.getShopName()+"%");
			}
			if(shop.getShopContactname() != null && !"".equals(shop.getShopContactname())) {
				c.andShopContactnameLike("%"+shop.getShopContactname()+"%");
			}
		}
		c.andShopIsdelEqualTo(Shops.ISNOTDELETE);
		PageHelper.startPage(page, rows);
		List<Shops> list = shopsMapper.selectByExample(example);
		PageInfo<Shops> pageInfo = new PageInfo(list);
		return pageInfo;
	}

	@Override
	public int insert(Shops shop) {
		return shopsMapper.insertSelective(shop);
	}

	@Override
	public int deleteShop(Integer shopId) {
		Shops shop = new Shops();
		shop.setShopIsdel(Shops.ISDELETE);
		shop.setShopId(shopId);
		return shopsMapper.updateByPrimaryKeySelective(shop);
	}

	@Override
	public Shops queryById(Integer shopId) {
		return shopsMapper.selectByPrimaryKey(shopId);
	}

	@Override
	public int updateShop(Shops shop) {
		int count = shopsMapper.updateByPrimaryKeySelective(shop);
		return count;
	}

	@Override
	public List<Shops> queryAllShopName() {
		List<Shops> list = shopsMapper.queryAllShopName();
		return list;
	}

	

	
	
	

}
