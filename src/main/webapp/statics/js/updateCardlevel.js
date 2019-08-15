var Update_CardlevelsId = null;
var Update_CardlevelsLevelname = null;
var Update_CardlevelsNeedpoint = null;
var Update_CardlevelsPoint = null;
var Update_CardlevelsPercent = null;
$(function(){
	Update_CardlevelsId = $("#Update_CardlevelsId");
	Update_CardlevelsLevelname = $("#Update_CardlevelsLevelname");
	Update_CardlevelsNeedpoint = $("#Update_CardlevelsNeedpoint");
	Update_CardlevelsPoint = $("#Update_CardlevelsPoint");
	Update_CardlevelsPercent = $("#Update_CardlevelsPercent");
	
	//取消修改商铺
	$("#Update_btnCan").click(function() {
		$("#div_updateCardlevel").window("close");
	})
	//确认修改商铺
	$("#Update_btnCon").click(function() {
		if(Update_CardlevelsLevelname.val() == "") {
			$.messager.alert("会员积分信息修改", "等级名称不能为空！", "warning");
		} else if(Update_CardlevelsNeedpoint.val() == 0){
			$.messager.alert("会员积分信息修改", "所需最大积分不能为空！", "warning");
		}else if(Update_CardlevelsPoint.val() == "") {
			$.messager.alert("会员积分信息修改", "扣分比例不能为空！", "warning");
		} else if(Update_CardlevelsPercent.val() == "") {
			$.messager.alert("会员积分信息修改", "折扣比例不能为空！", "warning");
		} else {
			//ajax异步添加
			$.ajax({
				url:"/cardlevels/updateCardlevel",
				type:"post",//请求方式
				data:{
					cardlevelsId:Update_CardlevelsId.val(),
					cardlevelsLevelname:Update_CardlevelsLevelname.val(),
					cardlevelsNeedpoint:Update_CardlevelsNeedpoint.val(),
					cardlevelsPoint:Update_CardlevelsPoint.val(),
					cardlevelsPercent:Update_CardlevelsPercent.val()
				},//页面要提交的数据
				dataType:"TEXT",//返回的数据类型
				success:function(data){//data为控制器返回来的值
					if(data.trim() == "1"){
						$.messager.alert("会员积分信息修改", "会员积分信息修改成功！", "info");
					}else{
						$.messager.alert("会员积分信息修改", "会员积分信息修改失败！", "warning");
					}
					$("#div_updateCardlevel").window("close");
					$("#dg").datagrid("reload");
				}
			});
		}
	})
	
	
	
	
	
	
});



