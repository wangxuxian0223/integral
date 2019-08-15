var shopId = null;
var memcardsCardid = null;
var memcardsName = null;
var memcardsMobile = null;
var rememcardsPassword = null;
var memcardsPassword = null;
var memcardsSex = null;
var cardlevelsId = null;
var memcardsBirthdaytype = null;
var memcardsBirthdayMonth = null;
var memcardsBirthdayDay = null;
var memcardsState = null;
var memcardsPasttime= null;
var memcardsMoney= null;
var memcardsPoint= null;
var memcardsIspointauto= null;
var memcardsRefererid= null;
var memcardsReferername= null;

$(function(){
	shopId = $("#shopId");
	memcardsCardid = $("#memcardsCardid");
	memcardsName = $("#memcardsName");
	memcardsMobile = $("#memcardsMobile");
	rememcardsPassword = $("#rememcardsPassword");
	memcardsPassword = $("#memcardsPassword");
	memcardsSex = $("#memcardsSex");
	cardlevelsId = $("#cardlevelsId");
	memcardsBirthdaytype = $("#memcardsBirthdaytype");
	memcardsBirthdayMonth = $("#memcardsBirthdayMonth");
	memcardsBirthdayDay = $("#memcardsBirthdayDay");
	memcardsState = $("#memcardsState");
	memcardsPasttime = $("#memcardsPasttime");
	memcardsMoney = $("#memcardsMoney");
	memcardsPoint = $("#memcardsPoint");
	memcardsIspointauto = $("#memcardsIspointauto");
	memcardsRefererid = $("#memcardsRefererid");
	memcardsReferername = $("#memcardsReferername");

	
	// 会员卡状态ajax查询
	$.ajax({
		url : "/categories/queryTypeByAjax?name=CD_State",
		type : "post",
		dataType : "json",
		success : function(data) {
			$.each(data, function(i, d) {
				var op = $("<option value='" + d.categoryId + "'>"
						+ d.categoryTitle + "</option>");
				memcardsState.append(op);
			})
		}
	});

	// 会员等级ajax查询
	$.ajax({
		url : "/cardlevels/queryAllCardlevelNameByAjax",
		type : "post",
		dataType : "json",
		success : function(data) {
			$.each(data, function(i, d) {
				var op = $("<option value='" + d.cardlevelsId + "'>"
						+ d.cardlevelsLevelname + "</option>");
				cardlevelsId.append(op);
			})
		}
	});
	
	//ajax全查商铺名称并显示
	$.ajax({
		url : "/shops/queryAllShopName",
		type : "post",
		dataType : "json",
		success : function(data){
			$.each(data,function(i, d){
				var opt = $("<option value='"+d.shopId+"'>"+d.shopName+"</option>");
				shopId.append(opt);
			})
		}
	});
	
	//查找
	$("#search").click(function(){
		$.ajax({
			url : "/members/search",
			type : "post",
			dataType : "json",
			data:{memcardsRefererid:memcardsRefererid.val()},
			success : function(data) {
				if(data.member != null){
					memcardsRefererid.val(data.member.memcardsId);
					memcardsReferername.val("");
					memcardsReferername.val(data.member.memcardsName);
				}else{
					alert("查无此人！");
				}
				
			}
		});
	});
	
	//会员添加验证
	$("#btnCon").click(function(){
		if(memcardsCardid.val() == ""){
			$.messager.alert("会员添加","会员卡号不能为空！","warning");
		}else if(memcardsCardid.val().length != 6){
			$.messager.alert("会员添加","请输入六位卡号！","warning");
		}else if(memcardsName.val() == ""){
			$.messager.alert("会员添加","会员姓名不能为空！","warning");
		}else if(memcardsMobile.val() == ""){
			$.messager.alert("会员添加","手机号码不能为空！","warning");
		}else if(memcardsPassword.val() == ""){
			$.messager.alert("会员添加","卡片密码不能为空！","warning");
		}else if(rememcardsPassword.val() == ""){
			$.messager.alert("会员添加","确认密码不能为空！","warning");
		}else if(memcardsPassword.val() != rememcardsPassword.val()){
			$.messager.alert("会员添加","两次密码输入不同！","warning");
		}else if(memcardsSex.val() == ""){
			$.messager.alert("会员添加","性别不能为空！","warning");
		}else if(shopId.val() == 0){
			$.messager.alert("会员添加","所属店铺不能为空！","warning");
		}else if(cardlevelsId.val() == 0){
			$.messager.alert("会员添加","会员等级不能为空！","warning");
		}else if(memcardsState.val() == 0){
			$.messager.alert("会员添加","会员状态不能为空！","warning");
		}/*else if(memcardsBirthdaytype.val() == 0){
			$.messager.alert("会员添加","农历公历不能为空！","warning");
		}else if(memcardsBirthdayMonth.val() == 0){
			$.messager.alert("会员添加","月份不能为空！","warning");
		}else if(memcardsBirthdayDay.val() == 0){
			$.messager.alert("会员添加","日期不能为空！","warning");
		}*/else{
			$("#memberForm").form('submit',{
				url:"/members/addMember",
				success:function(data){
					if(data > 0){
						/*$.messager.alert("会员添加", "会员添加成功！", "info");*/
						alert("会员添加成功！");
					}else{
						/*$.messager.alert("会员添加", "会员添加失败！", "warning");*/
						alert("会员添加失败！");
					}
					window.parent.location.reload();
					parent.layer.closeAll('iframe');
				}
			});
		}
	});
	
	//取消添加
	$("#btnCan").click(function(){
		window.parent.location.reload();
		parent.layer.closeAll('iframe');
	});
	
	
});


