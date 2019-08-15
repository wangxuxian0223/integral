package com.wxx.integral.dao;

import com.wxx.integral.entity.Memcards;
import com.wxx.integral.entity.MemcardsExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MemcardsMapper {
    int countByExample(MemcardsExample example);

    int deleteByExample(MemcardsExample example);

    int deleteByPrimaryKey(Integer memcardsId);

    int insert(Memcards record);

    int insertSelective(Memcards record);

    List<Memcards> selectByExample(MemcardsExample example);

    Memcards selectByPrimaryKey(Integer memcardsId);

    int updateByExampleSelective(@Param("record") Memcards record, @Param("example") MemcardsExample example);

    int updateByExample(@Param("record") Memcards record, @Param("example") MemcardsExample example);

    int updateByPrimaryKeySelective(Memcards record);

    int updateByPrimaryKey(Memcards record);

	List<Memcards> queryAllMember();

	List<Memcards> findList();
}