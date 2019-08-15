$(function(){
	// 获取当前时间
	function time() {
		var de = new Date();
		var y = de.getFullYear();
		var m = de.getMonth() + 1;
		var d = de.getDate();
		var h = de.getHours();
		var mi = de.getMinutes();
		var s = de.getSeconds();
		var a = y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d)
				+ ' ' + (h < 10 ? ('0' + h) : h) + ':'
				+ (mi < 10 ? ('0' + mi) : mi) + ':' + (s < 10 ? ('0' + s) : s);
		$("#CO_CreateTime").text(a);
	}
	//查找
	$("#search").click(function(){
		time();
		if($("#memcardsId").val() == ""){
			$.messager.alert("快速消费", "输入值不能为空！", "warning");
		}else{
			$("#memberId").val($("#memcardsId").val());
			
			
			$.ajax({
				url:"/members/queryTransInfo",
				type:"post",
				dataType:"json",
				data:{memcardsId:$("#memcardsId").val()},
				success:function(data){
					if(data.member == null){
						alert("查无此人");
					}else{
						$("#memcardsName").text(data.member.memcardsName);
						$("#cardlevelsName").text(data.member.cardlevel.cardlevelsLevelname);
						$("#cardlevelsPercent").text(data.member.cardlevel.cardlevelsPercent);
						$("#cardlevelsPoint").text(data.member.cardlevel.cardlevelsPoint);
						$("#memcardsPoint").text(data.member.memcardsPoint);
						$("#memcardsTotalmoney").text(data.member.memcardsTotalmoney);
						$("#memcardsMoney").text(data.member.memcardsMoney);
						
						
						$("#shopId").val(data.member.shopId);
						$("#cardId").val(data.member.memcardsCardid);
						$("#jinezhekou").val(data.member.cardlevel.cardlevelsPercent);
						$("#jifenzhekou").val(data.member.cardlevel.cardlevelsPoint);
						$("#kashangyue").val(data.member.memcardsMoney);
						//输入消费金额
						$("#consumeordersTotalmoney").keyup(function() {
							$("#consumeordersDiscountmoney").val($("#consumeordersTotalmoney").val() * $("#jinezhekou").val());
							$("#consumeordersGavepoint").val(parseInt($("#consumeordersTotalmoney").val() * $("#jifenzhekou").val()));
						});
						
						
					}
				}
			});
		}
	});
	
	
	//结算
	$("#jiesuan").click(function(){
		var input = $("#consumeordersTotalmoney").val();
		var parnt = /^([1-9]\d*(.\d{1,2})?)$|^(0.\d?[1-9])$|^(0.[1-9]\d?)$/;
		
		/*alert("卡上余额："+$("#kashangyue").val()+"...折扣后金额："+$("#consumeordersDiscountmoney").val());*/
		//输入消费金额
		if($("#memcardsId").val() == ""){
			$.messager.alert("快速消费", "输入值不能为空！", "warning");
		}else if(input == ""){
			$.messager.alert("快速消费", "消费金额不能为空！", "warning");
		}else if(!parnt.exec(input)){
			$.messager.alert("快速消费", "消费金额大于0最多两位小数！", "warning");
		}else if($("#consumeordersDiscountmoney").val() == ""){
			$.messager.alert("快速消费", "折后金额不能为空！", "warning");
		}else if($("#consumeordersGavepoint").val() == ""){
			$.messager.alert("快速消费", "获得积分不能为空！", "warning");
		}else if($("#kashangyue").val() < input){
			$.messager.alert("快速消费", "卡上余额不足！", "warning");
		}else{
			//添加消费记录
			$("#xiaofeiForm").form('submit',{
				url:"/xiaofei/fastXiaoFei",
				success:function(data){
					if(data > 0){
						$.messager.alert("快速消费", "结算成功！", "info");
						//刷新
						$.ajax({
							url:"/members/queryTransInfo",
							type:"post",
							dataType:"json",
							data:{memcardsId:$("#memberId").val()},
							success:function(data){
									$("#memcardsName").text(data.member.memcardsName);
									$("#cardlevelsName").text(data.member.cardlevel.cardlevelsLevelname);
									$("#cardlevelsPercent").text(data.member.cardlevel.cardlevelsPercent);
									$("#cardlevelsPoint").text(data.member.cardlevel.cardlevelsPoint);
									$("#memcardsPoint").text(data.member.memcardsPoint);
									$("#memcardsTotalmoney").text(data.member.memcardsTotalmoney);
									$("#memcardsMoney").text(data.member.memcardsMoney);
									$("#kashangyue").val(data.member.memcardsMoney);
								}
						});
					}else{
						$.messager.alert("快速消费", "结算失败！", "warning");
					}
				}
			},"json");
		}
		
		
		
		
		
	});
	
	
	
	
});




















/*function bb() {
	if ($("#MC_Name1").text() == "") {
		$.messager.alert("提示", "请先查找减积分的会员", "warning");
		return false;
	}
	if ($("#CO_TotalMoney").val() == "") {
		$.messager.alert("提示", "请输入消费金额", "warning");
		return false;
	}
	if ($("#CO_DiscountMoney").val() == "") {
		$.messager.alert("提示", "折后总金额不能为空", "warning");
		return false;
	}
	if ($("#CO_GavePoint").val() == "") {
		$.messager.alert("提示", "累计积分数量不能为空", "warning");
		return false;
	}
	return true;
}
function screch() {
	$.ajax({
		type : "get",
		url : "/ConsumeOrder/screch",
		data : {
			s : $("#MC_CardID2").val()
		},
		dataType : "json",
		success : function(data) {
			if (data != "") {
				$.each(data, function(index, o) {
					if (o.MemCard.MC_State == 1) {
						$("#MC_Name1").text(o.MemCard.MC_Name);
						$("#MC_CardID1").text(o.CardLevel.CL_LevelName);
						$("#aa").text(o.CardLevel.CL_Percent);
						$("#aa1").val(o.CardLevel.CL_Point);
						$("#MC_Point1").text(o.MemCard.MC_Point);
						$("#MC_TotalMoney1").text(o.MemCard.MC_TotalMoney);
						$("#MC_ID").val(o.MemCard.MC_ID);
						$("#MC_CardID").val(o.MemCard.MC_CardID);
					} else {
						$.messager.alert("提示", "该会员已锁定或挂失!", "warning");
					}
				});
			} else {
				$.messager.alert("提示", "没有找到该会员的信息!", "warning");
			}
		}
	});
}
// 获取当前时间
function aa() {
	var de = new Date();
	var y = de.getFullYear();
	var m = de.getMonth() + 1;
	var d = de.getDate();
	var h = de.getHours();
	var mi = de.getMinutes();
	var s = de.getSeconds();
	var a = y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d)
			+ ' ' + (h < 10 ? ('0' + h) : h) + ':'
			+ (mi < 10 ? ('0' + mi) : mi) + ':' + (s < 10 ? ('0' + s) : s);
	$("#CO_CreateTime").text(a);
}
$(function() {
	aa();
	$("#CO_TotalMoney").keyup(function() {
		var aa = $("#CO_TotalMoney").val() * $("#aa").text();
		var bb = $("#CO_TotalMoney").val() / $("#aa1").val();
		$("#CO_DiscountMoney").val(aa);
		$("#CO_GavePoint").val(parseInt(bb));
	});

});
*/