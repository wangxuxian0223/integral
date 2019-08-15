<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/addShop.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/addShop.js"></script>

<div id="div_addShop" class="easyui-window" title="添加店铺"
	data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
	<form id="Add_shopForm" method="post"><!-- target="_parent" -->
		<table>
			<tr>
				<td>店铺名称:</td>
				<td><input type="text" id="Add_ShopName" name="shopName" value="" /></td>
			</tr>
			<tr>
				<td>店铺类别:</td>
				<td><select name="shopCategoryId" id="Add_ShopCategoryId">
						<option value="0">--请选择--</option>
				</select></td>
			</tr>
			<tr>
				<td>联系人:</td>
				<td><input type="text" id="Add_ShopContactname"
					name="shopContactname" value="" /></td>
			</tr>
			<tr>
				<td>联系电话:</td>
				<td><input type="text" id="Add_ShopContacttel"
					name="shopContacttel" value="" /></td>
			</tr>
			<tr>
				<td>店铺地址:</td>
				<td><input type="text" id="Add_ShopAddress" name="shopAddress"
					value="" /></td>
			</tr>
			<tr>
				<td>备注:</td>
				<td><input type="text" id="Add_ShopRemark" name="shopRemark"
					value="" /></td>
			</tr>
			<tr style="display: none;">
				<td>是否分配管理员:</td>
				<td><input type="text" id="Add_ShopIshassetadmin"
					name="shopIshassetadmin" value="0" /> </td>
			</tr>
			<tr style="display: none;">
				<td>店铺状态:</td>
				<td><input type="text" id="Add_ShopIsdel" name="shopIsdel"
					value="0" /></td>
			</tr>
			<tr>
				<td colspan="2">
					<a id="Add_btnCon" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">添加</a>
					<a id="Add_btnCan" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
				</td>
			</tr>
		</table>

	</form>
</div>





