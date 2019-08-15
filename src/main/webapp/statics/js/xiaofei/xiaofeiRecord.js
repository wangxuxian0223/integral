//json 时间转换
function getDate(date) {  
	var dateMilliseconds;       
	if (isNaN(date)) {              
		// 使用正则表达式将日期属性中的非数字（\D）删除
		dateMilliseconds = date.replace(/\D/igm, "");        
	} else {           
		dateMilliseconds = date;       
	}         
	var a = JSON.parse(dateMilliseconds);        
	var date = new Date(a);         
	var year = date.getFullYear();        
	var Month = date.getMonth() + 1;       
	var Day = date.getDate();        
	var Time = date.toLocaleTimeString();         
	return year + "年" + Month + "月" + Day + "日 " + Time;   
}

$(function () {          
	$("#dg").datagrid({              
			fitColumns: true,            
			pagination: true, // pagination:如果为true，则在DataGrid控件底部显示分页工具栏。
			fit: true, // fit:当设置为true的时候面板大小将自适应父容器。
			singleSelect: true, // 如果为true，则只允许选择一行。
			rownumbers: true, // 如果为true，则显示一个行号列。
			url: "/xiaofei/queryAllRecoreByPageHelper", // url:设置能够返回JSON数据的Action所对应的路径
			columns: [[                  
				{ field: 'consumeordersId', title: '订单号', width: 150, align: "center",                      
					formatter: function (value, row) {                         
						return row.consumeordersId;                     
					}                  
				},{ field: 'memcardsCardid', title: '会员卡号', width: 150, align: "center",                      
						formatter: function (value, row) {                          
							return row.memcardsCardid;                    
						}                  
				},{ field: 'usersId', title: '会员姓名', width: 150, align: "center",                      
						formatter: function (value, row) {                        
							return row.member.memcardsName;                     
						}                 
				},{ field: 'consumeordersTotalmoney', title: '额度', width: 150, align: "center",                      
						formatter: function (value, row) { 
							if(value != null){
								return "￥" + row.consumeordersTotalmoney;
							}else{
								return "0";
							}
							                   
						}                 
				},{ field: 'consumeordersDiscountmoney', title: '实际支付', width: 150, align: "center",                     
						formatter: function (value, row) { 
							if(value != null){
								return "￥"+row.consumeordersDiscountmoney;  
							}else{
								return "0";
							}               
						}                 
				},{ field: 'consumeordersGavepoint', title: '积分', width: 150, align: "center",    
						formatter: function (value, row) {           
							return row.consumeordersGavepoint;      
						}                
				},{ field: 'consumeordersRecash', title: '返现金额', width: 150, align: "center",    
						formatter: function (value, row) {      
							if(value != null){
								return "￥" + row.consumeordersRecash; 
							}else{
								return "0";
							}            
						}                 
				},{ field: 'consumeordersOrdertype', title: '类型', width: 150, align: "center",     
						formatter: function (value, row) {                   
							return row.category.categoryTitle;              
						}                
				},{ field: 'consumeordersCreatetime', title: '时间', width: 150, align: "center",   
						formatter: function (value, row) {                       
							return getDate(row.consumeordersCreatetime);    
						}                  
				}]]         
	});  
	
	$(".Search").click(function () {            
		$('#dg').datagrid('load', {                
			memcardsCardid: $('#txtMC_CardIDMC_Mobile').val()   
		});        
	});      	
})
