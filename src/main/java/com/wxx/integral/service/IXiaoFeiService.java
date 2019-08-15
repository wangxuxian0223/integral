package com.wxx.integral.service;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Consumeorders;

public interface IXiaoFeiService {

	int fastXiaoFei(Consumeorders con);

	int subScore(Consumeorders con);

	PageInfo<Consumeorders> queryAllRecoreByPageHelper(Integer page, Integer rows, Consumeorders con);

}
