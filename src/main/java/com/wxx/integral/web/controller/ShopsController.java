package com.wxx.integral.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Shops;
import com.wxx.integral.service.IShopsService;
import com.wxx.integral.service.IUsersService;

@Controller
@RequestMapping("/shops")
public class ShopsController {
	@Autowired
	private IShopsService iShopsService;
	@Autowired
	private IUsersService iUsersService;
	
	//礼品全查时ajax查询所有商铺名称
	@RequestMapping("queryAllShopName")
	@ResponseBody
	public Object queryAllShopName() {
		List<Shops> list = new ArrayList<Shops>();
		list = iShopsService.queryAllShopName();
		return list;
	}
	
	//分页查询商铺信息
	@RequestMapping("/queryByPageHelper")
	@ResponseBody
	public Object queryByPageHelper(Integer page, Integer rows, Shops shop) {
		Map<String,Object> map = new HashMap<String,Object>();
		PageInfo<Shops> pageInfo = iShopsService.queryByPageHelper(page, rows, shop);
		if(pageInfo != null) {
			map.put("rows", pageInfo.getList());
			map.put("total", pageInfo.getTotal());
		}
		return map;
	}
	
	//添加商铺
	@RequestMapping("/addShop")
	@ResponseBody
	public int addShop(Shops shop) {
		/*shop.setShopIsdel(Shops.ISNOTDELETE);*/
		int count = iShopsService.insert(shop);
		return count;
	}
	
	//删除商铺
	@RequestMapping("/deleteShop")
	@ResponseBody
	public Object deleteShop(Integer shopId) {
		Map<String,String> maps = new HashMap<String,String>();
		int flag = iShopsService.deleteShop(shopId);
		if(flag > 0) {
			maps.put("msg", "成功删除"+flag+"条数据！");
		}else {
			maps.put("msg", "删除失败！");
		}
		return maps;
	}
	
	//去修改页面
	@RequestMapping("toupdateShop")
	@ResponseBody
	public Object todeleteShop(Integer shopId) {
		Map<String, Object> updateMap = new HashMap<String, Object>();
		Shops shop = iShopsService.queryById(shopId);
		updateMap.put("shop", shop);
		return updateMap;
	}
	
	//修改店铺信息
	@RequestMapping("/updateShop")
	@ResponseBody
	public int updateShop(Shops shop) {
		int flag = iShopsService.updateShop(shop);
		return flag;
	}
	
	//去分配管理员页面
	@RequestMapping("toAddAdmin")
	@ResponseBody
	public Object toAddAdmin(Integer shopId) {
		Map<String, Object> addAdminMap = new HashMap<String, Object>();
		Shops shop = iShopsService.queryById(shopId);
		addAdminMap.put("shop", shop);
		return addAdminMap;
	}
	
	//添加管理员
	@RequestMapping("addAdmin")
	@ResponseBody
	public Object addAdmin(Integer shopId) {
		Map<String,String> maps = new HashMap<String,String>();
		Shops shop = iShopsService.queryById(shopId);
		if(shop != null) {
			shop.setShopIshassetadmin(Shops.ISHAVEADMIN);
			int count = iShopsService.updateShop(shop);
			maps.put("msg", "分配管理员成功！");
		}else {
			maps.put("msg", "分配管理员失败！");
		}
		return maps;
	}
}

