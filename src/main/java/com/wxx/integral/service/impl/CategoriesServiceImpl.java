package com.wxx.integral.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wxx.integral.dao.CategoriesMapper;
import com.wxx.integral.entity.Categories;
import com.wxx.integral.entity.CategoriesExample;
import com.wxx.integral.entity.CategoriesExample.Criteria;
import com.wxx.integral.service.ICategoriesService;

@Service
public class CategoriesServiceImpl implements ICategoriesService{
	@Autowired
	private CategoriesMapper categoriesMapper;

	@Override
	public List<Categories> queryByType(String name) {
		CategoriesExample example = new CategoriesExample();
		Criteria c = example.createCriteria();
		if(name != null && !"".equals(name)) {
			c.andCategoryNameEqualTo(name);
			c.andCategoryPidIsNotNull();
		}
		return categoriesMapper.selectByExample(example);
	}
}
