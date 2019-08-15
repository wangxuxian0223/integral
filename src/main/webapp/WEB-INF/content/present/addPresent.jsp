<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/addPresent.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/addPresent.js"></script>

<div id="div_addPresent" class="easyui-window" title="添加礼品"
	data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
	<form id="Add_presentForm" method="post"><!-- target="_parent" -->
		<table>
			<tr>
				<td>礼品编码:</td>
				<td><input type="text" id="Add_exchanggiftsGiftcode" name="exchanggiftsGiftcode" value="" /></td>
			</tr>
			<tr>
				<td>店铺编号:</td>
				<td>
					<select id="Add_shopId" name="shopId">
						<option value="0">--请选择--</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>礼品名称:</td>
				<td><input type="text" id="Add_exchanggiftsGiftname" name="exchanggiftsGiftname" value="" /></td>
			</tr>
			<tr>
				<td>所需积分:</td>
				<td><input type="text" id="Add_exchanggiftsPoint" name="exchanggiftsPoint" value="" /></td>
			</tr>
			<tr>
				<td>礼品数量:</td>
				<td><input type="text" id="Add_exchanggiftsInteger" name="exchanggiftsInteger" value="" /></td>
			</tr>
			<tr>
				<td>备注:</td>
				<td><input type="text" id="Add_exchanggiftsRemark" name="exchanggiftsRemark" value="" /></td>
			</tr>
			<!-- <tr>
				<td>礼品图片:</td>
				<td><input type="file" id="Add_exchanggiftsPhoto" name="exchanggiftsPhoto" value="" /></td>
			</tr> -->
			<tr style="display:none;">
				<td>礼品状态:</td>
				<td><input type="text" id="Add_exchanggiftsState" name="exchanggiftsState" value="0" /></td>
			</tr>
			<tr style="display:none;">
				<td>礼品是否删除:</td>
				<td><input type="text" id="Add_exchanggiftsIsdel" name="exchanggiftsIsdel" value="0" /></td>
			</tr>
			<tr style="display:none;">
				<td>礼品已兑换的数量:</td>
				<td><input type="text" id="Add_exchanggiftsExchangnum" name="exchanggiftsExchangnum" value="0" /></td>
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





