<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>会员列表</title>
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
	<!-- <script src="../../Scripts/Toolkit.js" type="text/javascript"></script> -->
	

	<form id="memberForm" method="post">
		<fieldset>
			<legend>转出会员</legend>
			<input type="hidden" id="memcardsId1" value="${param.param1 }" />
			<input type="hidden" id="memcardsMoney1" value=""/>
			<input type="hidden" id="memcardsCardid1" value=""/>
			<table style="width: 99%">
				<tr>
					<td>卡号：<label id="memcardsCardid"></label></td>
					<td>姓名：<label id="memcardsName"></label></td>
				</tr>
				<tr>
					<td>账号积分：<label id="memcardsPoint"></label></td>
					<td>累计消费：￥<label id="memcardsTotalmoney"></label></td>
				</tr>
			</table>
		</fieldset>
		<table style="width: 99%">
			<tr>
				<td>点击获取当前输入会员信息</td>
				<td></td>
			</tr>
			<tr>
				<td><input id="tomemcardsId" type="text" /> <input
					type="button" id="search" value="查找" /></td>
				<td></td>
			</tr>
		</table>
		
		<fieldset>
			<legend>转入会员</legend>
			<input type="hidden" id="memcardsId2" value="" />
			<input type="hidden" id="memcardsMoney2" value=""/>
			<input type="hidden" id="memcardsCardid2" value=""/>
			<table style="width: 99%">
				<tr>
					<td>卡号：<label id="tomemcardsCardid"></label></td>
					<td>姓名：<label id="tomemcardsName"></label></td>
				</tr>
				<tr>
					<td>账号积分：<label id="tomemcardsPoint"></label></td>
					<td>累计消费：￥<label id="tomemcardsTotalmoney"></label></td>
				</tr>
			</table>
		</fieldset>
		<table>
			<tr>
				<td>转账金额：</td>
				<td><input class="text-box single-line" data-val="true"
					data-val-number="字段 TL_TransferMoney 必须是一个数字。"
					data-val-required="TL_TransferMoney 字段是必需的。"
					id="transferlogsTransfermoney" name="transferlogsTransfermoney"
					type="text" value="" /></td>
			</tr>
			<tr>
				<td>操作备注：</td>
				<td><input class="text-box single-line" id="transferlogsRemark"
					name="transferlogsRemark" type="text" value="" /></td>
			</tr>
			<tr>
				<td>
					<input data-val="true"
						data-val-number="字段 TL_FromMC_ID 必须是一个数字。"
						data-val-required="TL_FromMC_ID 字段是必需的。" id="transferlogsFrommcId"
						name="transferlogsFrommcId" type="hidden" value="" /> 
					<input id="transferlogsFrommcCardid" name="transferlogsFrommcCardid"
						type="hidden" value="" /> 
					<input data-val="true"
						data-val-number="字段 TL_ToMC_ID 必须是一个数字。"
						data-val-required="TL_ToMC_ID 字段是必需的。" id="transferlogsTomcId"
						name="transferlogsTomcId" type="hidden" value="" /> 
					<input id="transferlogsTomcCardid" name="transferlogsTomcCardid"
						type="hidden" value="" />
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center"><a id="btnCon"
					href="javascript:void(0)" class="easyui-linkbutton"
					data-options="iconCls:'icon-save'">转账</a> <a id="btnCan"
					href="javascript:void(0)" class="easyui-linkbutton"
					data-options="iconCls:'icon-cancel'">取消</a></td>
			</tr>
		</table>
	</form>
	
	
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/js/member/transMember.js"></script>
</body>
</html>