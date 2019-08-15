package com.wxx.integral.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wxx.integral.dao.ConsumeordersMapper;
import com.wxx.integral.dao.MemcardsMapper;
import com.wxx.integral.entity.Consumeorders;
import com.wxx.integral.entity.ConsumeordersExample;
import com.wxx.integral.entity.ConsumeordersExample.Criteria;
import com.wxx.integral.entity.Memcards;

import com.wxx.integral.service.IXiaoFeiService;

@Service
public class XiaoFeiServiceImpl implements IXiaoFeiService{
	@Autowired
	private ConsumeordersMapper consumeordersMapper;
	
	@Autowired
	private MemcardsMapper memcardsMapper;

	@Override
	public int fastXiaoFei(Consumeorders con) {
		int count = 0;
		if(con != null) {
			//先修改卡积分和消费金额
			Memcards mem = memcardsMapper.selectByPrimaryKey(con.getMemcardsId());
			if(mem != null) {
				Integer point = mem.getMemcardsPoint();
				Float totalMoney = mem.getMemcardsTotalmoney();
				Float leftMoney = mem.getMemcardsMoney();
				if(point == null) {
					point = 0;
				}
				if(totalMoney == null) {
					totalMoney = 0f;
				}
				if(leftMoney != null && leftMoney > con.getConsumeordersDiscountmoney()) {
					mem.setMemcardsPoint(point+con.getConsumeordersGavepoint());
					mem.setMemcardsTotalmoney(totalMoney+con.getConsumeordersDiscountmoney());
					mem.setMemcardsMoney(leftMoney-con.getConsumeordersDiscountmoney());
					int count1 = memcardsMapper.updateByPrimaryKeySelective(mem);
					if(count1 > 0) {
						con.setConsumeordersCreatetime(new Date());
						count = consumeordersMapper.insertSelective(con);
					}
				}
				
			}
		}

		return count;
	}

	@Override
	public int subScore(Consumeorders con) {
		int count = 0;
		if(con != null) {
			Memcards mem = memcardsMapper.selectByPrimaryKey(con.getMemcardsId());
			if(mem != null) {
				Integer point = mem.getMemcardsPoint();
				if(point == null) {
					point = 0;
				}
				if(point != null && point > con.getConsumeordersGavepoint()) {
					mem.setMemcardsPoint(point-con.getConsumeordersGavepoint());
					int count1 = memcardsMapper.updateByPrimaryKeySelective(mem);
					if(count1 > 0) {
						con.setConsumeordersCreatetime(new Date());
						count = consumeordersMapper.insertSelective(con);
					}
				}
				
			}
		}

		return count;
	}

	@Override
	public PageInfo<Consumeorders> queryAllRecoreByPageHelper(Integer page, Integer rows, Consumeorders con) {
		ConsumeordersExample example = new ConsumeordersExample();
		Criteria c = example.createCriteria();
		if(con != null) {
			if(con.getMemcardsCardid() != null && !"".equals(con.getMemcardsCardid())) {
				c.andMemcardsCardidLike("%"+con.getMemcardsCardid()+"%");
			}
		}
		PageHelper.startPage(page, rows);
		List<Consumeorders> list = consumeordersMapper.selectByExample(example);
		PageInfo<Consumeorders> pageInfo = new PageInfo(list);
		return pageInfo;
	}
	
}
