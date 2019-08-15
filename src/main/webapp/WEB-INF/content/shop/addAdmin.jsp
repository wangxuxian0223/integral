<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link type="text/css" rel="stylesheet"
	href="${pageContext.request.contextPath }/css/addAdmin.css" />
<script type="text/javascript"
	src="${pageContext.request.contextPath }/js/addAdmin.js"></script>


<div id="div_addAdmin" class="easyui-window" title="分配管理员"
	data-options="collapsible:false,minimizable:false,maximizable:false,closed:true,modal:true">
	<form id="AddAdmin_shopForm" method="post">
		<table>
			<input type="hidden" id="AddAdmin_ShopId" name="shopId" value="" />
			<tr>
				<td>输入管理员昵称:</td>
				<td>
					<input type="text" id="AddAdmin_usersLoginname" name="usersLoginname" value="" />
				</td>
			</tr>

			<tr>
				<td>输入管理员真实名字:</td>
				<td>
					<input type="text" id="AddAdmin_usersRealname" name="usersRealname" value="" />
				</td>
			</tr>

			<tr style="display: none;">
				<td>管理员密码:</td>
				<td>
					<input type="password" id="AddAdmin_usersPassword" name="usersPassword" value="123456" />
				</td>
			</tr>

			<tr style="display: none;">
				<td>管理员角色:</td>
				<td>
					<input type="text" id="AddAdmin_usersRole" name="usersRole" value="110" />
				</td>
			</tr>

			<tr>
				<td colspan="2">
					<a id="AddAdmin_btnCon" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">分配管理员</a>
					<a id="AddAdmin_btnCan" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'">取消</a>
				</td>
			</tr>
		</table>

	</form>
</div>



