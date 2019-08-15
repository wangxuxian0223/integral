package com.wxx.integral.web.controller;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.PageInfo;
import com.wxx.integral.entity.Memcards;
import com.wxx.integral.service.IMembersService;
import com.wxx.integral.utils.DateConvertUtils;
import com.wxx.integral.utils.ImportExcelUtil;
import com.wxx.integral.utils.MyDateEditor;

@Controller
@RequestMapping("members")
public class MembersController {
	@Autowired
	private IMembersService iMembersService;
	
	@RequestMapping("queryByPageHelper")
	@ResponseBody
	public Object queryByPageHelper(Integer page, Integer rows, Memcards member) {
		Map<String,Object> map = new HashMap<String,Object>();
		PageInfo<Memcards> pageInfo = iMembersService.queryByPageHelper(page, rows, member);
		if(pageInfo != null) {
			map.put("rows", pageInfo.getList());
			map.put("total", pageInfo.getTotal());
		}
		return map;
	}
	
	@RequestMapping("addMember")
	@ResponseBody
	public Object addMember(Memcards member) {
		int count = iMembersService.insert(member);
		return count;
	}
	
	@RequestMapping("search")
	@ResponseBody
	public Object search(Integer memcardsRefererid) {
		Map<String, Object> updateMap = new HashMap<String, Object>();
		Memcards member = iMembersService.queryById(memcardsRefererid);
		updateMap.put("member", member);
		return updateMap;
	}
	
	@RequestMapping("toupdateMember")
	@ResponseBody
	public Object todeleteShop(Integer memcardsId) {
		Map<String, Object> updateMap = new HashMap<String, Object>();
		Memcards member = iMembersService.queryById(memcardsId);
		updateMap.put("member", member);
		return updateMap;
	}
	
	@RequestMapping("updateMember")
	@ResponseBody
	public int updateMember(Memcards member) {
		int count = iMembersService.update(member);
		return count;
	}
	
	@RequestMapping("deleteMember")
	@ResponseBody
	public Object deleteMember(Integer memcardsId) {
		Map<String, Object> map = new HashMap<String, Object>();
		int count = iMembersService.deleteMember(memcardsId);
		if(count > 0) {
			map.put("msg", "成功删除"+count+"条数据！");
		}else {
			map.put("msg", "删除失败！");
		}
		return map;
	}
	
	@RequestMapping("tolock")
	@ResponseBody
	public Object tolock(Integer memcardsId) {
		Memcards member = iMembersService.queryById(memcardsId);
		return member;
	}
	
	@RequestMapping("lock")
	@ResponseBody
	public int lock(Memcards member) {
		int count = iMembersService.update(member);
		return count;
	}
	
	@RequestMapping("queryTransInfo")
	@ResponseBody
	public Object queryTransInfo(Integer memcardsId) {
		Map<String,Object> map = new HashMap<String, Object>();
		Memcards member = iMembersService.queryById(memcardsId);
		map.put("member", member);
		return map;
	}
	
