package com.wxx.integral.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wxx.integral.dao.ExchanggiftsMapper;
import com.wxx.integral.entity.Exchanggifts;
import com.wxx.integral.entity.ExchanggiftsExample;
import com.wxx.integral.entity.ExchanggiftsExample.Criteria;
import com.wxx.integral.service.IPresentsService;

@Service
public class PresentsServiceImpl implements IPresentsService{
	@Autowired
	private ExchanggiftsMapper exchanggiftsMapper;

	@Override
	public PageInfo<Exchanggifts> queryByPageHelper(Integer page, Integer rows, Exchanggifts gift) {
		ExchanggiftsExample example = new ExchanggiftsExample();
		Criteria c = example.createCriteria();
		if(gift != null) {
			if(gift.getExchanggiftsGiftname() != null && !"".equals(gift.getExchanggiftsGiftname())) {
				c.andExchanggiftsGiftnameLike("%"+gift.getExchanggiftsGiftname()+"%");
			} 
			if(gift.getShopId() != null && !"".equals(gift.getShopId()) && gift.getShopId() != 0) {
				c.andShopIdEqualTo(gift.getShopId());
			}
		}
		c.andExchanggiftsIsdelNotEqualTo(1);
		PageHelper.startPage(page, rows);
		List<Exchanggifts> list = exchanggiftsMapper.selectByExample(example);
		PageInfo<Exchanggifts> pageInfo = new PageInfo(list);
		return pageInfo;
	}

	@Override
	public int insert(Exchanggifts gift) {
		int count = exchanggiftsMapper.insertSelective(gift);
		return count;
	}

	@Override
	public Exchanggifts queryById(Integer exchanggiftsId) {
		return exchanggiftsMapper.selectByPrimaryKey(exchanggiftsId);
	}

	@Override
	public int updateShop(Exchanggifts present) {
		return exchanggiftsMapper.updateByPrimaryKeySelective(present);
	}

	@Override
	public int deletePresent(Integer exchanggiftsId) {
		Exchanggifts gift = new Exchanggifts();
		gift.setExchanggiftsId(exchanggiftsId);
		gift.setExchanggiftsIsdel(Exchanggifts.ISDELETE);
		int count = exchanggiftsMapper.updateByPrimaryKeySelective(gift);
		return count;
	}

}
