<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<title>会员添加</title>
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
	<link type="text/css" rel="stylesheet"
		href="${pageContext.request.contextPath }/css/addMember.css" />
	<script type="text/javascript"
		src="${pageContext.request.contextPath }/js/member/addMember.js"></script>
		
	<form id="memberForm" method="post">
		<fieldset>
			<legend>会员基本信息</legend>
			<table>
				<tr>
					<td>会员卡号：<input class="text-box single-line" id="memcardsCardid"
						name="memcardsCardid" type="text" value="" /></td>
				</tr>
				<tr>
					<td>会员姓名：<input class="text-box single-line" id="memcardsName"
						name="memcardsName" type="text" value="" /></td>
				</tr>
				<tr>
					<td>手机号码：<input class="text-box single-line" id="memcardsMobile"
						name="memcardsMobile" type="text" value="" /></td>
				</tr>
				<tr>
					<td>卡片密码：<input id="memcardsPassword" name="memcardsPassword" type="password" value=""/></td>
				</tr>
				<tr>
					<td>确认密码：<input type="password" id="rememcardsPassword" value=""/></td>
				</tr>
				<tr>
					<td>会员性别：<select id="memcardsSex" name="memcardsSex"><option
								value="0">男</option>
							<option value="1">女</option>
					</select></td>
				</tr>
				<tr>
					<td>所属店铺：<select id="shopId" name="shopId">
							<option value="0">--请选择--</option>
					</select></td>
				</tr>
				<tr>
					<td>会员等级：<select id="cardlevelsId" name="cardlevelsId">
							<option value="0">--请选择--</option>
					</select></td>
				</tr>
				<tr>
					<td>卡片状态：<select id="memcardsState" name="memcardsState">
						<option value="0">--请选择--</option>
					</select></td>
				</tr>
				<tr>
					<td>会员生日：<input checked="True" data-val="true"
						data-val-number="字段 MC_BirthdayType 必须是一个数字。"
						data-val-required="MC_BirthdayType 字段是必需的。" id="memcardsBirthdaytype"
						name="memcardsBirthdaytype" type="radio" value="0" /> 公历 <input
						id="memcardsBirthdaytype" name="memcardsBirthdaytype" type="radio" value="1" />
						农历
					<input class="text-box single-line" data-val="true"
						data-val-number="字段 MC_Birthday_Month 必须是一个数字。"
						data-val-required="MC_Birthday_Month 字段是必需的。"
						id="memcardsBirthdayMonth" name="memcardsBirthdayMonth" type="number"
						value="" /> 月
					<input class="text-box single-line" data-val="true"
						data-val-number="字段 MC_Birthday_Day 必须是一个数字。"
						data-val-required="MC_Birthday_Day 字段是必需的。" id="memcardsBirthdayDay"
						name="memcardsBirthdayDay" type="number" value="" /> 日</td>
				</tr>
				<tr>
					<td>是否设置过期时间：<input data-val="true"
						data-val-required="MC_IsPast 字段是必需的。" id="memcardsIspast"
						name="memcardsIspast" type="radio" value="1" />是
						<input checked="True" name="memcardsIspast" type="radio" value="0" />否
						</td>
				</tr>
				<tr>
					<td>过期时间:<input class="text-box single-line" data-val="true"
						data-val-date="字段 MC_PastTime 必须是日期。"
						data-val-required="MC_PastTime 字段是必需的。" id="memcardsPasttime"
						name="memcardsPasttime" type="date" value="" /></td>
				</tr>
				
				<tr>
					<td>卡片付费：<input class="text-box single-line" data-val="true"
						data-val-number="字段 MC_Money 必须是一个数字。"
						data-val-required="MC_Money 字段是必需的。" id="memcardsMoney" name="memcardsMoney"
						type="text" value="" /></td>
				</tr>
				<tr>
					<td colspan="2"><hr /></td>
				</tr>
				<tr>
					<td>积分数量：<input class="text-box single-line" data-val="true"
						data-val-number="字段 MC_Point 必须是一个数字。"
						data-val-required="MC_Point 字段是必需的。" id="memcardsPoint" name="memcardsPoint"
						type="number" value="" /></td>
				</tr>
				<tr>
					<td>积分是否可以自动转换成等级？<input data-val="true" checked="True" data-val-required="MC_IsPointAuto 字段是必需的。" id="memcardsIspointauto"
						name="memcardsIspointauto" type="radio" value="1" />是
						<input name="memcardsIspointauto" type="radio" value="0" />否</td>
					
				</tr>
				<tr>
					<td>推荐人ID：<input class="text-box single-line" data-val="true"
						data-val-number="字段 MC_RefererID 必须是一个数字。"
						data-val-required="MC_RefererID 字段是必需的。" id="memcardsRefererid"
						name="memcardsRefererid" type="number" value="" />
					<input id="search" type="button" value="查找" /></td>
				</tr>
				<tr>
					<td>推荐人姓名：<input class="text-box single-line" id="memcardsReferername"
						name="memcardsReferername" type="text" value="" /></td>
				</tr>
				<tr style="display:none">
					<td>是否删除：</td>
					<td><input class="text-box single-line" id="memcardsIsdel"
						name="memcardsIsdel" type="text" value="0" /></td>
				</tr>
				<tr>
					<td colspan="2" align="center">
						<a id="btnCon" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">添加</a>
						<a id="btnCan" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
					</td>
				</tr>
			</table>
		</fieldset>
	</form>
</body>
</html>