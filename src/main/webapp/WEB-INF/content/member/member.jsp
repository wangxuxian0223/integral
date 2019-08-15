<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>会员列表</title>
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
	<!-- <script src="../../Scripts/Toolkit.js" type="text/javascript"></script> -->
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/js/member/member.js"></script>



	<table id="dg" align="center">
	</table>
	<div id="tb" style="padding: 5px; height: auto">
		<div style="margin-bottom: 5px">
			<a href="#" class="easyui-linkbutton Insert" iconCls="icon-add">新增</a>
			<a href="#" class="easyui-linkbutton Update" iconCls="icon-edit">修改</a>
			<a href="#" class="easyui-linkbutton Delete" iconCls="icon-remove">删除</a>
			<a href="#" class="easyui-linkbutton Lock" iconCls="icon-lock">锁定/挂失</a>
			<a href="#" class="easyui-linkbutton TransferL" iconCls="icon1">会员转账</a>
			<a href="#" class="easyui-linkbutton Reload" iconCls="icon-reload">会员换卡</a>
			<a href="#" class="easyui-linkbutton ToExcel" iconCls="icon-reload">导出Excel</a>
			<a href="#" class="easyui-linkbutton InExcel" iconCls="icon2">导入Excel</a>
		</div>
		<div>
			会员卡号：<input id="memcardsCardid" type="text" /> 会员姓名：<input
				id="memcardsName" type="text" /> 手机号码：<input id="memcardsMobile"
				type="text" /> 会员等级：<select id="cardlevelsId" name="cardlevelsId">
				<option value="0">--请选择--</option>
			</select> 会员卡状态：<select id="memcardsState" name="memcardsState">
				<option value="0">--请选择--</option>
			</select> <a href="#" class="easyui-linkbutton Search" iconCls="icon-search">查询</a>
		</div>
	</div>
	<div id="dlg" class="easyui-dialog"
		data-options="iconCls:'icon-save',resizable:true,modal:true,closed:true">
		<iframe id="frm1" width="99%" height="99%" frameborder="0"></iframe>
	</div>
</body>
</html>