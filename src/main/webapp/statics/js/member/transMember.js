$(function(){
	//显示选中会员的信息
	$.ajax({
		url:"/members/queryTransInfo",
		type:"post",
		dataType:"json",
		data:{memcardsId:$("#memcardsId1").val()},
		success:function(data){
			if(data.member == null){
				$.messager.alert("会员转账","未查到选中会员的信息","warning");
			}else{
				$("#memcardsCardid").text(data.member.memcardsCardid);
				$("#memcardsName").text(data.member.memcardsName);
				if(data.member.memcardsPoint == null){
					$("#memcardsPoint").text(0);
				}else{
					$("#memcardsPoint").text(data.member.memcardsPoint);
				}
				if(data.member.memcardsTotalmoney == null){
					$("#memcardsTotalmoney").text(0);
				}else{
					$("#memcardsTotalmoney").text(data.member.memcardsTotalmoney);
				}
				$("#memcardsMoney1").val(data.member.memcardsMoney);
				$("#memcardsCardid1").val(data.member.memcardsCardid);
				
				alert("1余额："+$("#memcardsMoney1").val());
			}
		}
	});
	
	//点击查询
	$("#search").click(function(){
		//查找要转账给某人的信息
		$.ajax({
			url:"/members/queryTransInfo",
			type:"post",
			dataType:"json",
			data:{memcardsId:$("#tomemcardsId").val()},
			success:function(data2){
				if(data2.member == null){
					$.messager.alert("会员转账","未查到选中会员的信息","warning");
					$("#tomemcardsId").val("");
				}else{
					$("#tomemcardsCardid").text(data2.member.memcardsCardid);
					$("#tomemcardsName").text(data2.member.memcardsName);
					if(data2.member.memcardsPoint == null){
						$("#tomemcardsPoint").text(0);
					}else{
						$("#tomemcardsPoint").text(data2.member.memcardsPoint);
					}
					if(data2.member.memcardsTotalmoney == null){
						$("#tomemcardsTotalmoney").text(0);
					}else{
						$("#tomemcardsTotalmoney").text(data2.member.memcardsTotalmoney);
					}
					$("#memcardsId2").val(data2.member.memcardsId);
					$("#memcardsMoney2").val(data2.member.memcardsMoney);
					$("#memcardsCardid2").val(data2.member.memcardsCardid);
					
					alert("2余额："+$("#memcardsMoney2").val());
				}
			}
		});
	});
	
	//取消转账
	$("#btnCan").click(function(){
		window.parent.location.reload();
		parent.layer.closeAll('iframe');
	});
	
	//确认转账之后验证
	$("#btnCon").click(function(){
		
		alert("i余额："+$("#memcardsMoney1").val());
		alert("输入额："+$("#transferlogsTransfermoney").val());
		
		if($("#transferlogsTransfermoney").val() == ""){
			$.messager.alert("会员转账","转账金额不能为空！","warning");
		}else if($("#memcardsMoney1").val() < $("#transferlogsTransfermoney").val()){
			$.messager.alert("会员转账","您的余额不足！","warning");
			$("#transferlogsTransfermoney").val("");
		}else{
			$("#transferlogsFrommcId").val($("#memcardsId1").val());
			$("#transferlogsFrommcCardid").val($("#memcardsCardid1").val());
			$("#transferlogsTomcId").val($("#memcardsId2").val());
			$("#transferlogsTomcCardid").val($("#memcardsCardid2").val());
			
			//提交
			$.ajax({
				url:"/trans/transMoney",
				type:"post",
				dataType:"json",
				data:{
					transferlogsFrommcId:$("#transferlogsFrommcId").val(),
					transferlogsFrommcCardid:$("#transferlogsFrommcCardid").val(),
					transferlogsTomcId:$("#transferlogsTomcId").val(),
					transferlogsTomcCardid:$("#transferlogsTomcCardid").val(),
					transferlogsTransfermoney:$("#transferlogsTransfermoney").val(),
					transferlogsRemark:$("#transferlogsRemark").val()
				},
				success:function(data){
					if(data.count > 0){
						/*$.messager.alert("会员转账","转账成功！","warning");*/
						/*$("#memcardsMoney1").val($("#memcardsMoney1").val()-$("#transferlogsTransfermoney").val());*/
						$("#transferlogsTransfermoney").val("");
						alert("转账成功！");
						alert("1余额："+$("#memcardsMoney1").val());
					}else{
						/*$.messager.alert("会员转账","转账失败！","warning");*/
						alert("转账失败！");
					}
					
					window.parent.location.reload();
					parent.layer.closeAll('iframe');
				}
			});
		}
	});
	
	
});