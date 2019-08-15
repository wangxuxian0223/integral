<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>快速消费</title>
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
		src="${pageContext.request.contextPath }/js/xiaofei/fastxiaofei.js"></script>

	<form id="xiaofeiForm" method="post">
		
		<input type="hidden" id="userId" name="usersId" value="${userSession.usersId }"/>
		<input type="hidden" id="memberId" name="memcardsId"/>
		<input type="hidden" id="cardId" name="memcardsCardid"/>
		<input type="hidden" id="shopId" name="shopId"/>
		<input type="hidden" id="orderType" name="consumeordersOrdertype" value="150"/>
		<input type="hidden" id="isDel" name="consumeordersIsdel" value="0"/>
		
		<input type="hidden" id="jinezhekou" />
		<input type="hidden" id="jifenzhekou" />
		<input type="hidden" id="kashangyue" />
		<!-- <input type="hidden" id="zhehoujine" /> -->
		
		
		<fieldset>
			<legend>查找会员</legend>
			<table style="width: 99%">
				<tr>
					<td>
						会员ID：
						<input id="memcardsId" type="text" />
						<input type="button" id="search" value="查找" />
					</td>
					<td>
						消费时间：
						<label id="CO_CreateTime" name="CO_CreateTime"></label>
					</td>
				</tr>
				<tr>
					<td>姓名：
						<font style="color: Blue">
							<label id="memcardsName"></label>
						</font>
					</td>
					<td>等级：
						<font style="color: Blue">
							<label id="cardlevelsName"></label>
						</font>
					</td>
				</tr>
				<tr>
					<td>金额折扣比例：
						<font style="color: Blue">
							<label id="cardlevelsPercent"></label>
						</font>
					</td>
					<td>积分折扣比例：
						<font style="color: Blue">
							<label id="cardlevelsPoint"></label>
						</font>
					</td>
				</tr>
				<tr>
					<td>当前积分：
						<font style="color: Blue">
							<label id="memcardsPoint"></label>
						</font>
					</td>
					<td>累计消费：￥
						<font style="color: Blue">
							<label id="memcardsTotalmoney"></label>
						</font>
					</td>
				</tr>
				<tr>
					<td>卡片余额：￥
						<font style="color: Blue">
							<label id="memcardsMoney"></label>
						</font>
					</td>
				</tr>
			</table>
		</fieldset>
		<fieldset>
			<legend>
				<label></label>
			</legend>
			<font style="color: red">暂无优惠活动</font>
		</fieldset>
		<table>
			<tr>
				<td>输入消费金额：</td>
				<td><input class="text-box single-line" data-val="true"
					data-val-number="字段 CO_TotalMoney 必须是一个数字。"
					data-val-required="CO_TotalMoney 字段是必需的。" id="consumeordersTotalmoney"
					name="consumeordersTotalmoney" type="text" value="" /></td>
				<td>此处输入金额会按照会员等级自动打折</td>
			</tr>
			<tr>
				<td>折后总金额：</td>
				<td><input class="text-box single-line" data-val="true"
					data-val-number="字段 CO_DiscountMoney 必须是一个数字。"
					data-val-required="CO_DiscountMoney 字段是必需的。" id="consumeordersDiscountmoney"
					name="consumeordersDiscountmoney" type="text" value="" /></td>
				<td>可自动累计积分数量： <input class="text-box single-line"
					data-val="true" data-val-number="字段 CO_GavePoint 必须是一个数字。"
					data-val-required="CO_GavePoint 字段是必需的。" id="consumeordersGavepoint"
					name="consumeordersGavepoint" type="number" value="" /></td>
			</tr>
			<tr>
				<td>付费方式：<input type="radio" checked="checked" />现金支付
				</td>
				<td>优惠活动：<font style="color: red">暂无</font></td>
			</tr>
		</table>
		<fieldset>
			<legend>说明</legend>
			输入实际的消费金额，系统会自动按照会员等级中的设置按照一定比例计算积分并累计到会员账户<br />
			在“系统管理”》会员等级管理中可以设置RMB和积分的兑换比例<br /> 在“系统管理”》会员等级管理中可以设置是否直接输入折后总金额<br />
			在“系统管理”》会员等级管理中可以设置是否直接输入累计积分数量
		</fieldset>
		<!-- <input type="hidden" id="Point" /> 
		<input data-val="true"
			data-val-number="字段 MC_ID 必须是一个数字。" data-val-required="MC_ID 字段是必需的。"
			id="MC_ID" name="MC_ID" type="hidden" value="" />
		<input id="MC_CardID" name="MC_CardID" type="hidden" value="" /> --> 
		<input id="jiesuan" type="button" value="马上结算" />
	</form>
</body>
</html>