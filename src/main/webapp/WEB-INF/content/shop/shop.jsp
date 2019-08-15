<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html
	class="js no-flexbox flexbox-legacy canvas canvastext no-webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths panel-fit">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>店铺列表</title>
<script src="${pageContext.request.contextPath }/easyui/jquery.min.js"></script>
<script
	src="${pageContext.request.contextPath }/easyui/jquery.easyui.min.js"></script>
<script
	src="${pageContext.request.contextPath }/easyui/locale/easyui-lang-zh_CN.js"></script>
<link rel="stylesheet"
	href="${pageContext.request.contextPath }/easyui/themes/default/easyui.css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath }/easyui/themes/icon.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/shop.js"></script>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/shop.css" />

</head>
<body class="panel-noscroll">
	<div>
		<div>
			<div id="tb" style="padding: 5px">
				<div style="margin-bottom: 5px">
					<a id="insert" href="#" class="easyui-linkbutton l-btn l-btn-small" iconcls="icon-add" group="" id="">新增 </a> 
					<a id="update" href="#" class="easyui-linkbutton l-btn l-btn-small" iconcls="icon-edit" group="" id="">修改</a> 
					<a id="delete" href="#" class="easyui-linkbutton l-btn l-btn-small" iconcls="icon-remove" group="" id="">删除</a> 
					<a id="addUser" href="#" class="easyui-linkbutton l-btn l-btn-small" iconcls="icon-ok" group="" id="">分配管理员 </a>
				</div>
				<div>
					店铺名称：<input id="shopName" type="text">
					联系人： <input id="shopContactname" type="text"> 
					店铺地址： <input id="shopAddress" type="text"> 
					<a id="search" href="#" class="easyui-linkbutton l-btn l-btn-small" iconcls="icon-search" group="" id="">查询
						<span> 
							<span class="l-btn-icon icon-search">&nbsp;</span> 
						</span>
					</a>
				</div>
			</div>
			<div style="height: 600px;">
				<table id="dg" style="display: none;"></table>
			</div>
		</div>
	</div>
	<!-- <div style="display: none; margin: 0 auto;">
		<div id="dlg">
			<div>
				<iframe id="frm1" width="99%" height="99%" frameborder="0" style=""></iframe>
			</div>
		</div>
	</div> -->
	

<%@include file="/WEB-INF/content/shop/addShop.jsp"%>
<%@include file="/WEB-INF/content/shop/updateShop.jsp"%>
<%@include file="/WEB-INF/content/shop/addAdmin.jsp"%>
</body>

</html>