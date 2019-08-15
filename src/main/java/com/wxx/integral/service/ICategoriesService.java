package com.wxx.integral.service;

import java.util.List;

import com.wxx.integral.entity.Categories;

public interface ICategoriesService {
	public List<Categories> queryByType(String name);
}
