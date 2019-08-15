/*校验登录信息*/
$(function() {
	//登录校验
	$("#btnCon").click(function() {
		//校验用户信息
		if($("#USERS_LOGINNAME").val() == "") {
			//使用EasyUI的信息框进行提示
			$.messager.alert('登录提示', "用户名不能为空！", "warning");
		} else if($("#USERS_PASSWORD").val() == "") {
			//使用EasyUI的信息框进行提示
			$.messager.alert('登录提示', "密码不能为空！", "warning");
		} else {
			$("form").submit();
		}
	})
	//重置
	$("#btnCan").click(function() {
		$("form").get(0).reset();
	})
	
	//登陆失败弹框
	if($("#loginResult").val() == "loginNull"){
		$.messager.alert('登录结果', "页面传值为空，登陆失败！", "error");
	}else if($("#loginResult").val() == "loginNo"){
		$.messager.alert('登录结果', "数据库未查到数据，登陆失败！", "error");
	}

})