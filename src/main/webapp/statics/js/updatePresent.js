var Update_exchanggiftsId = null;
var Update_shopId = null;
var Update_exchanggiftsGiftcode = null;
var Update_exchanggiftsGiftname = null;
var Update_exchanggiftsPoint = null;
var Update_exchanggiftsInteger = null;
var Update_exchanggiftsRemark = null;
var Update_exchanggiftsPhoto = null;
var Update_exchanggiftsState = null;
var Update_exchanggiftsIsdel = null;
var Update_exchanggiftsExchangnum = null;

$(function(){
	Update_exchanggiftsGiftcode = $("#Update_exchanggiftsGiftcode");
	Update_exchanggiftsGiftname = $("#Update_exchanggiftsGiftname");
	Update_exchanggiftsPoint = $("#Update_exchanggiftsPoint");
	Update_exchanggiftsInteger = $("#Update_exchanggiftsInteger");
	Update_exchanggiftsRemark = $("#Update_exchanggiftsRemark");
	Update_exchanggiftsPhoto = $("#Update_exchanggiftsPhoto");
	Update_exchanggiftsState = $("#Update_exchanggiftsState");
	Update_exchanggiftsIsdel = $("#Update_exchanggiftsIsdel");
	Update_exchanggiftsExchangnum = $("#Update_exchanggiftsExchangnum");
	Update_shopId = $("#Update_shopId");
	Update_exchanggiftsId = $("#Update_exchanggiftsId");
	
	//ajax全查商铺名称并显示
	$.ajax({
		url : "/shops/queryAllShopName",
		type : "post",
		dataType : "json",
		success : function(data){
			$.each(data,function(i, d){
				var opt = $("<option value='"+d.shopId+"'>"+d.shopName+"</option>");
				Update_shopId.append(opt);
			})
			Update_shopId.val(Update_shopId.val());
		}
	});
	
	//修改验证
	$("#Update_btnCon").click(function(){
		if(Update_exchanggiftsGiftcode.val() == ""){
			$.messager.alert("礼品添加", "礼品编码不能为空！", "warning");
		}else if(Update_shopId.val() == ""){
			$.messager.alert("礼品添加", "店铺编号不能为空！", "warning");
		}else if(Update_exchanggiftsGiftname.val() == ""){
			$.messager.alert("礼品添加", "礼品名称不能为空！", "warning");
		}else if(Update_exchanggiftsPoint.val() == ""){
			$.messager.alert("礼品添加", "礼品所需积分不能为空！", "warning");
		}else if(Update_exchanggiftsInteger.val() == ""){
			$.messager.alert("礼品添加", "礼品数量不能为空！", "warning");
		}else if(Update_exchanggiftsRemark.val() == ""){
			$.messager.alert("礼品添加", "礼品备注不能为空！", "warning");
		}/*else if(Update_exchanggiftsPhoto.val() == ""){
			$.messager.alert("礼品添加", "礼品图片不能为空！", "warning");
		}*/else{
			//ajax异步添加会员积分
			$.ajax({
				url:"/presents/updatePresent",
				type:"post",
				data:{
					exchanggiftsId:Update_exchanggiftsId.val(),
					exchanggiftsGiftcode:Update_exchanggiftsGiftcode.val(),
					shopId:Update_shopId.val(),
					exchanggiftsGiftname:Update_exchanggiftsGiftname.val(),
					exchanggiftsPoint:Update_exchanggiftsPoint.val(),
					exchanggiftsInteger:Update_exchanggiftsInteger.val(),
					exchanggiftsRemark:Update_exchanggiftsRemark.val(),
					//exchanggiftsPhoto:Update_exchanggiftsPhoto.val(),
					exchanggiftsState:Update_exchanggiftsState.val(),
					exchanggiftsIsdel:Update_exchanggiftsIsdel.val(),
					exchanggiftsExchangnum:Update_exchanggiftsExchangnum.val()
				},
				dataType:"TEXT",
				success:function(data){
					if(data.trim() == "1"){
						$.messager.alert("礼品修改", "礼品修改成功！", "info");	
					}/*else if(data.trim() == "-1"){
						$.messager.alert("礼品添加", "页面传值为空，礼品添加失败！", "warning");
					}*/else{
						$.messager.alert("礼品修改", "礼品修改失败！", "warning");
					}
					$("#div_updatePresent").window("close");
					$("#dg").datagrid("reload");
				}
			});
		}
	});
	
	//取消修改
	$("#Update_btnCan").click(function(){
		$("#div_updatePresent").window("close");
	});
	
});