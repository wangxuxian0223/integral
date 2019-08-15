<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>会员减积分</title>
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

	
	<form action="/ExchangLog/Exchanggift" method="post">
		<table style="width: 99%">
		</table>
		<fieldset>
			<legend>查找会员</legend>
			<table style="width: 99%">
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>会员ID：<input id="MC_CardID2" type="text" /><input type="button"
						onclick="screch()" value="查找" /></td>
					<td></td>
				</tr>
				<tr>
					<td>姓名：<font style="color: Blue"><label id="MC_Name1"></label></font></td>
					<td>等级：<font style="color: Blue"><label id="MC_CardID1"></label></font></td>
				</tr>
				<tr>
					<td>当前积分：<font style="color: Blue"><label
							id="MC_Point1"></label></font></td>
					<td>累计消费：￥<font style="color: Blue"><label
							id="MC_TotalMoney1"></label></font></td>
				</tr>
			</table>
		</fieldset>
		<table id="dg">
		</table>
		<div style="color: red;">
			<p>双击“兑换数量”的单元格可以修改兑换的数量。</p>
			<p>如果还未设置礼品请点击[礼品管理]</p>
		</div>
		<input type="hidden" id="MC_ID" /> 
		<input type="hidden" id="MC_CardID" /> 
		<input type="button" id="submit" value="马上兑换" />
	</form>
	
	
	
	
	<!-- <form id="exchangeGiftForm" method="post">
		<table style="width: 99%">
		</table>
		<fieldset>
			<legend>查找会员</legend>
			<table style="width: 99%">
				<tr>
					<td>会员ID：<input id="MC_CardID2" type="text" />
						<input type="button" onclick="screch()" value="查找" /></td>
				</tr>
				<tr>
					<td>姓名：<font style="color: Blue"><label id="MC_Name1"></label></font></td>
					<td>等级：<font style="color: Blue"><label id="MC_CardID1"></label></font></td>
				</tr>
				<tr>
					<td>当前积分：<font style="color: Blue"><label id="MC_Point1"></label></font></td>
					<td>累计消费：￥<font style="color: Blue"><label id="MC_TotalMoney1"></label></font></td>
				</tr>
			</table>
		</fieldset>
		<table id="dg">
		</table>
		<div style="color: red;">
			<p>双击“兑换数量”的单元格可以修改兑换的数量。</p>
			<p>如果还未设置礼品请点击[礼品管理]</p>
		</div>
		<input type="hidden" id="MC_ID" /> <input type="hidden"
			id="MC_CardID" /> <input type="button" id="submit" value="马上兑换" />
	</form> -->
	
	
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/js/exchange/exchangeGifts.js"></script>
</body>
</html>