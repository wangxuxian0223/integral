<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>用户列表</title>
</head>
<body>
	<!--引入主题样式-->
	<link rel="stylesheet" type="text/css"
		href="${pageContext.request.contextPath }/easyui/themes/default/easyui.css" />
	<!--引入图标样式-->
	<link rel="stylesheet" type="text/css"
		href="${pageContext.request.contextPath }/easyui/themes/icon.css" />
	<!--引入jQuery文件-->
	<script src="${pageContext.request.contextPath }/easyui/jquery.min.js"
		type="text/javascript" charset="utf-8"></script>
	<!--引入EasyUi的js文件-->
	<script
		src="${pageContext.request.contextPath }/easyui/jquery.easyui.min.js"
		type="text/javascript" charset="utf-8"></script>
	<!--EasyUI中文支持-->
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/easyui/locale/easyui-lang-zh_CN.js"></script>

	<script type="text/javascript"
		src="${pageContext.request.contextPath }/js/xiaofei/xiaofeiRecord.js"></script>
	

</style>
	<fieldset>
		<legend>查找会员</legend>
		<div>
			会员电话/卡号：<input id="txtMC_CardIDMC_Mobile" type="text" /> <a href="#"
				class="easyui-linkbutton Search" iconCls="icon-search">查询</a>
		</div>
	</fieldset>
	<fieldset title="消费记录列表" style="height: 420px;">
		<legend>消费记录列表</legend>
		<table id="dg">
		</table>
	</fieldset>
	<div id="dlg" class="easyui-dialog"
		data-options="iconCls:'icon-save',resizable:true,modal:true,closed:true">
		<iframe id="frm1" width="99%" height="99%" frameborder="0"></iframe>
	</div>
</body>
</html>