<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>

<head>
<title>主界面</title>
<meta charset="UTF-8" />
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
	src="${pageContext.request.contextPath }/js/cardlevels.js"></script>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/public.css" />

</head>

<body class="easyui-layout">

	<input type="hidden" id="path" name="path" value="${pageContext.request.contextPath}"/>

	<!--布局：北-->
	<div id="ndiv" data-options="region:'north'">
		<!--添加网站Logo-->
		<span id="n_logo"> 
			<img src="${pageContext.request.contextPath }/images/logo.jpg" /> <!-- <font>会员消费积分管理系统</font> -->
		</span> 
		<span id="n_head">会员消费积分管理系统</span>
		<span id="n_user">当前用户：<span style="color: #fff21b">${userSession.usersLoginname}</span></span>
		
		<div id="exit"> 
			<a href="#" class="easyui-menubutton" data-options="menu:'#mm2',iconCls:'icon-man'">账号管理</a>
			<a id="n_title_out" href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-cancel'">关闭全部</a>
			<div id="mm2" style="width: 100px;">
				<div><a id="n_title_info" href="javascript:void(0)">个人资料</a></div>
				<div><a id="n_title_pwd" href="javascript:void(0)">修改密码</a></div>
			</div>
		</div>
		<!-- <span id="n_title"> 欢迎          登录 
			<a id="n_title_pwd" href="javascript:void(0)">修改密码</a>| 
			<a id="n_title_out" href="javascript:void(0)">退出</a>
		</span> -->
	</div>
	<!--布局：南-->
	<div id="sdiv" data-options="region:'south',border:false">©2019 会员消费积分管理系统</div>
	<!--布局：西-->
	<div id="wdiv" data-options="region:'west',title:'系统菜单',split:true">
		<!--分类效果实现-->
		<div class="easyui-accordion" data-options="fit:true,border:false">
			<div id="" title="系统管理">
				<!--创建菜单-->
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/shop/shop'}">店铺管理</li>
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/cardlevels/cardlevels'}">会员等级管理</li>

					<!-- <li><span>店铺管理</span>
						<ul>
							<li data-options="attributes:{url:'http://www.taobao.com'}">淘宝网</li>
							<li data-options="attributes:{url:'http://www.jd.com'}">京东网</li>
							<li data-options="attributes:{url:'http://www.suning.com'}">苏宁易购</li>
						</ul>
					</li>
					<li><span>会员等级管理</span>
						<ul>
							<li data-options="attributes:{url:'http://www.bjsxt.com'}">北京尚学堂</li>
							<li data-options="attributes:{url:'http://www.baidu.com'}">百度一下</li>
							<li data-options="attributes:{url:'http://www.so.com'}">360搜索</li>
						</ul>
					</li> -->
				</ul>
			</div>
			<div id="" title="礼品管理">
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/present/present'}">礼品列表</li>
				</ul>
			</div>
			<div id="" title="会员管理">
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/member/member'}">会员列表</li>
				</ul>
			</div>
			<div id="" title="会员消费">
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/xiaofei/fastxiaofei'}">快速消费</li>
				</ul>
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/xiaofei/subScore'}">会员减积分</li>
				</ul>
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/xiaofei/xiaofeiRecord'}">消费历史记录</li>
				</ul>
			</div>
			<div id="" title="积分兑换">
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/exchange/exchangeGifts'}">积分兑换礼品</li>
				</ul>
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/exchange/exchangeMoney'}">积分返现</li>
				</ul>
				<ul class="easyui-tree">
					<li data-options="attributes:{url:'${pageContext.request.contextPath }/page/exchange/exchangeRecord'}">兑换历史记录</li>
				</ul>
			</div>
		</div>

	</div>

	<!--创建修改密码窗口-->
		<div id="div_pwd" class="easyui-window" title="修改密码" data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
			<input type="hidden" id="userpassword" value="${userSession.usersPassword }"/>
			
			<form id="userForm" name="userForm" method="post" action="${pageContext.request.contextPath }/users/pwdmodify">
			<table>
				<tr>
					<td>原有密码:</td>
					<td><input type="password" id="oldpassword" name="oldpassword" value=""/></td>
				</tr>
				<tr>
					<td>新密码:</td>
					<td><input type="password" id="newpassword" name="newpassword" value=""/></td>
				</tr>
				<tr>
					<td>确认密码:</td>
					<td><input type="password" id="repassword" name="repassword" value=""/></td>
				</tr>
				<tr>
					<td colspan="2">
						<a id="btnCon" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">确认修改</a>
						<a id="btnCan" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
					</td>
				</tr>
			</table>
			</form>
		</div>
	
</body>

</html>
