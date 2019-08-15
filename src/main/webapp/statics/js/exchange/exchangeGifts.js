function screch() {
	if($("#MC_CardID2").val() == ""){
		$.messager.alert("积分兑换礼品","会员ID不能为空!","warning");
	}else{
		//查询输入的会员信息
		$.ajax({
			type : "post",
			url : "/members/queryTransInfo",
			data : {memcardsId : $("#MC_CardID2").val()},
			dataType : "json",
			success : function(data) {
				if (data.member != null) {
					if (data.member.memcardsState == 130) {
						$("#MC_Name1").text(data.member.memcardsName);
						$("#MC_CardID1").text(data.member.cardlevel.cardlevelsLevelname);
						$("#aa").text(data.member.cardlevel.cardlevelsPercent);
						if(data.member.memcardsPoint == null){
							$("#MC_Point1").text(0);
						}else{
							$("#MC_Point1").text(data.member.memcardsPoint);
						}
						if(data.member.memcardsTotalmoney == null){
							$("#MC_TotalMoney1").text(0);
						}else{
							$("#MC_TotalMoney1").text(data.member.memcardsTotalmoney);
						}
						$("#Point").val(data.member.memcardsPoint);
						$("#MC_ID").val(data.member.memcardsId);
						$("#MC_CardID").val(data.member.memcardsCardid);
					} else {
						$.messager.alert("提示","该会员已锁定或挂失!","warning");
					}
					
				} else {
					alert("没有找到该会员的信息！");
				}
			}
		});
	}
	
} 
	$(function () {     
		var lastIndex = 0;
		$("#dg").datagrid({       
			fitColumns: true,      
			pagination: true, //pagination:如果为true，则在DataGrid控件底部显示分页工具栏。    
			fit: true, //fit:当设置为true的时候面板大小将自适应父容器。。        
			rownumbers: true, //如果为true，则显示一个行号列。        
			url: "/presents/queryByPageHelper", //url:设置能够返回JSON数据的Action所对应的路径      
			columns: [[              
				{ field: 'ck', checkbox: true },       
 				{ field: 'num', title: '兑换数量', editor: 'numberbox', width: 150, align: "center" },     
				{ field: 'exchanggiftsId', title: '礼品编号', width: 150, align: "center" },     
				{ field: 'exchanggiftsGiftcode', title: '礼品代号', width: 150, align: "center" },            
				{ field: 'exchanggiftsGiftname', title: '礼品名称', width: 150, align: "center" },            
				{ field: 'exchanggiftsPoint', title: '所需积分', width: 150, align: "center" },               
				{ field: 'exchanggiftsInteger', title: '礼品数量', width: 150, align: "center" },            
				{ field: 'exchanggiftsExchangnum', title: '已兑换的数量', width: 150, align: "center" },      
				{ field: 'exchanggiftsRemark', title: '备注', width: 150, align: "center" }          
				]],
				onDblClickCell : function(rowIndex, field, value) {
					 var selectedRow = $(this).datagrid('getSelected');
					/* console.log("rowIndex:" + rowIndex);
					console.log("field:" + field);
					console.log("value:" + value); */
					$("#dg").datagrid('endEdit',lastIndex);
					$("#dg").datagrid('beginEdit', rowIndex);
				
					lastIndex = rowIndex;
				}
		});
		
		$("#submit").click(function () {      
			var Point = 0;            
			var num = new Array();       
			var EG_ID = new Array();            
			if ($("#MC_Name1").text() == "") {              
				$.messager.alert("提示", "请先查找减积分的会员!", "warning");               
				return false;          
				}         
			if ($("#CO_GavePoint").val() == "") {       
				$.messager.alert("提示", "请输入减积分!", "warning");       
				return false;         
				}      
			var rows = $("#dg").datagrid("getSelections");       
			for (var i = 0; i < rows.length; i++) {      
				$("#dg").datagrid("endEdit", i);          
				Point = Point + (rows[i].num * rows[i].exchanggiftsPoint);         
				}             
			if (Point > 0) {     
				if (Point <= $("#MC_Point1").text()) {       
					$.ajax({
						cache : false,//cache为true与false 的区别,true的话会读缓存，可能真的到服务器上。,假如上次访问了a.html，第二次的时候得到的是上次访问的a.html的结果，而不是重新到服务器获取。,false的话会在url后面加一个时间缀，让它跑到服务器获取结果。,cache只有GET方式的时候有效
						type : "POST",
						url : '/exchange/addExchang',
						data : {
							rows : JSON.stringify(rows),
							memcardsId : $("#MC_ID").val(),
							memcardsName : $("#MC_Name1").text(),
							memcardsCardid : $("#MC_CardID").val(),
							memcardsPoint : $("#MC_Point1").text()
						},
						success : function(data) {
							$('#dg').datagrid('reload');
							$("#MC_Point1").text($("#MC_Point1").text()-Point);
							$.messager.show({
								
								title : '提示',
								msg : '兑换成功',
								showType : 'fade',
								style : {
									right : '',
									bottom : ''
								}
							});
						}
					})
					    
				} else {        
					$.messager.alert("提示", "请输入正确的数量!!", "warning");  
					}          
			}
		})
		
		});







































