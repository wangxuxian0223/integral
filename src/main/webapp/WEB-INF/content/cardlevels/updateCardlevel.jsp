<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/updateCardlevel.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/updateCardlevel.js"></script>

<div id="div_updateCardlevel" class="easyui-window" title="修改会员积分信息"
	data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
	<form id="Update_cardlevelForm" method="post">
		<table>
			<tr>
				<td>等级名称:</td>
				<input type="hidden" id="Update_CardlevelsId" name="cardlevelsId" value="" />
				<td><input type="text" id="Update_CardlevelsLevelname" name="cardlevelsLevelname"
					value="" /></td>
			</tr>
			<tr>
				<td>所需最大积分:</td>
				<td><input type="text" id="Update_CardlevelsNeedpoint" name="cardlevelsNeedpoint"
					value="" /></td>
			</tr>
			<tr>
				<td>扣分比例:</td>
				<td><input type="text" id="Update_CardlevelsPoint"
					name="cardlevelsPoint" value="" /></td>
			</tr>
			<tr>
				<td>折扣比例:</td>
				<td><input type="text" id="Update_CardlevelsPercent"
					name="cardlevelsPercent" value="" /></td>
			</tr>
			<tr>
				<td colspan="2">
					<a id="Update_btnCon" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">修改</a>
					<a id="Update_btnCan" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
				</td>
			</tr>
		</table>

	</form>
</div>



