package com.wxx.integral.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wxx.integral.dao.ConsumeordersMapper;
import com.wxx.integral.dao.ExchanglogsMapper;
import com.wxx.integral.dao.MemcardsMapper;
import com.wxx.integral.entity.Consumeorders;
import com.wxx.integral.entity.Memcards;
import com.wxx.integral.service.IExchangeService;

@Service
public class ExchangeServiceImpl implements IExchangeService{

	@Autowired
	private ExchanglogsMapper exchanglogsMapper;
	
	@Autowired
	private ConsumeordersMapper consumeordersMapper;
	
	@Autowired
	private MemcardsMapper memcardsMapper;

	@Override
	public int exchangeMoney(Consumeorders consumeorders) {
		int count = 0;
		if(consumeorders != null) {
			Memcards mem1 = memcardsMapper.selectByPrimaryKey(consumeorders.getMemcardsId());
			if(mem1 != null) {
				if(mem1.getMemcardsPoint() > consumeorders.getConsumeordersGavepoint()) {
					mem1.setMemcardsPoint(mem1.getMemcardsPoint() - consumeorders.getConsumeordersGavepoint());
					mem1.setMemcardsMoney(mem1.getMemcardsMoney() + consumeorders.getConsumeordersRecash());
					int count1 = memcardsMapper.updateByPrimaryKeySelective(mem1);
					if(count1 > 0) {
						count = consumeordersMapper.insertSelective(consumeorders);
					}
				}
			}
			
		}
		
		
		return count;
	}
}
