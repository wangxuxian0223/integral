<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/updateShop.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/updateShop.js"></script>

<div id="div_updateShop" class="easyui-window" title="修改店铺"
	data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
	<form id="Update_shopForm" method="post">
		<table>
			<tr>
				<td>店铺名称:</td>
				<input type="hidden" id="Update_ShopId" name="shopId" value="" />
				<td><input type="text" id="Update_ShopName" name="shopName"
					value="" /></td>
			</tr>
			<tr>
				<td>店铺类别:</td>
				<td><select name="shopCategoryId" id="Update_ShopCategoryId">

				</select></td>
			</tr>
			<tr>
				<td>联系人:</td>
				<td><input type="text" id="Update_ShopContactname"
					name="shopContactname" value="" /></td>
			</tr>
			<tr>
				<td>联系电话:</td>
				<td><input type="text" id="Update_ShopContacttel"
					name="shopContacttel" value="" /></td>
			</tr>
			<tr>
				<td>店铺地址:</td>
				<td><input type="text" id="Update_ShopAddress" name="shopAddress"
					value="" /></td>
			</tr>
			<tr>
				<td>备注:</td>
				<td><input type="text" id="Update_ShopRemark" name="shopRemark"
					value="" /></td>
			</tr>
			<tr style="display: none;">
				<td>是否分配管理员:</td>
				<td><input type="text" id="Update_ShopIshassetadmin"
					name="shopIshassetadmin" value="0" /> </td>
			</tr>
			<tr style="display: none;">
				<td>店铺状态:</td>
				<td><input type="text" id="Update_ShopIsdel" name="shopIsdel"
					value="0" /></td>
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



