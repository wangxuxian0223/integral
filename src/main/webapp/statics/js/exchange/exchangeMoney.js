function bb() {
	if ($("#MC_Name1").text() == "") {
		$.messager.alert("提示", "请先查找积分返现的会员", "warning");
		return false;
	}
	if ($("#CO_GavePoint").val() == "") {
		alert("请输入减积分");
		return false;
	}
	if ($("#er").val() < 0) {
		alert("积分不足");
		return false;
	}
	return true;
}
function screch() {
	if ($("#MC_CardID2").val() == '' || $("#MC_CardID2").val() == null) {
		$.messager.alert("提示", "请输入会员卡号!", "warning");
	} else {
		//查询输入的会员信息
		$.ajax({
			type : "post",
			url : "/members/queryTransInfo",
			data : {memcardsId : $("#MC_CardID2").val()},
			dataType : "json",
			success : function(data) {
				if (data.member.memcardsIsdel != 1) {
					if (data.member.memcardsState == 130) {
						$("#MC_Name1").text(data.member.memcardsName);
						$("#MC_CardID1").text(data.member.cardlevel.cardlevelsLevelname);
						if(data.member.memcardsTotalmoney == null){
							$("#MC_TotalMoney1").text(0);
						}else{
							$("#MC_TotalMoney1").text(data.member.memcardsTotalmoney);
						}
						if(data.member.memcardsPoint == null){
							$("#MC_Point1").text(0);
						}else{
							$("#MC_Point1").text(data.member.memcardsPoint);
						}
						$("#fx_memcardsId").val(data.member.memcardsId);// 会员编号
						$("#dh_memcardsMoney").val(data.member.memcardsMoney);
						$("#aa").text(data.member.cardlevel.cardlevelsPercent);
						$("#shopId").val(data.member.shop.shopId);
						$("#cardId").val(data.member.memcardsCardid);
						$("#memId").text($("#MC_CardID2").val());
					} else {
						$.messager.alert("提示", "该会员已锁定或挂失!", "warning");
					}
				} else {
					$.messager.alert("提示", "没有找到该会员的信息!", "warning");
				}
			}
		});
	}

} // 获取当前时间
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
	$("#CO_CreateTime").val(a);
}
$(function() {
	aa();
	$("#CO_GavePoint").keyup(function() {
		var aa = $("#MC_Point1").text() - $("#CO_GavePoint").val();
		var bb = $("#CO_GavePoint").val() / 10;
		$("#CO_Recash").val(bb);
		$("#er").val(aa);
	});

	$("#sum").click(function() {
		/*var cc = $("#dh_memcardsMoney").val() + $("#CO_Recash").val();
		$("#dh_memcardsMoney1").val(cc);*/
		if (bb()) {
			$('#ff').form('submit', {
				url : "/exchange/exchangeMoney",
				success : function(data) {
					if (data > 0) {
						alert("兑换成功");
					} else {
						alert("兑换失败");
					}
				}
			})
			
			$("#MC_Point1").text($("#er").val());
			$("#er").val("");
			$("#CO_Recash").val("");
			$("#CO_GavePoint").val("");
			/*document.getElementById("ff").reset();*/
			/*$("#MC_CardID2").val($("#memId").text());*/
			$('#ff').datagrid('reload');
		}
	})

});