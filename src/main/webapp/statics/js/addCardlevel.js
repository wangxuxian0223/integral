var Add_CardlevelsLevelname = null;
var Add_CardlevelsNeedpoint = null;
var Add_CardlevelsPoint = null;
var Add_CardlevelsPercent = null;
$(function(){
	Add_CardlevelsLevelname = $("#Add_CardlevelsLevelname");
	Add_CardlevelsNeedpoint = $("#Add_CardlevelsNeedpoint");
	Add_CardlevelsPoint = $("#Add_CardlevelsPoint");
	Add_CardlevelsPercent = $("#Add_CardlevelsPercent");
	
	//添加验证
	$("#Add_btnCon").click(function(){
		if(Add_CardlevelsLevelname.val() == ""){
			$.messager.alert("会员等级添加", "会员等级名称不能为空！", "warning");
		}else if(Add_CardlevelsNeedpoint.val() == ""){
			$.messager.alert("会员等级添加", "所需最大积分不能为空！", "warning");
		}else if(Add_CardlevelsPoint.val() == ""){
			$.messager.alert("会员等级添加", "扣分比例不能为空！", "warning");
		}else if(Add_CardlevelsPercent.val() == ""){
			$.messager.alert("会员等级添加", "折扣比例不能为空！", "warning");
		}else{
			//ajax异步添加会员积分
			$.ajax({
				url:"/cardlevels/addCardlevel",
				type:"post",
				data:{
					cardlevelsLevelname:Add_CardlevelsLevelname.val(),
					cardlevelsNeedpoint:Add_CardlevelsNeedpoint.val(),
					cardlevelsPoint:Add_CardlevelsPoint.val(),
					cardlevelsPercent:Add_CardlevelsPercent.val()
				},
				dataType:"TEXT",
				success:function(data){
					if(data.trim() == "1"){
						$.messager.alert("会员等级添加", "会员等级添加成功！", "info");
						
					}else{
						$.messager.alert("会员等级添加", "会员等级添加失败！", "warning");
					}
					$("#div_addCardlevel").window("close");
					$("#dg").datagrid("reload");
				}
			});
		}
	});
	
	//取消添加商铺
	$("#Add_btnCan").click(function() {
		$("#div_addCardlevel").window("close");
	})
	
});