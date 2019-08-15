var memcardsCardid = null;
var memcardsName = null;
var memcardsMobile = null;
var cardlevelsId = null;
var memcardsState = null;

$(function() {
	memcardsCardid = $("#memcardsCardid");
	memcardsName = $("#memcardsName");
	memcardsMobile = $("#memcardsMobile");
	cardlevelsId = $("#cardlevelsId");
	memcardsState = $("#memcardsState");
	
	//时间转换
	function myDate(str){
		var date = new Date(str);
		Y = date.getFullYear() + '-';
		M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		D = date.getDate() + ' ';
		h = date.getHours() + ':';
		m = date.getMinutes() + ':';
		s = date.getSeconds(); 
		return Y+M+D+h+m+s;
	}
	
	

	$("#dg").datagrid({
		pageList : [ 5, 10, 15, 20, 25 ],
		fitColumns : true,
		toolbar : "#tb", // toolbar:通过选择器指定的工具栏。
		pagination : true, // pagination:如果为true，则在DataGrid控件底部显示分页工具栏。
		fit : true, // fit:当设置为true的时候面板大小将自适应父容器。
		singleSelect : true, // 如果为true，则只允许选择一行。
		rownumbers : true, // 如果为true，则显示一个行号列。
		url : "/members/queryByPageHelper", // url:设置能够返回JSON数据的Action所对应的路径
		columns : [ [ {
			field : 'memcardsCardid',
			title : '会员卡号',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.memcardsCardid;
			}
		}, {
			field : 'memcardsName',
			title : '会员姓名',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.memcardsName;
			}
		}, {
			field : 'shopId',
			title : '所属店铺',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.shop.shopName;
			}
		}, {
			field : 'memcardsMobile',
			title : '手机号码',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.memcardsMobile;
			}
		}, {
			field : 'memcardsState',
			title : '会员卡状态',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				/* return row.memcardsState; */
				return row.category.categoryTitle;
			}
		}, {
			field : 'memcardsPoint',
			title : '当前积分',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				return row.memcardsPoint;
			}
		}, {
			field : 'memcardsSex',
			title : '性别',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if (row.memcardsSex) {
					return "男";
				} else {
					return "女";
				}
			}
		}, {
			field : 'memcardsCreatetime',
			title : '登记时间',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				/* return FormatJsonTime(row.memcardsCreatetime); */
				return myDate(row.memcardsCreatetime);
			}
		}, {
			field : 'cardlevelsId',
			title : '当前等级',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				/* return row.cardlevelsId; */
				return row.cardlevel.cardlevelsLevelname;
			}
		}, {
			field : 'memcardsIsdel',
			title : '是否删除',
			width : 100,
			align : "center",
			formatter : function(value, row) {
				if(row.memcardsIsdel){
					return "是";
				}else{
					return "否"; 
				}
			}
		} ] ]
	});

	// 会员卡状态ajax查询
	$.ajax({
		url : "/categories/queryTypeByAjax?name=CD_State",
		type : "post",
		dataType : "json",
		success : function(data) {
			$.each(data, function(i, d) {
				var op = $("<option value='" + d.categoryId + "'>"
						+ d.categoryTitle + "</option>");
				memcardsState.append(op);
			})
		}
	});

	// 会员等级ajax查询
	$.ajax({
		url : "/cardlevels/queryAllCardlevelNameByAjax",
		type : "post",
		dataType : "json",
		success : function(data) {
			$.each(data, function(i, d) {
				var op = $("<option value='" + d.cardlevelsId + "'>"
						+ d.cardlevelsLevelname + "</option>");
				cardlevelsId.append(op);
			})
		}
	});

	// 模糊查询
	$(".Search").click(function() {
		$('#dg').datagrid('load', {
			memcardsCardid : memcardsCardid.val(),
			memcardsName : memcardsName.val(),
			memcardsMobile : memcardsMobile.val(),
			cardlevelsId : cardlevelsId.val(),
			memcardsState : memcardsState.val()
		});
	});
	
	//添加
	$(".Insert").click(function() {
		$("#dlg").dialog({
			width : 900,
			height : 500,
			align : "center"
		}).dialog("setTitle", "添加会员").dialog("open");
		$("#frm1").attr("src", "/page/member/addMember");
	});
	
	//删除
	$(".Delete").click(function() {
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			$.messager.confirm("提示", "是否删除该条信息", function(r) {
				if (r) {
					$.get("/members/deleteMember", {
						memcardsId : row.memcardsId
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
	
	//修改
	$(".Update").click(function() {
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			$("#dlg").dialog({
				width : 900,
				height : 500
			}).dialog("setTitle", "修改会员").dialog("open");
			$("#frm1").attr("src", "/page/member/updateMember?param1=" + row.memcardsId);
		} else {
			$.messager.alert("提示", "请选择需要编辑的行", "warning");
		}
	});
	
	
	//挂失锁定
	$(".Lock").click(function() {
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			/*if(row.memcardsState == 131){
				$.messager.alert("提示", "改卡已挂失！", "warning");
			}else if(row.memcardsState == 132){
				$.messager.alert("提示", "改卡已锁定！", "warning");
			}else{*/
				$("#dlg").dialog({
					width : 500,
					height : 350
				}).dialog("setTitle", "会员锁定/挂失").dialog("open");
				$("#frm1").attr("src", "/page/member/lock?param1=" + row.memcardsId);
			/*}*/
		} else {
			$.messager.alert("提示", "请选择需要编辑的行", "warning");
		}
	});
	
	//会员转账
	$(".TransferL").click(function() {
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			$("#dlg").dialog({
				width : 500,
				height : 350
			}).dialog("setTitle", "会员转账").dialog("open");
			$("#frm1").attr("src", "/page/member/transMember?param1=" + row.memcardsId);
		} else {
			$.messager.alert("提示", "请选择行", "warning");
		}
	});
	
	//会员换卡
	$(".Reload").click(function() {
		var row = $("#dg").datagrid("getSelected");
		if (row != null) {
			$("#dlg").dialog({
				width : 500,
				height : 360
			}).dialog("setTitle", "会员换卡").dialog("open");
			$("#frm1").attr("src", "/page/member/reload?param1=" + row.memcardsId);
		} else {
			$.messager.alert("提示", "请选择行", "warning");
		}
	});
	$(".ToExcel").click(function() {
		location = "/members/export";
		/*$.ajax({
			url:"/member/toExcel",
			type:"post",
			dataType:"json",
			success:function(){
				if(data > 0){
					alert("导出成功！");
				}else{
					alert("导出失败！");
				}
			}
		});*/
	});
	$(".InExcel").click(function() {
		$("#dlg").dialog({
			width : 430,
			height : 200
		}).dialog("setTitle", "导入Excel").dialog("open");
		$("#frm1").attr("src", "/page/member/import");
	});
});
