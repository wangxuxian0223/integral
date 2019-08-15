$(function(){
	//修改商铺时异步查询商铺类型并显示
	$.ajax({
		url : "/categories/queryTypeByAjax?name=SP_Category",
		type : "post",
		dataType : "json",
		success : function(data){
			$.each(data,function(i, d){
				var op = $("<option value='"+d.categoryId+"'>"+d.categoryTitle+"</option>");
				Update_ShopCategoryId.append(op);
			})
			Update_ShopCategoryId.val(Update_ShopCategoryId.val());
		}
	});
	
	
	//取消修改商铺
	$("#Update_btnCan").click(function() {
		$("#div_updateShop").window("close");
	})
	//确认修改商铺
	$("#Update_btnCon").click(function() {
		if(Update_ShopName.val() == "") {
			$.messager.alert("店铺名称", "店铺名称不能为空！", "warning");
		} else if(Update_ShopCategoryId.val() == 0){
			$.messager.alert("店铺类别", "店铺类别不能为空！", "warning");
		}else if(Update_ShopContactname.val() == "") {
			$.messager.alert("联系人", "联系人不能为空！", "warning");
		} else if(Update_ShopContacttel.val() == "") {
			$.messager.alert("联系电话", "联系电话不能为空！", "warning");
		} else if(Update_ShopAddress.val() == "") {
			$.messager.alert("商铺地址", "商铺地址不能为空！", "warning");
		} else if(Update_ShopRemark.val() == "") {
			$.messager.alert("备注", "备注不能为空！", "warning");
		} else {
			//ajax异步添加
			$.ajax({
				url:"/shops/updateShop",
				type:"post",//请求方式
				data:{
					shopId:Update_ShopId.val(),
					shopName:Update_ShopName.val(),
					shopCategoryId:Update_ShopCategoryId.val(),
					shopContactname:Update_ShopContactname.val(),
					shopContacttel:Update_ShopContacttel.val(),
					shopAddress:Update_ShopAddress.val(),
					shopRemark:Update_ShopRemark.val(),
					shopIsdel:Update_ShopIsdel.val(),
					shopIshassetadmin:Update_ShopIshassetadmin.val()
				},//页面要提交的数据
				dataType:"TEXT",//返回的数据类型
				success:function(data){//data为控制器返回来的值
					if(data.trim() == "1"){
						$.messager.alert("修改店铺", "修改店铺成功！", "warning");
					}else{
						$.messager.alert("修改店铺", "修改店铺失败！", "warning");
					}
					$("#div_updateShop").window("close");
					$("#dg").datagrid("reload");
				}
			});
		}
	})
})
