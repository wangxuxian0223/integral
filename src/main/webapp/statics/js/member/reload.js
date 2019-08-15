$(function(){
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
	
	//显示信息
	$.ajax({
		url:"/members/queryTransInfo",
		type:"post",
		dataType:"json",
		data:{memcardsId:$("#memcardsId").val()},
		success:function(data){
			if(data.member == null){
				$.messager.alert("会员换卡", "没有查到选中会员的相关信息", "warning");
			}else{
				$("#memcardsName").html(data.member.memcardsName);
				$("#cardlevelsId").html(data.member.cardlevel.cardlevelsLevelname);
				$("#memcardsCreatetime").html(myDate(data.member.memcardsCreatetime));
				$("#memcardsPassword").val(data.member.memcardsPassword);
				$("#MC_ID").val(data.member.memcardsId);
			}
		}
	});
	
	//取消换卡
	$("#btnCan").click(function(){
		window.parent.location.reload();
		parent.layer.closeAll('iframe');
	});
	
	//点击换卡
	$("#btnCon").click(function(){
		if($("#oldPwd").val() == ""){
			$.messager.alert("会员换卡", "密码不能为空！", "warning");
		}else if($("#oldPwd").val() != $("#memcardsPassword").val()){
			$.messager.alert("会员换卡", "密码输入错误！", "warning");
		}else if($("#newCardId").val() == ""){
			$.messager.alert("会员换卡", "新会员卡号不能为空！", "warning");
		}else if($("#newPwd").val() == ""){
			$.messager.alert("会员换卡", "新会员密码不能为空！", "warning");
		}else if($("#rePwd").val() == ""){
			$.messager.alert("会员换卡", "新会员确认密码不能为空！", "warning");
		}else if($("#newPwd").val() != $("#rePwd").val()){
			$.messager.alert("会员换卡", "两次密码不一致！", "warning");
		}else{
			//提交
			$("#memberForm").form('submit',{
				url:"/members/reload",
				success:function(data){
					if(data > 0){
						/*$.messager.alert("会员换卡", "会员换卡成功！", "warning");*/
						alert("会员换卡成功！");
					}else{
						/*$.messager.alert("会员换卡", "会员换卡失败！", "warning");*/
						alert("会员换卡失败！");
					}
					window.parent.location.reload();
					parent.layer.closeAll('iframe');
				}
			});
		}
	});
});

