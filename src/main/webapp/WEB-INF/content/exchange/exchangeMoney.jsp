<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
	<form id="ff" method="post">
		
	
		<input type="hidden" id="fx_memcardsId" name="memcardsId">
		<input type="hidden" id="shopId" name="shopId" />
		<input type="hidden" id="orderType" name="consumeordersOrdertype" value="152"/>
		<input type="hidden" id="cardId" name="memcardsCardid"/>
		<input type="hidden" id="isDel" name="consumeordersIsdel" value="0"/>
		
		<input type="hidden" id="dh_memcardsMoney">
		
		<table style="width: 99%">
		</table>
		<fieldset>
			<legend>查找会员</legend>
			<table style="width: 99%">
				<tr>
					<!-- <td><label id="memId" style="display:none"></label></td> -->
					<td></td>
				</tr>
				<tr>
					<td>会员ID：<input id="MC_CardID2" name="memcardsCardid" type="text" />
					<input type="button" onclick="screch()" value="查找" /></td>
					<td></td>
				</tr>
				<tr>
					<td>姓名：<font style="color: Blue"><label id="MC_Name1"></label></font></td>
					<td>等级：<font style="color: Blue"><label id="MC_CardID1"></label>（折扣比例：<label
							id="aa"></label>）</font></td>
				</tr>
				<tr>
					<td>当前积分：<font style="color: Blue"><label
							id="MC_Point1"></label></font></td>
					<td>累计消费：￥<font style="color: Blue"><label
							id="MC_TotalMoney1"></label></font></td>
				</tr>
			</table>
		</fieldset>
		<fieldset>
			<legend>积分返现</legend>
			<table>
				<tr>
					<td>兑换日期：</td>
					<td><input class="text-box single-line" data-val="true"
						data-val-date="字段 CO_CreateTime 必须是日期。"
						data-val-required="CO_CreateTime 字段是必需的。" id="CO_CreateTime"
						name="consumeordersCreatetime" type="datetime" value="" /></td>
				</tr>
				<tr>
					<td>兑换积分：</td>
					<td><input class="text-box single-line" data-val="true"
						data-val-number="字段 CO_GavePoint 必须是一个数字。"
						data-val-required="CO_GavePoint 字段是必需的。" id="CO_GavePoint"
						name="consumeordersGavepoint" type="number" value="" /></td>
					<td>积分返现</td>
					<td><input class="text-box single-line" data-val="true"
						data-val-number="字段 CO_Recash 必须是一个数字。"
						data-val-required="CO_Recash 字段是必需的。" id="CO_Recash"
						name="consumeordersRecash" type="text" value="" /></td>
				</tr>
				<tr>
					<td>剩余积分：</td>
					<td><input type="text" id="er"/></td>
				</tr>
			</table>
		</fieldset>
		<fieldset>
			<legend>说明</legend>
			操作过程中，只需输入操作的会员卡号/手机查询对应的会员，再输入兑换积分，系统将自动计算。<br />
			在“管理”》“其他设置”中可以设置会员积分返现的兑换比例。
		</fieldset>
		<input type="hidden" id="Point" /> <input data-val="true"
			data-val-number="字段 MC_ID 必须是一个数字。" data-val-required="MC_ID 字段是必需的。"
			id="MC_ID" name="MC_ID" type="hidden" value="" />
		<input id="MC_CardID" name="MC_CardID" type="hidden" value="" /> 
		<input type="button" id="sum" value="马上返现" />
	</form>
	
	<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/exchange/exchangeMoney.js"></script>
</body>
</html>
