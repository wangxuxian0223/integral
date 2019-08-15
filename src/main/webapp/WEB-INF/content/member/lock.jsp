<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>Lock</title>
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
	src="${pageContext.request.contextPath }/js/member/lock.js"></script>
</head>
<body>
	<form id="memberForm" method="post">
		<table align="center">
			<tr>
				<td>会员卡号：</td>
				<td><input class="text-box single-line" id="memcardsCardid"
					name="memcardsCardid" type="text" value="" /></td>
			</tr>
			<tr>
				<td>状态：</td>
				<td><select id="memcardsState" name="memcardsState">
				</select></td>
			</tr>
			<tr>
				<td><input data-val="true" data-val-number="字段 MC_ID 必须是一个数字。"
					data-val-required="MC_ID 字段是必需的。" id="memcardsId" name="memcardsId"
					type="hidden" value="${param.param1 }" /></td>
			</tr>
			<tr style="align:center">
				<td colspan="2" align="center"><a id="btnCon"
					href="javascript:void(0)" class="easyui-linkbutton"
					data-options="iconCls:'icon-save'">添加</a> <a id="btnCan"
					href="javascript:void(0)" class="easyui-linkbutton"
					data-options="iconCls:'icon-cancel'">取消</a></td>
			</tr>
		</table>
	</form>
</body>
</html>