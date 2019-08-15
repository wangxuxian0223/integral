package com.wxx.integral.dao;

import com.wxx.integral.entity.Users;
import com.wxx.integral.entity.UsersExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UsersMapper {
    int countByExample(UsersExample example);

    int deleteByExample(UsersExample example);

    int deleteByPrimaryKey(Integer usersId);

    int insert(Users record);

    int insertSelective(Users record);

    List<Users> selectByExample(UsersExample example);

    Users selectByPrimaryKey(Integer usersId);

    int updateByExampleSelective(@Param("record") Users record, @Param("example") UsersExample example);

    int updateByExample(@Param("record") Users record, @Param("example") UsersExample example);

    int updateByPrimaryKeySelective(Users record);

    int updateByPrimaryKey(Users record);
    
    Users queryByPwd(@Param("usersLoginname")String usersLoginname, @Param("usersPassword")String usersPassword);
    
    int pwdModify(@Param("usersId")Integer userId, @Param("usersPassword")String usersPassword);
}