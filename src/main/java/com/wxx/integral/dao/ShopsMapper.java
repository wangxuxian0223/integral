package com.wxx.integral.dao;

import com.wxx.integral.entity.Shops;
import com.wxx.integral.entity.ShopsExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ShopsMapper {
    int countByExample(ShopsExample example);

    int deleteByExample(ShopsExample example);

    int deleteByPrimaryKey(Integer shopId);

    int insert(Shops record);

    int insertSelective(Shops record);

    List<Shops> selectByExample(ShopsExample example);

    Shops selectByPrimaryKey(Integer shopId);

    int updateByExampleSelective(@Param("record") Shops record, @Param("example") ShopsExample example);

    int updateByExample(@Param("record") Shops record, @Param("example") ShopsExample example);

    int updateByPrimaryKeySelective(Shops record);

    int updateByPrimaryKey(Shops record);

    List<Shops> queryAllShopName();
}