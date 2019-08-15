//树状菜单和选项卡的联动
$(function() {
	//给菜单添加单击事件
	$(".easyui-tree").tree({
		onClick: function(node) {
			//控制台打印node内容
			//console.log(node);
			//获取attributes属性,判断是菜单还是菜单描述
			var attrs = node.attributes;
			if(attrs == null || attrs.url == null) {
				return;
			}
			//判断选项卡是否存在
			var has = $("#div_tabs").tabs("exists", node.text);
			if(has) {
				//选中存在的选项卡
				$("#div_tabs").tabs("select", node.text);
			} else {
				//创建新的选项卡面板
				$("#div_tabs").tabs("add", {
					title: node.text,
					closable: true,
					content: "<iframe src=" + attrs.url + " style='width:100%;height:98%' frameborder='0'/>"
				})
			}

		}
	});
	
	//修改密码弹框
	if($("#pwdmodifyresult").val() == "yes"){
		/*$.messager.alert('修改用户密码结果', "修改密码成功！", "warning");*/
		/*$("#div_pwd").window("close");*/
		//$.messager.alert("密码修改","密码修改成功！","info");
		$.messager.show({
			title: '密码修改结果',
			msg: '密码修改成功，新密码为:' + $("#newpassword").val(),
			timeout: 3000,
			showType: 'slide'
		});
	}else if($("#pwdmodifyresult").val() == "no"){
		$.messager.alert('修改用户密码结果', "数据库未查到数据，修改密码失败！", "error");
	}else if($("#pwdmodifyresult").val() == "null"){
		$.messager.alert('修改用户密码结果', "页面传值为空，修改密码失败！", "error");
	}
	


})