/*function screch() {
	if($("#MC_CardID2").val() == ""){
		$.messager.alert("积分兑换礼品","会员ID不能为空!","warning");
	}else{
		//查询输入的会员信息
		$.ajax({
			type : "post",
			url : "/members/queryTransInfo",
			data : {memcardsId : $("#MC_CardID2").val()},
			dataType : "json",
			success : function(data) {
				if (data.member != null) {
					if (data.member.memcardsState == 130) {
						$("#MC_Name1").text(data.member.memcardsName);
						$("#MC_CardID1").text(data.member.cardlevel.cardlevelsLevelname);
						$("#aa").text(data.member.cardlevel.cardlevelsPercent);
						if(data.member.memcardsPoint == null){
							$("#MC_Point1").text(0);
						}else{
							$("#MC_Point1").text(data.member.memcardsPoint);
						}
						if(data.member.memcardsTotalmoney == null){
							$("#MC_TotalMoney1").text(0);
						}else{
							$("#MC_TotalMoney1").text(data.member.memcardsTotalmoney);
						}
						$("#Point").val(data.member.memcardsPoint);
						$("#MC_ID").val(data.member.memcardsId);
						$("#MC_CardID").val(data.member.memcardsCardid);
					} else {
						$.messager.alert("提示","该会员已锁定或挂失!","warning");
					}
					
				} else {
					alert("没有找到该会员的信息！");
				}
			}
		});
	}
	
}

$(function() {
	var lastIndex = 0;
	$("#dg").datagrid({
		fitColumns : true,
		pagination : true, // pagination:如果为true，则在DataGrid控件底部显示分页工具栏。
		fit : true, // fit:当设置为true的时候面板大小将自适应父容器。。
		rownumbers : true, // 如果为true，则显示一个行号列。
		onDblClickCell : function(rowIndex, field, value) {
			var selectedRow = $(this).datagrid('getSelected');
			
			 * console.log("rowIndex:" + rowIndex); console.log("field:" +
			 * field); console.log("value:" + value);
			 
			$("#dg").datagrid('endEdit', lastIndex);
			$("#dg").datagrid('beginEdit', rowIndex);
			lastIndex = rowIndex;
		},
		
		 * onAfterEdit : function (index, row, changes) {
		 * $("#dg").datagrid('endEdit',index); },
		 
		url : "/presents/queryByPageHelper", // url:设置能够返回JSON数据的Action所对应的路径
		columns : [ [ {
			field : 'ck',
			checkbox : true
		}, {
			field : 'exchanglogsNumber',
			title : '兑换数量',
			editor : 'numberbox',
			width : 150,
			align : "center"
		}, {
			field : 'exchanggiftsId',
			title : '礼品编号',
			width : 150,
			align : "center"
		}, {
			field : 'exchanggiftsGiftcode',
			title : '礼品代号',
			width : 150,
			align : "center"
		}, {
			field : 'exchanggiftsGiftname',
			title : '礼品名称',
			width : 150,
			align : "center"
		}, {
			field : 'exchanggiftsPoint',
			title : '所需积分',
			width : 150,
			align : "center"
		}, {
			field : 'exchanggiftsInteger',
			title : '礼品数量',
			width : 150,
			align : "center"
		}, {
			field : 'exchanggiftsExchangnum',
			title : '已兑换的数量',
			width : 150,
			align : "center"
		}, {
			field : 'exchanggiftsRemark',
			title : '备注',
			width : 150,
			align : "center"
		} ] ]
	});

	
	 * $("#dg").keypress(function(evt) { if (evt.keyCode == 13) {
	 * $("#dg").datagrid('endEdit',lastIndex); } });
	 
	$("#submit").click(function() {
		// 判断是否选中行
		var row = $("#dg").datagrid("getSelected");
		if (row == null) {
			$.messager.alert("提示", "请选择礼品！", "warning");
			return;
		}
		// 关闭最后编辑的单元格
		$("#dg").datagrid('endEdit', lastIndex);
			// 定义总积分,用来计算共需要的积分数
			var Point = 0;
			// 检查会员是否已经查找
			if ($("#MC_Name1").text() == "") {
				$.messager.alert("提示", "请先查找减积分的会员!", "warning");
					return;
			}
			// 获取到所有的行
			var rows = $("#dg").datagrid("getSelections");
			// 以每一行进行循环
			for (var i = 0; i < rows.length; i++) {
				// 判断当前行的礼品数量是否填写
				if (rows[i].exchanglogsNumber == null || rows[i].exchanglogsNumber == "") {
					$.messager.alert("提示", "请输入兑换礼品数量!", "warning");
						return;
				}
				// 计算该礼物所需要的积分,并累加
				Point = Point + (rows[i].exchanglogsNumber * rows[i].exchanggiftsPoint);
				
				* console.log("rows[i].exchanglogsNumber:" +
				* rows[i].exchanglogsNumber);
			 * console.log("rows[i].exchanggiftsPoint:" +
			 * rows[i].exchanggiftsPoint);
			 
			}
			// console.log("point:" + Point);
			// 判断是否有兑换
			if (Point > 0) {
				// 判断需要兑换的积分是否小于当前用户的积分
				if (Point <= $("#MC_Point1").text()) {
					$.ajax({
						cache : false,
						type : "POST",
						url : '/exchange/addExchang',
						data : {
							rows : JSON.stringify(rows),
							memcardsId : $("#MC_ID").val(),
							memcardsName : $("#MC_Name1").text(),
							memcardsCardid : $("#MC_CardID").val(),
							memcardsPoint : $("#MC_Point1").text(),
							
							
							
							
						},
						success : function(data) {
							if(data > 0){
								$('#dg').datagrid('reload');
								$("#MC_Point1").text($("#MC_Point1").text() - Point);
								$.messager.show({
									title : '提示',
									msg : '兑换成功',
									showType : 'fade',
									style : {right : '',bottom : ''}
								});
							}else{
								$.messager.show({
									title : '提示',
									msg : '兑换失败',
									showType : 'fade',
									style : {right : '',bottom : ''}
								});
							}
							
						}
					})

				} else {
					$.messager.alert("提示", "积分不足!!", "warning");
				}
			}
		}); // end submit
});*/