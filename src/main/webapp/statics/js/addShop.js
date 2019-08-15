$(function(){
	//添加商铺时异步查询商铺类型并显示
	$.ajax({
		url : "/categories/queryTypeByAjax?name=SP_Category",
		type : "post",
		dataType : "json",
		success : function(data){
			$.each(data,function(i, d){
				var op = $("<option value='"+d.categoryId+"'>"+d.categoryTitle+"</option>");
				Add_ShopCategoryId.append(op);
			})
		}
	});
	
	//取消添加商铺
	$("#Add_btnCan").click(function() {
		$("#div_addShop").window("close");
	})
	//确认添加商铺
	$("#Add_btnCon").click(function() {
		if(Add_ShopName.val() == "") {
			$.messager.alert("店铺名称", "店铺名称不能为空！", "warning");
		} else if(Add_ShopCategoryId.val() == 0){
			$.messager.alert("店铺类别", "店铺类别不能为空！", "warning");
		}else if(Add_ShopContactname.val() == "") {
			$.messager.alert("联系人", "联系人不能为空！", "warning");
		} else if(Add_ShopContacttel.val() == "") {
			$.messager.alert("联系电话", "联系电话不能为空！", "warning");
		} else if(Add_ShopAddress.val() == "") {
			$.messager.alert("商铺地址", "商铺地址不能为空！", "warning");
		} else if(Add_ShopRemark.val() == "") {
			$.messager.alert("备注", "备注不能为空！", "warning");
		} else {
			//ajax异步添加
			$.ajax({
				url:"/shops/addShop",
				type:"post",//请求方式
				data:{
					shopName:Add_ShopName.val(),
					shopCategoryId:Add_ShopCategoryId.val(),
					shopContactname:Add_ShopContactname.val(),
					shopContacttel:Add_ShopContacttel.val(),
					shopAddress:Add_ShopAddress.val(),
					shopRemark:Add_ShopRemark.val(),
					shopIsdel:Add_ShopIsdel.val(),
					shopIshassetadmin:Add_ShopIshassetadmin.val()
				},//页面要提交的数据
				dataType:"TEXT",//返回的数据类型
				success:function(data){//data为控制器返回来的值
					if(data.trim() == "1"){
						$.messager.alert("添加店铺", "添加店铺成功！", "info");
						
					}else{
						$.messager.alert("添加店铺", "添加店铺失败！", "warning");
					}
					$("#div_addShop").window("close");
					$("#dg").datagrid("reload");
				}
			});
		}
	})
})
