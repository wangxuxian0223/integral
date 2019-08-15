var AddAdmin_usersLoginname = null;
var AddAdmin_usersRealname = null;
var AddAdmin_usersPassword = null;
var AddAdmin_usersRole = null;

$(function(){
	AddAdmin_usersLoginname = $("#AddAdmin_usersLoginname");
	AddAdmin_usersRealname = $("#AddAdmin_usersRealname");
	AddAdmin_usersPassword = $("#AddAdmin_usersPassword");
	AddAdmin_usersRole = $("#AddAdmin_usersRole");
	
	//确定分配管理员
	$("#AddAdmin_btnCon").click(function() {
		if(AddAdmin_usersLoginname.val() == "") {
			$.messager.alert("分配管理员", "管理员昵称不能为空！", "warning");
		} else if(AddAdmin_usersRealname.val() == ""){
			$.messager.alert("分配管理员", "管理员真实姓名不能为空！", "warning");
		}else {
			//ajax异步添加管理员信息
			$.ajax({
				url:"/users/addUsers",
				type:"post",//请求方式
				data:{
					shopId:AddAdmin_ShopId.val(),
					usersLoginname:AddAdmin_usersLoginname.val(),
					usersRealname:AddAdmin_usersRealname.val(),
					usersPassword:AddAdmin_usersPassword.val(),
					usersRole:AddAdmin_usersRole.val()
				},//页面要提交的数据
				dataType:"TEXT",//返回的数据类型
				success:function(data){//data为控制器返回来的值
					if(data.trim() == "1"){
						$.messager.alert("分配管理员", "添加管理员成功！", "info");
						//ajax异步修改商铺管理状态
						$.ajax({
							url:"/shops/addAdmin",
							type:"post",//请求方式
							data:{shopId:AddAdmin_ShopId.val()},//页面要提交的数据
							dataType:"json",//返回的数据类型
							success:function(data){//data为控制器返回来的值
								$.messager.alert("提示", data.msg, "info");
								/*$("#dg").datagrid("reload");*/
							}
						});
						
					}else{
						$.messager.alert("分配管理员", "添加管理员失败！", "warning");
					}
					$("#div_addAdmin").window("close");
					$("#dg").datagrid("reload");
				}
			});
			
		}
	})
	//取消分配管理员
	$("#AddAdmin_btnCan").click(function() {
		$("#div_addAdmin").window("close");
	})
});