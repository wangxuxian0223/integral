<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>登录界面</title>
<meta charset="UTF-8" />


<!--引入主题样式-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/easyui/themes/default/easyui.css" />
<!--引入图标样式-->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/easyui/themes/icon.css" />
<!--引入jQuery文件-->
<script src="${pageContext.request.contextPath }/easyui/jquery.min.js" type="text/javascript"
	charset="utf-8"></script>
<!--引入EasyUi的js文件-->
<script src="${pageContext.request.contextPath }/easyui/jquery.easyui.min.js" type="text/javascript"
	charset="utf-8"></script>
<!--EasyUI中文支持-->
<script type="text/javascript" src="${pageContext.request.contextPath }/easyui/locale/easyui-lang-zh_CN.js"></script>

<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/css/login.css" />
<script type="text/javascript" src="${pageContext.request.contextPath }/js/login.js"></script>



</head>
<body>
	<input type="hidden" name="loginResult" id="loginResult" value="${param.loginResult}">
	<div id="panel_login">
		<!--创建登录面板-->
		<input type="hidden" name="loginResult" id="loginResult" value="${param.loginResult}">
		<div id="login" class="easyui-panel" title="用户登录" data-options="iconCls:'icon-mlogin',minimizable:true,maximizable:true,collapsible:true,closable:true">
			<form action="${pageContext.request.contextPath }/users/login" method="post">
				<table>
					<tr>
						<td>用户名:</td>
						<td><input type="text" name="usersLoginname" id="USERS_LOGINNAME" placeholder="请输入用户名"/></td>
					</tr>
					<tr>
						<td>密 码:</td>
						<td><input type="password" name="usersPassword" id="USERS_PASSWORD" placeholder="请输入密码"/></td>
					</tr>
					<tr>
						<td colspan="2">
							<a id="btnCon" href="javascript:;" class="easyui-linkbutton" data-options="iconCls:'icon-save'">登录</a>
							<a id="btnCan" href="javascript:;" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">重置</a>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
</body>

</html>