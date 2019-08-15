package com.wxx.integral.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wxx.integral.dao.MemcardsMapper;
import com.wxx.integral.dao.TransferlogsMapper;
import com.wxx.integral.entity.Memcards;
import com.wxx.integral.entity.Transferlogs;
import com.wxx.integral.service.ITransMoneyLogsService;

@Service
public class TransMoneyLogsServiceImpl implements ITransMoneyLogsService{
	@Autowired
	private TransferlogsMapper transferlogsMapper;
	
	@Autowired
	private MemcardsMapper memcardsMapper;

	@Override
	public int insert(Transferlogs trans) {
		int count = 0;
		if(trans != null) {
			//先修改转账人的money
			Memcards mem1 = memcardsMapper.selectByPrimaryKey(trans.getTransferlogsFrommcId());
			if(mem1 != null) {
				if(mem1.getMemcardsMoney() >= trans.getTransferlogsTransfermoney()) {
					mem1.setMemcardsMoney(mem1.getMemcardsMoney()-trans.getTransferlogsTransfermoney());
					int count1 = memcardsMapper.updateByPrimaryKeySelective(mem1);
					if(count1 > 0) {
						//修改被转账人的money
						Memcards mem2 = memcardsMapper.selectByPrimaryKey(trans.getTransferlogsTomcId());
						if(mem2 != null) {
							mem2.setMemcardsMoney(mem2.getMemcardsMoney()+trans.getTransferlogsTransfermoney());
							int count2 = memcardsMapper.updateByPrimaryKey(mem2);
							if(count2 > 0) {
								trans.setTransferlogsCreatetime(new Date());
								count = transferlogsMapper.insertSelective(trans);
							}
						}
					}
				}
				
				
			} 
			
		}
		return count;
	}
	
}
