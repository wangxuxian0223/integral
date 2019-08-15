var memcardsId = null;
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
	memcardsId = $("#memcardsId");
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
			success : function(data1) {
				if(data1.member != null){
					memcardsRefererid.val(data1.member.memcardsId);
					memcardsReferername.val("");
					memcardsReferername.val(data1.member.memcardsName);
				}else{
					alert("查无此人！");
					memcardsRefererid.val("");
					memcardsReferername.val("");
				}
			}
		});
	});
	
	//显示
	$.ajax({
		url:"/members/toupdateMember",
		type:"post",//请求方式
		data:{memcardsId:memcardsId.val()},//页面要提交的数据
		dataType:"json",//返回的数据类型
		success:function(data){//data为控制器返回来的值
			if(data.member == null){
				$.messager.alert("修改会员", "未查到选中会员的信息！", "warning");
			}else{
				//查到的选中的礼品信息显示在页面上
				memcardsCardid.val(data.member.memcardsCardid),
				memcardsName.val(data.member.memcardsName),
				memcardsMobile.val(data.member.memcardsMobile),
				memcardsPassword.val(data.member.memcardsPassword),
				rememcardsPassword.val(data.member.memcardsPassword);
				memcardsSex.val(data.member.memcardsSex),
				shopId.val(data.member.shopId),
				cardlevelsId.val(data.member.cardlevelsId),
				memcardsState.val(data.member.memcardsState),
				memcardsMoney.val(data.member.memcardsMoney),
				memcardsPoint.val(data.member.memcardsPoint),
				memcardsRefererid.val(data.member.memcardsRefererid),
				memcardsReferername.val(data.member.memcardsReferername)
			}
		}
	});
	
	
	//会员修改验证
	$("#btnCon").click(function(){
		if(memcardsCardid.val() == ""){
			$.messager.alert("会员修改","会员卡号不能为空！","warning");
		}else if(memcardsCardid.val().length != 6){
			$.messager.alert("会员修改","请输入六位卡号！","warning");
		}else if(memcardsName.val() == ""){
			$.messager.alert("会员修改","会员姓名不能为空！","warning");
		}else if(memcardsMobile.val() == ""){
			$.messager.alert("会员修改","手机号码不能为空！","warning");
		}else if(memcardsPassword.val() == ""){
			$.messager.alert("会员修改","卡片密码不能为空！","warning");
		}else if(rememcardsPassword.val() == ""){
			$.messager.alert("会员修改","确认密码不能为空！","warning");
		}else if(memcardsPassword.val() != rememcardsPassword.val()){
			$.messager.alert("会员修改","两次密码输入不同！","warning");
		}else if(memcardsSex.val() == ""){
			$.messager.alert("会员修改","性别不能为空！","warning");
		}else if(shopId.val() == 0){
			$.messager.alert("会员修改","所属店铺不能为空！","warning");
		}else if(cardlevelsId.val() == 0){
			$.messager.alert("会员修改","会员等级不能为空！","warning");
		}else if(memcardsState.val() == 0){
			$.messager.alert("会员修改","会员状态不能为空！","warning");
		}/*else if(memcardsBirthdaytype.val() == 0){
			$.messager.alert("会员修改","农历公历不能为空！","warning");
		}else if(memcardsBirthdayMonth.val() == 0){
			$.messager.alert("会员修改","月份不能为空！","warning");
		}else if(memcardsBirthdayDay.val() == 0){
			$.messager.alert("会员修改","日期不能为空！","warning");
		}*/else{
			$("#memberForm").form('submit',{
				url:"/members/updateMember",
				success:function(data){
					if(data > 0){
						/*$.messager.alert("会员修改", "会员修改成功！", "info");*/
						alert("会员修改成功！");
					}else{
						/*$.messager.alert("会员修改", "会员修改失败！", "warning");*/
						alert("会员修改失败！");
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











/*function aa() {
	var a = $("#MC_CardID").val().length;
	if ($("#MC_CardID").val() == "") {
		$.messager.alert("提示", "请输入六位卡号", "warning");
		return false;
	}
	if ($("#MC_Mobile").val() == "") {
		$.messager.alert("提示", "请输入手机号", "warning");
		return false;
	}
	if ($("#MC_Password1").val() == "") {
		$.messager.alert("提示", "请输入卡片密码", "warning");
		return false;
	}
	if ($("#MC_Password").val() == "") {
		$.messager.alert("提示", "请输入确认密码", "warning");
		return false;
	}
	return true;
}
$(function() {
	$("#sum").click(function() {
		if (aa()) {
			var str = $("#MC_Password1").val();
			var str1 = $("#MC_Password").val();
			if (str != str1) {
				alert("两次输入不一致");
				return false;
			} else {
				$("form").submit();
			}
		}
	});
});
function screch() {
	$.getJSON("/MemCard/screch", {
		MC_CardID : $("#MC_RefererID").val()
	}, function(data) {
		alert(data);
		$("#MC_RefererName").val(data.MC_Name);
		$("#MC_RefererCard").val(data.S_ID);
	});
}*/