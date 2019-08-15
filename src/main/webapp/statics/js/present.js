var presentsShopId = null;//礼品表的shopId字段
/*var Add_shopId = null;*/

$(function() {
	presentsShopId = $("#presentsShopId");
	/*Add_shopId = $("#Add_shopId");*/
	
	//模糊查询礼品时异步查询商铺名称并显示
	$.ajax({
		url : "/shops/queryAllShopName",
		type : "post",
		dataType : "json",
		success : function(data){
			$.each(data,function(i, d){
				var op = $("<option value='"+d.shopId+"'>"+d.shopName+"</option>");
				presentsShopId.append(op);
			})
		}
	});
	
	//表格控件
	$("#dg").datagrid({
		pageList : [ 1, 10, 15, 20, 25 ],
		fitColumns : true,// 真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。
		toolbar : "#tb", // toolbar:通过选择器指定的工具栏。
		pagination : true, // pagination:如果为true，则在DataGrid控件底部显示分页工具栏。
		fit : true,// fit:当设置为true的时候面板大小将自适应父容器。
		singleSelect : true, // 如果为true，则只允许选择一行。
		rownumbers : true, // 如果为true，则显示一个行号列。
		url : "/presents/queryByPageHelper", // url:设置能够返回JSON数据的Action所对应的路径
		columns : [ [ {
			field : 'exchanggiftsId',
			title : '礼品编号',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.exchanggiftsId;
			}
		}, {
			field : 'shopId',
			title : '店铺编号',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.shop.shopName;
			}
		}, {
			field : 'exchanggiftsGiftcode',
			title : '礼品编码',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.exchanggiftsGiftcode;
			}
		}, {
			field : 'exchanggiftsGiftname',
			title : '礼品名称',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.exchanggiftsGiftname;
			}
		}, {
			field : 'exchanggiftsPhoto',
			title : '礼品图片',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if(value != null && value != ""){
					return row.exchanggiftsPhoto;
				}else{
					return "暂无";
				}
				
			}
		}, {
			field : 'exchanggiftsPoint',
			title : '所需积分',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.exchanggiftsPoint;
			}
		}, {
			field : 'exchanggiftsInteger',
			title : '总数量',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.exchanggiftsInteger;
			}
		}, {
			field : 'exchanggiftsExchangnum',
			title : '已兑换的数量',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.exchanggiftsExchangnum;
			}
		}, {
			field : 'exchanggiftsRemark',
			title : '备注',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.exchanggiftsRemark;
			}
		}, {
			field : 'exchanggiftsState',
			title : '礼品状态',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if (row.exchanggiftsState) {
					return "已被领取";
				} else {
					return "未被领取";
				}
			}
		},{
			field : 'exchanggiftsIsdel',
			title : '礼品是否被删除',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if (row.exchanggiftsIsdel) {
					return "已被删除";
				} else {
					return "未被删除";
				}
			}
		} ] ]
	});
	
	//模糊查询
	$("#search").click(function() {
		$('#dg').datagrid('load', {
			shopId : $('#presentsShopId').val(),
			exchanggiftsGiftname : $('#exchanggiftsGiftname').val()
		});
	});
	
	//新增礼品
	$("#insert").click(function() {
		//打开添加店铺窗口
		$("#div_addPresent").window("open");
		$("#Add_presentForm").form("reset");
		//ajax全查商铺名称并显示
		$.ajax({
			url : "/shops/queryAllShopName",
			type : "post",
			dataType : "json",
			success : function(data){
				$.each(data,function(i, d){
					var opt = $("<option value='"+d.shopId+"'>"+d.shopName+"</option>");
					Add_shopId.append(opt);
				})
			}
		});
	})
	
	//修改
	$("#update").click(function() {
		//row为选择行
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			//ajax查询已选中的店铺信息并显示
			$.ajax({
				url:"/presents/toupdatePresent",
				type:"post",//请求方式
				data:{exchanggiftsId:row.exchanggiftsId},//页面要提交的数据
				dataType:"json",//返回的数据类型
				success:function(data){//data为控制器返回来的值
					if(data.Exchanggifts == null){
						$.messager.alert("修改礼品", "未查到选中礼品的信息！", "warning");
					}else{
						
						//查到的选中的礼品信息显示在页面上
						Update_exchanggiftsId.val(data.Exchanggifts.exchanggiftsId),
						Update_shopId.val(data.Exchanggifts.shopId),
						Update_exchanggiftsGiftcode.val(data.Exchanggifts.exchanggiftsGiftcode),
						Update_exchanggiftsGiftname.val(data.Exchanggifts.exchanggiftsGiftname),
						Update_exchanggiftsPoint.val(data.Exchanggifts.exchanggiftsPoint),
						Update_exchanggiftsInteger.val(data.Exchanggifts.exchanggiftsInteger),
						Update_exchanggiftsRemark.val(data.Exchanggifts.exchanggiftsRemark),
						Update_exchanggiftsPhoto.val(data.Exchanggifts.exchanggiftsPhoto),
						Update_exchanggiftsState.val(data.Exchanggifts.exchanggiftsState),
						Update_exchanggiftsIsdel.val(data.Exchanggifts.exchanggiftsIsdel),
						Update_exchanggiftsExchangnum.val(data.Exchanggifts.exchanggiftsExchangnum),
						//打开修改店铺窗口并显示信息
						$("#div_updatePresent").window("open");
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
						url:"/presents/deletePresent",
						type:"post",//请求方式
						data:{exchanggiftsId:row.exchanggiftsId},//页面要提交的数据
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
	
});