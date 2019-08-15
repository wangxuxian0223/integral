var Add_shopId = null;
var Add_exchanggiftsGiftcode = null;
var Add_exchanggiftsGiftname = null;
var Add_exchanggiftsPoint = null;
var Add_exchanggiftsInteger = null;
var Add_exchanggiftsRemark = null;
var Add_exchanggiftsPhoto = null;
var Add_exchanggiftsState = null;
var Add_exchanggiftsIsdel = null;
var Add_exchanggiftsExchangnum = null;

$(function(){
	Add_exchanggiftsGiftcode = $("#Add_exchanggiftsGiftcode");
	Add_exchanggiftsGiftname = $("#Add_exchanggiftsGiftname");
	Add_exchanggiftsPoint = $("#Add_exchanggiftsPoint");
	Add_exchanggiftsInteger = $("#Add_exchanggiftsInteger");
	Add_exchanggiftsRemark = $("#Add_exchanggiftsRemark");
	Add_exchanggiftsPhoto = $("#Add_exchanggiftsPhoto");
	Add_exchanggiftsState = $("#Add_exchanggiftsState");
	Add_exchanggiftsIsdel = $("#Add_exchanggiftsIsdel");
	Add_exchanggiftsExchangnum = $("#Add_exchanggiftsExchangnum");
	Add_shopId = $("#Add_shopId");
	
	//添加验证
	$("#Add_btnCon").click(function(){
		if(Add_exchanggiftsGiftcode.val() == ""){
			$.messager.alert("礼品添加", "礼品编码不能为空！", "warning");
		}else if(Add_shopId.val() == ""){
			$.messager.alert("礼品添加", "店铺编号不能为空！", "warning");
		}else if(Add_exchanggiftsGiftname.val() == ""){
			$.messager.alert("礼品添加", "礼品名称不能为空！", "warning");
		}else if(Add_exchanggiftsPoint.val() == ""){
			$.messager.alert("礼品添加", "礼品所需积分不能为空！", "warning");
		}else if(Add_exchanggiftsInteger.val() == ""){
			$.messager.alert("礼品添加", "礼品数量不能为空！", "warning");
		}else if(Add_exchanggiftsRemark.val() == ""){
			$.messager.alert("礼品添加", "礼品备注不能为空！", "warning");
		}/*else if(Add_exchanggiftsPhoto.val() == ""){
			$.messager.alert("礼品添加", "礼品图片不能为空！", "warning");
		}*/else{
			//ajax异步添加会员积分
			$.ajax({
				url:"/presents/addPresent",
				type:"post",
				data:{
					exchanggiftsGiftcode:Add_exchanggiftsGiftcode.val(),
					shopId:Add_shopId.val(),
					exchanggiftsGiftname:Add_exchanggiftsGiftname.val(),
					exchanggiftsPoint:Add_exchanggiftsPoint.val(),
					exchanggiftsInteger:Add_exchanggiftsInteger.val(),
					exchanggiftsRemark:Add_exchanggiftsRemark.val(),
					//exchanggiftsPhoto:Add_exchanggiftsPhoto.val(),
					exchanggiftsState:Add_exchanggiftsState.val(),
					exchanggiftsIsdel:Add_exchanggiftsIsdel.val(),
					exchanggiftsExchangnum:Add_exchanggiftsExchangnum.val()
				},
				dataType:"TEXT",
				success:function(data){
					if(data.trim() == "1"){
						$.messager.alert("礼品添加", "礼品添加成功！", "info");	
					}/*else if(data.trim() == "-1"){
						$.messager.alert("礼品添加", "页面传值为空，礼品添加失败！", "warning");
					}*/else{
						$.messager.alert("礼品添加", "礼品添加失败！", "warning");
					}
					$("#div_addPresent").window("close");
					$("#dg").datagrid("reload");
				}
			});
		}
	});
	
	//取消添加
	$("#Add_btnCan").click(function(){
		$("#div_addPresent").window("close");
	});
	
});