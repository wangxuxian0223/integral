<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>Create</title>
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
		src="${pageContext.request.contextPath }/js/member/reload.js"></script>
	
	<form id="memberForm" method="post">
		<fieldset>
			<legend>会员基本信息</legend>
			<input type="hidden" id="memcardsId" value="${param.param1 }" />
			<input type="hidden" id="memcardsPassword"/>
			<table align="center">
				<tr>
					<td>会员姓名：</td>
					<td id="memcardsName"></td>
				</tr>
				<tr>
					<td>会员等级：</td>
					<td id="cardlevelsId"></td>
				</tr>
				<tr>
					<td>登记日期：</td>
					<td id="memcardsCreatetime"></td>
				</tr>
			</table>
		</fieldset>
		<fieldset>
			<legend>换卡信息</legend>
			<table align="center">
				<tr>
					<td>请输入此卡密码：</td>
					<td><input id="oldPwd" type="text" /></td>
				</tr>
				<tr>
					<td>新会员卡号：</td>
					<td><input class="text-box single-line" id="newCardId"
						name="memcardsCardid" type="text" value="" /></td>
				</tr>
				<tr>
					<td>新会员卡密码：</td>
					<td><input id="newPwd" name="memcardsPassword" type="password" /></td>
				</tr>
				<tr>
					<td>确认密码：</td>
					<td><input id="rePwd" type="password" /></td>
				</tr>
				<tr>
					<td><input data-val="true" data-val-number="字段 MC_ID 必须是一个数字。"
						data-val-required="MC_ID 字段是必需的。" id="MC_ID" name="memcardsId"
						type="hidden" value="" /></td>
				</tr>
				<tr>
				<td colspan="2" align="center"><a id="btnCon"
					href="javascript:void(0)" class="easyui-linkbutton"
					data-options="iconCls:'icon-save'">换卡</a> <a id="btnCan"
					href="javascript:void(0)" class="easyui-linkbutton"
					data-options="iconCls:'icon-cancel'">取消</a></td>
				</tr>
			</table>
		</fieldset>
	</form>
</body>
</html>