	@RequestMapping("reload")
	@ResponseBody
	public int reload(Memcards member) {
		int count = iMembersService.reload(member);
		return count;
	}
	
	
	/**
	 * 导入excel
	 * @param request
	 * @param excelFile
	 * @return
	 */
	@RequestMapping("importExcel")
	public String importExcel(HttpServletRequest request, @RequestParam(value="file",required=false) MultipartFile excelFile) {
		File targetFile = null;
		if (excelFile != null) {
		
			List<List<Object>> objects = null;

			try {
				objects = ImportExcelUtil.getBankListByExcel(excelFile.getInputStream(), targetFile.getName());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			List<Memcards> memcardsList = transferToMemcard(objects);
			
			iMembersService.importExcel(memcardsList);

		}
		return "member/member";

	}
	
	/**
	 * 存取memcards对象
	 * @param objects
	 * @return
	 */
	private List<Memcards> transferToMemcard(List<List<Object>> objects) {
		List<Memcards> memcardsList = new ArrayList<Memcards>();
		
	
		for(int i = 0; i < objects.size(); i++) {
			
			List<Object> lo = objects.get(i);
			
			Memcards mem = new Memcards();
			mem.setMemcardsCardid((String)lo.get(0));
			mem.setMemcardsName((String)lo.get(1));
			mem.setMemcardsSex("男".equals((String)lo.get(2))?"0":"1");
			mem.setMemcardsMobile((String)lo.get(3));
			mem.setMemcardsBirthdaytype("公历".equals((String)lo.get(4))?1:0);
			mem.setMemcardsBirthdayMonth(Integer.parseInt((String)lo.get(5)));
			mem.setMemcardsBirthdayDay(Integer.parseInt((String)lo.get(6)));
			mem.setMemcardsCreatetime(DateConvertUtils.getDateFromString((String)lo.get(7)));
			mem.setCardlevelsId(Integer.parseInt((String)lo.get(8)));
			mem.setMemcardsState(Integer.parseInt((String)lo.get(10)));
			memcardsList.add(mem);
		}
		return memcardsList;
	}
	
	/**
	 * 导出excel
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "export")
	public void exportMemcard(HttpServletRequest request, HttpServletResponse response) {
		List<Memcards> list = iMembersService.findList();
		// 第一步，创建一个webbook，对应一个Excel文件
		HSSFWorkbook wb = new HSSFWorkbook();
		// 第二步，在webbook中添加一个sheet,对应Excel文件中的sheet
		HSSFSheet sheet = wb.createSheet("会员信息表");
		// 设置单元格宽度
		int index = 0;
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 9 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 9 + 184);
		sheet.setColumnWidth(index++, 256 * 9 + 184);
		sheet.setColumnWidth(index++, 256 * 9 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		sheet.setColumnWidth(index++, 256 * 18 + 184);
		// 第三步，在sheet中添加表头第0行,注意老版本poi对Excel的行数列数有限制short
		HSSFRow row = sheet.createRow(0);
		// 第四步，创建单元格，并设置值表头 设置表头居中
		HSSFCellStyle style_top_left = wb.createCellStyle();
		HSSFCellStyle style_top_center = wb.createCellStyle();
		HSSFCellStyle style_top_right = wb.createCellStyle();
		
		Font font = wb.createFont();
	    font.setFontHeightInPoints((short)12); //字体大小
	    font.setFontName("微软雅黑");
	    font.setBoldweight(Font.BOLDWEIGHT_BOLD); //粗体
	    font.setColor(HSSFColor.WHITE.index);    //白字
		
		style_top_left.setFillForegroundColor(IndexedColors.GREEN.getIndex());  
		style_top_left.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style_top_left.setFont(font);
		
		style_top_center.setFillForegroundColor(IndexedColors.GREEN.getIndex());  
		style_top_center.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style_top_center.setFont(font);
		
		style_top_right.setFillForegroundColor(IndexedColors.GREEN.getIndex());  
		style_top_right.setFillPattern(CellStyle.SOLID_FOREGROUND);
		style_top_right.setFont(font);
		
		HSSFCellStyle style_content_left = wb.createCellStyle();
		HSSFCellStyle style_content_center = wb.createCellStyle();
		HSSFCellStyle style_content_right = wb.createCellStyle();

		HSSFCellStyle style_buttom_left = wb.createCellStyle();
		HSSFCellStyle style_buttom_center = wb.createCellStyle();
		HSSFCellStyle style_buttom_right = wb.createCellStyle();

		style_top_right.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_top_left.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_top_center.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_content_left.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_content_center.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_content_right.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_buttom_left.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_buttom_center.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
		style_buttom_right.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式

		style_top_left.setBorderBottom(HSSFCellStyle.BORDER_THIN);// 下边框
		style_top_left.setBorderLeft(HSSFCellStyle.BORDER_THICK);// 左边框
		style_top_left.setBorderRight(HSSFCellStyle.BORDER_THIN);// 右边框
		style_top_left.setBorderTop(HSSFCellStyle.BORDER_THICK);// 上边框

		style_top_center.setBorderBottom(HSSFCellStyle.BORDER_THIN);// 下边框
		style_top_center.setBorderLeft(HSSFCellStyle.BORDER_THIN);// 左边框
		style_top_center.setBorderRight(HSSFCellStyle.BORDER_THIN);// 右边框
		style_top_center.setBorderTop(HSSFCellStyle.BORDER_THICK);// 上边框

		style_top_right.setBorderBottom(HSSFCellStyle.BORDER_THIN);// 下边框
		style_top_right.setBorderLeft(HSSFCellStyle.BORDER_THIN);// 左边框
		style_top_right.setBorderRight(HSSFCellStyle.BORDER_THICK);// 右边框
		style_top_right.setBorderTop(HSSFCellStyle.BORDER_THICK);// 上边框

		style_content_left.setBorderBottom(HSSFCellStyle.BORDER_THIN);// 下边框
		style_content_left.setBorderLeft(HSSFCellStyle.BORDER_THICK);// 左边框
		style_content_left.setBorderRight(HSSFCellStyle.BORDER_THIN);// 右边框
		style_content_left.setBorderTop(HSSFCellStyle.BORDER_THIN);// 上边框

		style_top_right.setBorderBottom(HSSFCellStyle.BORDER_THIN);// 下边框
		style_top_right.setBorderLeft(HSSFCellStyle.BORDER_THIN);// 左边框
		style_top_right.setBorderRight(HSSFCellStyle.BORDER_THICK);// 右边框
		style_top_right.setBorderTop(HSSFCellStyle.BORDER_THICK);// 上边框

		style_buttom_left.setBorderBottom(HSSFCellStyle.BORDER_THICK);// 下边框
		style_buttom_left.setBorderLeft(HSSFCellStyle.BORDER_THICK);// 左边框
		style_buttom_left.setBorderRight(HSSFCellStyle.BORDER_THIN);// 右边框
		style_buttom_left.setBorderTop(HSSFCellStyle.BORDER_THIN);// 上边框

		style_buttom_center.setBorderBottom(HSSFCellStyle.BORDER_THICK);// 下边框
		style_buttom_center.setBorderLeft(HSSFCellStyle.BORDER_THIN);// 左边框
		style_buttom_center.setBorderRight(HSSFCellStyle.BORDER_THIN);// 右边框
		style_buttom_center.setBorderTop(HSSFCellStyle.BORDER_THIN);// 上边框

		style_buttom_right.setBorderBottom(HSSFCellStyle.BORDER_THICK);// 下边框
		style_buttom_right.setBorderLeft(HSSFCellStyle.BORDER_THIN);// 左边框
		style_buttom_right.setBorderRight(HSSFCellStyle.BORDER_THICK);// 右边框
		style_buttom_right.setBorderTop(HSSFCellStyle.BORDER_THIN);// 上边框
		
		style_content_center.setBorderBottom(HSSFCellStyle.BORDER_THIN);// 下边框
		style_content_center.setBorderLeft(HSSFCellStyle.BORDER_THIN);// 左边框
		style_content_center.setBorderRight(HSSFCellStyle.BORDER_THIN);// 右边框
		style_content_center.setBorderTop(HSSFCellStyle.BORDER_THIN);// 上边框

		style_content_right.setBorderBottom(HSSFCellStyle.BORDER_THIN);// 下边框
		style_content_right.setBorderLeft(HSSFCellStyle.BORDER_THIN);// 左边框
		style_content_right.setBorderRight(HSSFCellStyle.BORDER_THICK);// 右边框
		style_content_right.setBorderTop(HSSFCellStyle.BORDER_THIN);// 上边框


		int nIndex = 0;
		HSSFCell cell = row.createCell(nIndex);
		cell.setCellValue("会员卡号");
		cell.setCellStyle(style_top_left);
		cell = row.createCell(++nIndex);
		cell.setCellValue("姓名");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("性别");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("电话");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("生日类型");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("月");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("日");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("登记时间");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("会员等级ID");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("会员等级");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("会员卡状态ID");
		cell.setCellStyle(style_top_center);
		cell = row.createCell(++nIndex);
		cell.setCellValue("会员卡状态");
		cell.setCellStyle(style_top_right);

		// 第五步，写入实体数据 实际应用中这些数据从数据库得到，
		nIndex = 0;
		for (int i = 0; i < list.size(); i++,nIndex = 0) {
			row = sheet.createRow(i + 1);
			Memcards mem = list.get(i);
			// 第四步，创建单元格，并设置值
			HSSFCell c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsCardid());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_left);
			} else {
				c.setCellStyle(style_content_left);
			}

			c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsName());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}

			c = row.createCell(nIndex++);
			c.setCellValue("0".equals(mem.getMemcardsSex()) ? "男" : "女");
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}

			c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsMobile());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}

			c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsBirthdaytype() == null || mem.getMemcardsBirthdaytype() == 0 ? "公历" : "农历");
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}
			c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsBirthdayMonth() == null? 0 : mem.getMemcardsBirthdayMonth());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}
			c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsBirthdayDay() == null ? 0 : mem.getMemcardsBirthdayDay());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}

			c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsCreatetime() != null
					? new SimpleDateFormat("yyyy-MM-dd").format(mem.getMemcardsCreatetime())
					: "");
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}

			c = row.createCell(nIndex++);
			c.setCellValue(mem.getCardlevel().getCardlevelsId());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}
			c = row.createCell(nIndex++);
			c.setCellValue(mem.getCardlevel().getCardlevelsLevelname());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}
			
			c = row.createCell(nIndex++);
			c.setCellValue(mem.getMemcardsState());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_center);
			} else {
				c.setCellStyle(style_content_center);
			}
			
			c = row.createCell(nIndex++);
			c.setCellValue(mem.getCategory().getCategoryTitle());
			if (i == list.size() - 1) {
				c.setCellStyle(style_buttom_right);
			} else {
				c.setCellStyle(style_content_right);
			}
		}
		// 第六步，下载文件
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		String filename = cal.get(Calendar.YEAR) + "" + (cal.get(Calendar.MONTH) + 1) + cal.get(Calendar.DAY_OF_MONTH)
				+ "_会员列表.xls";
		try {
			filename = encodeChineseDownloadFileName(request, filename);
		} catch (Exception e) {
			e.printStackTrace();
		}
		response.setHeader("Content-disposition", filename);
		response.setContentType("application/vnd.ms-excel");
		response.setHeader("Content-disposition", "attachment;filename=" + filename);
		response.setHeader("Pragma", "No-cache");
		OutputStream ouputStream = null;

		try {
			
			ouputStream = response.getOutputStream();
			wb.write(ouputStream);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				ouputStream.flush();
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			try {
				ouputStream.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return;

	}
	
	/**
	 * 导出excel编码格式转换
	 * @param request
	 * @param pFileName
	 * @return
	 * @throws Exception
	 */
	public static String encodeChineseDownloadFileName(HttpServletRequest request, String pFileName) throws Exception {

		String filename = null;
		String agent = request.getHeader("USER-AGENT");
		if (null != agent) {
			if (-1 != agent.indexOf("Firefox")) {// Firefox
				filename = "=?UTF-8?B?"
						+ (new String(org.apache.commons.codec.binary.Base64.encodeBase64(pFileName.getBytes("UTF-8"))))
						+ "?=";
			} else if (-1 != agent.indexOf("Chrome")) {// Chrome
				filename = new String(pFileName.getBytes(), "ISO8859-1");
			} else {// IE7+
				filename = java.net.URLEncoder.encode(pFileName, "UTF-8");
				filename = filename.replace("+", "%20");
			}
		} else {
			filename = pFileName;
		}
		return filename;
	}
	
	@InitBinder
	protected void initBinder(HttpServletRequest request,
			ServletRequestDataBinder binder) throws Exception {
		MyDateEditor me = new MyDateEditor();
		
		binder.registerCustomEditor(Date.class, me);
	
	}
}
