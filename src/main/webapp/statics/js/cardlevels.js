$(function() {
	// 表格控件
	$("#dg").datagrid({
		pageList : [ 5, 10, 15, 20, 25 ],
		fitColumns : true,// 真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。
		toolbar : "#tb", // toolbar:通过选择器指定的工具栏。
		pagination : true, // pagination:如果为true，则在DataGrid控件底部显示分页工具栏。
		fit : true, // fit:当设置为true的时候面板大小将自适应父容器。
		singleSelect : true, // 如果为true，则只允许选择一行。
		rownumbers : true, // 如果为true，则显示一个行号列。
		url : "/cardlevels/queryByPageHelper", // url:设置能够返回JSON数据的Action所对应的路径
		columns : [ [ {
			field : 'cardlevelsId',
			title : '等级编号',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.cardlevelsId;
			}
		}, {
			field : 'cardlevelsLevelname',
			title : '等级名称',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.cardlevelsLevelname;
			}
		}, {
			field : 'cardlevelsNeedpoint',
			title : '所需最大积分',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.cardlevelsNeedpoint;
			}
		}, {
			field : 'cardlevelsPoint',
			title : '扣分比例',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.cardlevelsPoint;
			}
		}, {
			field : 'cardlevelsPercent',
			title : '折扣比例',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.cardlevelsPercent;
			}
		}, ] ]
	});
	
	//模糊查询
	$("#search").click(function() {
		$('#dg').datagrid('load', {
			cardlevelsLevelname : $('#cardlevelsLevelname').val()
		});
	});
	
	//添加
	$("#insert").click(function(){
		//打开添加店铺窗口
		$("#div_addCardlevel").window("open");
		//再次打开添加敞口时重置清空上次填的内容
		$("#Add_cardlevelForm").form("reset");
	});
	
	//修改
	$("#update").click(function(){
		var row = $("#dg").datagrid("getSelected");
		if(row != null){
			//ajax查询已选中的会员信息并显示
			$.ajax({
				url:"/cardlevels/toupdateCardlevel",
				type:"post",//请求方式
				data:{cardlevelsId:row.cardlevelsId},//页面要提交的数据
				dataType:"json",//返回的数据类型
				success:function(data){//data为控制器返回来的值
					if(data.cardlevel == null){
						$.messager.alert("修改会员积分信息", "未查到选中会员积分的信息！", "warning");
					}else{
						Update_CardlevelsId.val(data.cardlevel.cardlevelsId),
						Update_CardlevelsLevelname.val(data.cardlevel.cardlevelsLevelname),
						Update_CardlevelsNeedpoint.val(data.cardlevel.cardlevelsNeedpoint),
						Update_CardlevelsPoint.val(data.cardlevel.cardlevelsPoint),
						Update_CardlevelsPercent.val(data.cardlevel.cardlevelsPercent)
						//打开修改店铺窗口并显示信息
						$("#div_updateCardlevel").window("open");
					}
				}
			});
		}else{
			$.messager.alert("提示", "请选择需要修改的行", "warning");
		}
	});
	
});