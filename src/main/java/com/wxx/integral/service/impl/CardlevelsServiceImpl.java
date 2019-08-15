package com.wxx.integral.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wxx.integral.dao.CardlevelsMapper;
import com.wxx.integral.entity.Cardlevels;
import com.wxx.integral.entity.CardlevelsExample;
import com.wxx.integral.entity.CardlevelsExample.Criteria;
import com.wxx.integral.service.ICardlevelsService;

@Service
public class CardlevelsServiceImpl implements ICardlevelsService{
	@Autowired
	private CardlevelsMapper cardlevelsMapper;
	
	@Override
	public PageInfo<Cardlevels> queryByPageHelper(Integer page, Integer rows, Cardlevels cardlevel) {
		CardlevelsExample example = new CardlevelsExample();
		Criteria c = example.createCriteria();
		if(cardlevel != null) {
			if(cardlevel.getCardlevelsLevelname() != null && !"".equals(cardlevel.getCardlevelsLevelname())) {
				c.andCardlevelsLevelnameLike("%"+cardlevel.getCardlevelsLevelname()+"%");
			}
		}
		PageHelper.startPage(page, rows);
		List<Cardlevels> list = cardlevelsMapper.selectByExample(example);
		PageInfo<Cardlevels> pageInfo = new PageInfo(list);
		return pageInfo;
	}

	@Override
	public int insert(Cardlevels cardlevel) {
		int count = cardlevelsMapper.insertSelective(cardlevel);
		return count;
	}

	@Override
	public Cardlevels queryById(Integer cardlevelsId) {
		return cardlevelsMapper.selectByPrimaryKey(cardlevelsId);
	}

	@Override
	public int updateCardlevel(Cardlevels cardlevel) {
		int count = cardlevelsMapper.updateByPrimaryKeySelective(cardlevel);
		return count;
	}

	@Override
	public List<Cardlevels> queryAllCardlevelNameByAjax() {
		List<Cardlevels> list = cardlevelsMapper.queryAllCardlevels();
		return list;
	}

}
