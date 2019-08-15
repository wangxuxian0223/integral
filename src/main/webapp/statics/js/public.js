var path = $("#path");

/*网页js功能*/
$(function() {
	
	
	//退出功能
	$("#n_title_out").click(function() {
		//提示用户是否确定退出
		/*if(confirm("你真的要退出吗？")){
			window.location.href = path+"users/loginout";
		}*/
		
		$.messager.confirm("确认对话框", "你真的要退出吗？", function(r) {
			//退出
			if(r) {
				window.location.href = "loginout";
			}
		})
	})
	//修改密码
	$("#n_title_pwd").click(function() {
		//打开修改密码窗口
		$("#div_pwd").window("open");
	})
	//确认修改密码
	$("#btnCon").click(function() {
		//校验原有密码
		if($("#oldpassword").val() == "") {
			$.messager.alert("原有密码", "原有密码不能为空！", "warning");
		} else if($("#oldpassword").val() != $("#userpassword").val()){
			//校验输入的原密码与用户登录的密码是否相等
			$.messager.alert("密码校验", "原密码与用户登录密码不一致！", "warning");
		}else if($("#newpassword").val() == "") {
			//校验新密码
			$.messager.alert("新密码", "新密码不能为空！", "warning");
		} else if($("#repassword").val() == "") {
			//校验确认密码
			$.messager.alert("确认密码", "确认密码不能为空！", "warning");
		} else if($("#newpassword").val() != $("#repassword").val()) {
			//校验两次密码
			$.messager.alert("密码校验", "两次密码不一致！", "error");
		} else {
			$("#userForm").submit();
		}
	})
	//取消密码修改
	$("#btnCan").click(function() {
		$("#div_pwd").window("close");
	})
	
	//修改密码结果
	
	
})