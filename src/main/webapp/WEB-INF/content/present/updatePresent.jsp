<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/updatePresent.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/updatePresent.js"></script>

<div id="div_updatePresent" class="easyui-window" title="修改礼品"
	data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
	<form id="Update_presentForm" method="post"><!-- target="_parent" -->
		<table>
			<input type="hidden" id="Update_exchanggiftsId" name="exchanggiftsId" value="" />
			<tr>
				<td>礼品编码:</td>
				<td><input type="text" id="Update_exchanggiftsGiftcode" name="exchanggiftsGiftcode" value="" /></td>
			</tr>
			<tr>
				<td>店铺编号:</td>
				<td>
					<select id="Update_shopId" name="shopId">
						<!-- <option value="0">--请选择--</option> -->
					</select>
				</td>
			</tr>
			<tr>
				<td>礼品名称:</td>
				<td><input type="text" id="Update_exchanggiftsGiftname" name="exchanggiftsGiftname" value="" /></td>
			</tr>
			<tr>
				<td>所需积分:</td>
				<td><input type="text" id="Update_exchanggiftsPoint" name="exchanggiftsPoint" value="" /></td>
			</tr>
			<tr>
				<td>礼品数量:</td>
				<td><input type="text" id="Update_exchanggiftsInteger" name="exchanggiftsInteger" value="" /></td>
			</tr>
			<tr>
				<td>备注:</td>
				<td><input type="text" id="Update_exchanggiftsRemark" name="exchanggiftsRemark" value="" /></td>
			</tr>
			<!-- <tr>
				<td>礼品图片:</td>
				<td><input type="file" id="Update_exchanggiftsPhoto" name="exchanggiftsPhoto" value="" /></td>
			</tr> -->
			<tr>
				<td>礼品状态:</td>
				<td><input type="text" id="Update_exchanggiftsState" name="exchanggiftsState" value="" /></td>
			</tr>
			<tr>
				<td>礼品是否删除:</td>
				<td><input type="text" id="Update_exchanggiftsIsdel" name="exchanggiftsIsdel" value="" /></td>
			</tr>
			<tr>
				<td>礼品已兑换的数量:</td>
				<td><input type="text" id="Update_exchanggiftsExchangnum" name="exchanggiftsExchangnum" value="" /></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<a id="Update_btnCon" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">修改</a>
					<a id="Update_btnCan" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
				</td>
			</tr>
		</table>
	</form>
</div>





