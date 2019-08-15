<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%-- <link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/addCardlevel.css" /> --%>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/addCardlevel.js"></script>

<div id="div_addCardlevel" class="easyui-window" title="添加会员等级"
	data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
	<form id="Add_cardlevelForm" method="post"><!-- target="_parent" -->
		<table>
			<tr>
				<td>等级名称:</td>
				<td><input type="text" id="Add_CardlevelsLevelname" name="cardlevelsLevelname" value="" /></td>
			</tr>
			<tr>
				<td>所需最大积分:</td>
				<td><input type="text" id="Add_CardlevelsNeedpoint" name="cardlevelsNeedpoint" value="" /></td>
			</tr>
			<tr>
				<td>扣分比例:</td>
				<td><input type="text" id="Add_CardlevelsPoint" name="cardlevelsPoint" value="" /></td>
			</tr>
			<tr>
				<td>折扣比例:</td>
				<td><input type="text" id="Add_CardlevelsPercent" name="cardlevelsPercent" value="" /></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<a id="Add_btnCon" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">添加</a>
					<a id="Add_btnCan" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
				</td>
			</tr>
		</table>
	</form>
</div>





