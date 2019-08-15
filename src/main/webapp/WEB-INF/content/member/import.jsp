<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
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
<body>
	<form action="/members/importExcel" enctype="multipart/form-data" method="post" target="_parent">
		<input name="file" type="file" /> 
		<input type="submit" value="导入" />
	</form>
</body>
</html>