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

	<script type="text/javascript"
		src="${pageContext.request.contextPath }/js/xiaofei/subScore.js"></script>

	<form id="subScoreForm" method="post">
		<table style="width: 99%" align="center">
		</table>
		<fieldset>
			<legend>查找会员</legend>
			<table style="width: 99%">
				<input type="hidden" id="userId" name="usersId" value="${userSession.usersId }"/>
				<input type="hidden" id="memberId" name="memcardsId" />
				<input type="hidden" id="cardId" name="memcardsCardid" />
				<input type="hidden" id="shopId" name="shopId" />
				<input type="hidden" id="orderType" name="consumeordersOrdertype"
					value="151" />
				<input type="hidden" id="isDel" name="consumeordersIsdel" value="0" />
				<input type="hidden" id="shengyujifen" name="memcardsPoint" />
				<tr>
					<td>会员ID：<input id="MC_CardID2" type="text" /><input
						type="button" id="search" value="查找" /></td>
					<td>
						时间：
						<label id="CO_CreateTime" name="CO_CreateTime"></label>
					</td>
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
		<fieldset>
			<legend>减积分信息</legend>
			<table>
				<tr>
					<td>扣除积分：</td>
					<td><input id="CO_GavePoint"
						name="consumeordersGavepoint" type="number" value="" /></td>
				</tr>
				<tr>
					<td>备注：</td>
					<td><input class="text-box single-line" id="CO_Remark"
						name="consumeordersRemark" type="text" value="" /></td>
				</tr>
			</table>
		</fieldset>
		<input id="subScore" type="button" value="减积分" />
	</form>
</body>
</html>