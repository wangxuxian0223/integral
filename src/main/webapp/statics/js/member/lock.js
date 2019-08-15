$(function(){
	//显示
	$.ajax({
		url:"/members/tolock",
		type:"post",
		dataType:"json",
		data:{memcardsId:$("#memcardsId").val()},
		success:function(data){
			$("#memcardsCardid").val(data.memcardsCardid),
			$("#memcardsState").val(data.memcardsState)
		}
	});
	
	// 会员卡状态ajax查询
	$.ajax({
		url : "/categories/queryTypeByAjax?name=CD_State",
		type : "post",
		dataType : "json",
		success : function(data) {
			$.each(data, function(i, d) {
				var op = $("<option value='" + d.categoryId + "'>"
						+ d.categoryTitle + "</option>");
				$("#memcardsState").append(op);
			})
			$("#memcardsState").val($("#memcardsState").val());
		}
	});
	
	//提交
	$("#btnCon").click(function(){
		$("#memberForm").form('submit',{
			url:"/members/lock",
			success:function(data){
				if(data > 0){
					alert("操作成功！");
				}else{
					alert("操作失败！");
				}
				window.parent.location.reload();
				parent.layer.closeAll('iframe');
			}
		});
	});
	
	//取消
	$("#btnCan").click(function(){
		window.parent.location.reload();
		parent.layer.closeAll('iframe');
	});
	
	
	
	
	
	
});