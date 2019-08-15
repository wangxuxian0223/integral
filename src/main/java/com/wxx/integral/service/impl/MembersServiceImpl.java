package com.wxx.integral.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wxx.integral.dao.MemcardsMapper;
import com.wxx.integral.entity.Memcards;
import com.wxx.integral.entity.MemcardsExample;
import com.wxx.integral.entity.MemcardsExample.Criteria;
import com.wxx.integral.service.IMembersService;

@Service
public class MembersServiceImpl implements IMembersService {
	@Autowired
	private MemcardsMapper memcardsMapper;

	@Override
	public PageInfo<Memcards> queryByPageHelper(Integer page, Integer rows, Memcards member) {
		MemcardsExample example = new MemcardsExample();
		Criteria c = example.createCriteria();
		if (member != null) {
			if (member.getMemcardsCardid() != null && !"".equals(member.getMemcardsCardid())) {
				c.andMemcardsCardidLike("%" + member.getMemcardsCardid() + "%");
			}
			if (member.getMemcardsName() != null && !"".equals(member.getMemcardsName())) {
				c.andMemcardsNameLike("%" + member.getMemcardsName() + "%");
			}
			if (member.getMemcardsMobile() != null && !"".equals(member.getMemcardsMobile())) {
				c.andMemcardsMobileLike("%" + member.getMemcardsMobile() + "%");
			}
			if (member.getCardlevelsId() != null && member.getCardlevelsId() != 0) {
				c.andCardlevelsIdEqualTo(member.getCardlevelsId());
			}
			if (member.getMemcardsState() != null && member.getMemcardsState() != 0) {
				c.andMemcardsStateEqualTo(member.getMemcardsState());
			}
		}
		c.andMemcardsIsdelEqualTo(Memcards.ISNOTDELETE);
		PageHelper.startPage(page, rows);
		List<Memcards> list = memcardsMapper.selectByExample(example);
		PageInfo<Memcards> pageInfo = new PageInfo(list);
		return pageInfo;
	}

	@Override
	public int insert(Memcards member) {
		member.setMemcardsCreatetime(new Date());
		int count = memcardsMapper.insertSelective(member);
		return count;
	}

	@Override
	public Memcards queryById(Integer memcardsRefererid) {
		Memcards member = memcardsMapper.selectByPrimaryKey(memcardsRefererid);
		return member;
	}

	@Override
	public int update(Memcards member) {
		int count = memcardsMapper.updateByPrimaryKeySelective(member);
		return count;
	}

	@Override
	public int deleteMember(Integer memcardsId) {
		int count = 0;
		Memcards member = memcardsMapper.selectByPrimaryKey(memcardsId);
		if (member != null && member.getMemcardsIsdel() == 0) {
			member.setMemcardsIsdel(1);
			count = memcardsMapper.updateByPrimaryKeySelective(member);
		}
		return count;
	}

	@Override
	public int reload(Memcards member) {
		int count = 0;
		if (member != null) {
			Memcards mem = memcardsMapper.selectByPrimaryKey(member.getMemcardsId());
			mem.setMemcardsCardid(member.getMemcardsCardid());
			mem.setMemcardsPassword(member.getMemcardsPassword());
			count = memcardsMapper.updateByPrimaryKeySelective(mem);
		}
		return count;
	}
	
	//导出
	public List<Memcards> findList() {
		// TODO Auto-generated method stub
		return memcardsMapper.findList();
	}
	
	//导入
	@Override
	public void importExcel(List<Memcards> memcardsList) {
		for(Memcards m : memcardsList) {
			memcardsMapper.insert(m);
		}
	}


}
