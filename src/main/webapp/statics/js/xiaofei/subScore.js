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
		var id = $("#MC_CardID2").val();
		var parnt = /^([1-9]\d*(\.\d*[1-9])?)$/;
		if(id == ""){
			$.messager.alert("减积分", "输入值不能为空！", "warning");
		}else if(!parnt.exec(id)){
			$.messager.alert("减积分", "输入值必须是大于0的整数！", "warning");
		}else{
			$("#memberId").val($("#MC_CardID2").val());
			$.ajax({
				url:"/members/queryTransInfo",
				type:"post",
				dataType:"json",
				data:{memcardsId:$("#MC_CardID2").val()},
				success:function(data){
					if (data.member != null) {
						$("#MC_Name1").text(data.member.memcardsName);
						$("#MC_CardID1").text(data.member.cardlevel.cardlevelsLevelname);
						$("#MC_Point1").text(data.member.memcardsPoint);
						$("#MC_TotalMoney1").text(data.member.memcardsTotalmoney);
						
						$("#shengyujifen").val(data.member.memcardsPoint);
						$("#memberId").val(data.member.memcardsId);
						$("#cardId").val(data.member.memcardsCardid);
						$("#shopId").val(data.member.shopId);
					} else {
						alert("没有找到该会员的信息！");
					}
				}
			})
		}
	});
	
	//减积分
	$("#subScore").click(function(){
		var input = $("#CO_GavePoint").val();
		var parnt = /^([1-9]\d*(\.\d*[1-9])?)$/;
		if ($("#MC_CardID2").val() == "") {
			$.messager.alert("提示", "请先查找减积分的会员", "warning");
		}else if (input == "") {
			$.messager.alert("提示", "请输入减积分", "warning");
		}else if(!parnt.exec(input)){
			$.messager.alert("提示", "积分必须是大于0的整数", "warning");
		}else if($("#shengyujifen").val() < input){
			$.messager.alert("提示", "积分数量不够", "warning");
		}else{
			$("#subScoreForm").form('submit',{
				url:"/xiaofei/subScore",
				success:function(data){
					if(data > 0){
						$.messager.alert("减积分", "减积分成功！", "info");
						//刷新
						$.ajax({
							url:"/members/queryTransInfo",
							type:"post",
							dataType:"json",
							data:{memcardsId:$("#MC_CardID2").val()},
							success:function(data){
								if (data.member != null) {
									$("#shengyujifen").val(data.member.memcardsPoint);
									$("#MC_Name1").text(data.member.memcardsName);
									$("#MC_CardID1").text(data.member.cardlevel.cardlevelsLevelname);
									$("#MC_Point1").text(data.member.memcardsPoint);
									$("#MC_TotalMoney1").text(data.member.memcardsTotalmoney);
								} else {
									alert("没有找到该会员的信息！");
								}
							}
						})
					}else{
						$.messager.alert("减积分", "减积分失败！", "warning");
					}
				}
			},"json")
			
			
		}
		
	});
	
});