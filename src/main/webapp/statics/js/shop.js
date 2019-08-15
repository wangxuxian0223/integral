//添加商铺的变量
var Add_ShopName = null;
var Add_ShopCategoryId = null;
var Add_ShopContactname = null;
var Add_ShopContacttel = null;
var Add_ShopAddress = null;
var Add_ShopRemark = null;
var Add_ShopIsdel = null;
var Add_ShopIshassetadmin = null;
//修改商铺的变量
var Update_ShopId = null;
var Update_ShopName = null;
var Update_ShopCategoryId = null;
var Update_ShopContactname = null;
var Update_ShopContacttel = null;
var Update_ShopAddress = null;
var Update_ShopRemark = null;
var Update_ShopIsdel = null;
var Update_ShopIshassetadmin = null;
//分配管理员
var AddAdmin_ShopId = null;




$(function() {
	Add_ShopName = $("#Add_ShopName");
	Add_ShopCategoryId = $("#Add_ShopCategoryId");
	Add_ShopContactname = $("#Add_ShopContactname");
	Add_ShopContacttel = $("#Add_ShopContacttel");
	Add_ShopAddress = $("#Add_ShopAddress");
	Add_ShopRemark = $("#Add_ShopRemark");
	Add_ShopIsdel = $("#Add_ShopIsdel");
	Add_ShopIshassetadmin = $("#Add_ShopIshassetadmin");
	
	Update_ShopId = $("#Update_ShopId");
	Update_ShopName = $("#Update_ShopName");
	Update_ShopCategoryId = $("#Update_ShopCategoryId");
	Update_ShopContactname = $("#Update_ShopContactname");
	Update_ShopContacttel = $("#Update_ShopContacttel");
	Update_ShopAddress = $("#Update_ShopAddress");
	Update_ShopRemark = $("#Update_ShopRemark");
	Update_ShopIsdel = $("#Update_ShopIsdel");
	Update_ShopIshassetadmin = $("#Update_ShopIshassetadmin");

	AddAdmin_ShopId = $("#AddAdmin_ShopId");
	
	
	//表格控件
	$("#dg").datagrid({
		pageList : [ 5, 10, 15, 20, 25 ],
		fitColumns : true,// 真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。
		toolbar : "#tb", // toolbar:通过选择器指定的工具栏。
		pagination : true, // pagination:如果为true，则在DataGrid控件底部显示分页工具栏。
		fit : true,// fit:当设置为true的时候面板大小将自适应父容器。
		singleSelect : true, // 如果为true，则只允许选择一行。
		rownumbers : true, // 如果为true，则显示一个行号列。
		url : "/shops/queryByPageHelper", // url:设置能够返回JSON数据的Action所对应的路径
		columns : [ [ {
			field : 'shopId',
			title : '店铺编号',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.shopId;
			}
		}, {
			field : 'shopName',
			title : '店铺名称',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.shopName;
			}
		}, {
			field : 'categories',
			title : '店铺类别',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.category.categoryTitle;
			}
		}, {
			field : 'shopContactname',
			title : '联系人',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if(value != null && value != ""){
					return row.shopContactname;
				}else{
					return "暂无";
				}
				
			}
		}, {
			field : 'shopContacttel',
			title : '联系电话',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if(value != null && value != ""){
					return row.shopContacttel;
				}else{
					return "暂无";
				}
				
			}
		}, {
			field : 'shopAddress',
			title : '店铺地址',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if(value != null && value != ""){
					return row.shopAddress;
				}else{
					return "暂无";
				}
				
			}
		}, {
			field : 'shopRemark',
			title : '备注',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if(value != null && value != ""){
					return row.shopRemark;
				}else{
					return "暂无";
				}
				
			}
		}, {
			field : 'shopIshassetadmin',
			title : '是否已分配管理员',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if (row.shopIshassetadmin) {
					return "是";
				} else {
					return "否";
				}
			}
		}, {
			field : 'shopCreatetime',
			title : '加盟时间',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if(value != null && value != ""){
					return row.shopCreatetime;
				}else{
					return "暂无";
				}
			}
		}, {
			field : 'shopIsdel',
			title : '店铺状态',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if (row.shopIsdel) {
					return "已删除";
				} else {
					return "正常";
				}
			}
		}, ] ]
	});
	
	//模糊查询
	$("#search").click(function() {
		$('#dg').datagrid('load', {
			shopName : $('#shopName').val(),
			shopContactname : $('#shopContactname').val(),
			shopAddress : $('#shopAddress').val()
		});
	});
	
	//添加
	$("#insert").click(function() {
		//打开添加店铺窗口
		$("#div_addShop").window("open");
		$("#Add_shopForm").form("reset");
	})
	
	//修改
	$("#update").click(function() {
		//row为选择行
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			//ajax查询已选中的店铺信息并显示
			$.ajax({
				url:"/shops/toupdateShop",
				type:"post",//请求方式
				data:{shopId:row.shopId},//页面要提交的数据
				dataType:"json",//返回的数据类型
				success:function(data){//data为控制器返回来的值
					if(data.shop == null){
						$.messager.alert("修改店铺", "未查到选中商铺的信息！", "warning");
					}else{
						Update_ShopId.val(data.shop.shopId),
						Update_ShopName.val(data.shop.shopName),
						Update_ShopCategoryId.val(data.shop.shopCategoryId),
						Update_ShopContactname.val(data.shop.shopContactname),
						Update_ShopContacttel.val(data.shop.shopContacttel),
						Update_ShopAddress.val(data.shop.shopAddress),
						Update_ShopRemark.val(data.shop.shopRemark),
						//打开修改店铺窗口并显示信息
						$("#div_updateShop").window("open");
					}
				}
			});
		} else {
			$.messager.alert("提示", "请选择需要编辑的行", "warning");
		}
	});
	
	//删除
	$("#delete").click(function() {
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			$.messager.confirm("提示", "是否删除该条店铺信息", function(r) {
				if (r) {
					$.ajax({
						url:"/shops/deleteShop",
						type:"post",//请求方式
						data:{shopId:row.shopId},//页面要提交的数据
						dataType:"json",//返回的数据类型
						success:function(data){//data为控制器返回来的值
							$.messager.alert("提示", data.msg, "info");
							$("#dg").datagrid("reload");
						}
					});
				}
			});
		} else {
			$.messager.alert("提示", "请选择需要删除的行", "warning");
		}
	});
	
	//分配管理员
	$("#addUser").click(
			function() {
				var row = $("#dg").datagrid("getSelected");
				if (row != null) {
					if (!row.shopIshassetadmin) {
						//通过shopId，ajax异步查询选定商铺信息
						$.ajax({
							url:"/shops/toAddAdmin",
							type:"post",//请求方式
							data:{shopId:row.shopId},//页面要提交的数据
							dataType:"json",//返回的数据类型
							success:function(data){//data为控制器返回来的值
								if(data.shop == null){
									$.messager.alert("分配管理员", "未查到选中商铺的信息！", "warning");
								}else{
									AddAdmin_ShopId.val(data.shop.shopId),
									//打开修改店铺窗口并显示信息
									$("#div_addAdmin").window("open");
								}
							}
						});
					} else {
						$.messager.alert("提示", "该店铺已分配管理员", "warning");
					}
				} else {
					$.messager.alert("提示", "请选择需要操作的行", "warning");
				}
			});
	
	
	
	
	
	
	/*$("#insert").click(
			function() {
				$("#dlg").dialog({
					width : 400,
					height : 400,
					closed : true,
					closable : true,
					modal : true,
				}).dialog("setTitle", "添加店铺").dialog("open");
				$("#frm1").attr("src","/page/shop/addShop");
			});*/
	/*$("#delete").click(function() {
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			$.messager.confirm("提示", "是否删除该条店铺信息", function(r) {
				if (r) {
					$.get("/shops/deleteShop", {
						shopId : row.shopId
					}, function(data) {
						$.messager.alert("提示", data.msg, "info");
						$("#dg").datagrid("reload");
					},"json");
				}
			});
		} else {
			$.messager.alert("提示", "请选择需要删除的行", "warning");
		}
	});
	$("#update").click(
			function() {
				//row为选择行
				var row = $("#dg").datagrid("getSelected");
				if (row != null) {
					$("#dlg").dialog({
						width : 400,
						height : 400
					}).dialog("setTitle", "修改店铺").dialog("open");
					$("#frm1").attr(
							"src", "/shops/toupdateShop?shopId="+ row.shopId);
				} else {
					$.messager.alert("提示", "请选择需要编辑的行", "warning");
				}
			});
	$("#addUser").click(
			function() {
				var row = $("#dg").datagrid("getSelected");
				if (row != null) {
					if (!row.shopIshassetadmin) {
						$("#dlg").dialog({
							width : 400,
							height : 400
						}).dialog("setTitle", "分配管理员").dialog("open");
						$("#frm1").attr(
								"src",
								"/shops/toAddAdmin?shopId="+ row.shopId);
					} else {
						$.messager.alert("提示", "该店铺已分配管理员", "warning");
					}

				} else {
					$.messager.alert("提示", "请选择需要操作的行", "warning");
				}
			});
	$("#search").click(function() {
		$('#dg').datagrid('load', {
			shopName : $('#shopName').val(),
			shopContactname : $('#shopContactname').val(),
			shopAddress : $('#shopAddress').val()
		});
	});*/
});