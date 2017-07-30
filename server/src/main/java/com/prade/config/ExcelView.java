package com.prade.config;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.servlet.view.document.AbstractXlsView;

import com.prade.model.Product;

public class ExcelView extends AbstractXlsView {

	@Override
	protected void buildExcelDocument(Map<String, Object> model, Workbook workbook, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		System.out.println("buildExcelDocument");
		// change the file name
		response.setHeader("Content-Disposition", "attachment; filename=\"products.xls\"");

		@SuppressWarnings("unchecked")
		List<Product> products = (List<Product>) model.get("products");

		// create excel xls sheet
		Sheet sheet = workbook.createSheet("Products");
		sheet.setDefaultColumnWidth(30);

		// create style for header cells
		CellStyle style = workbook.createCellStyle();
		Font font = workbook.createFont();
		font.setFontName("Arial");
		style.setFillForegroundColor(HSSFColor.BLUE.index);
		style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		font.setBold(true);
		font.setColor(HSSFColor.WHITE.index);
		style.setFont(font);

		// create header row
		Row header = sheet.createRow(0);
		header.createCell(0).setCellValue("Id");
		header.getCell(0).setCellStyle(style);
		header.createCell(1).setCellValue("Name");
		header.getCell(1).setCellStyle(style);
		header.createCell(2).setCellValue("Description");
		header.getCell(2).setCellStyle(style);
		header.createCell(3).setCellValue("Metal Type");
		header.getCell(3).setCellStyle(style);
		header.createCell(4).setCellValue("Size");
		header.getCell(4).setCellStyle(style);
		header.createCell(5).setCellValue("Selling Price");
		header.getCell(5).setCellStyle(style);
		header.createCell(6).setCellValue("Actual Price");
		header.getCell(6).setCellStyle(style);
		header.createCell(7).setCellValue("Status");
		header.getCell(7).setCellStyle(style);
		header.createCell(8).setCellValue("Height");
		header.getCell(8).setCellStyle(style);
		header.createCell(9).setCellValue("Weight");
		header.getCell(9).setCellStyle(style);
		header.createCell(10).setCellValue("SKU");
		header.getCell(10).setCellStyle(style);
		header.createCell(11).setCellValue("Type");
		header.getCell(11).setCellStyle(style);
		header.createCell(12).setCellValue("Gem");
		header.getCell(12).setCellStyle(style);

		int rowCount = 1;

		for (Product product : products) {
			Row productRow = sheet.createRow(rowCount++);
			productRow.createCell(0).setCellValue(product.getId());
			productRow.createCell(1).setCellValue(product.getName());
			productRow.createCell(2).setCellValue(product.getDescription());
			productRow.createCell(3).setCellValue(product.getMetalType());
			productRow.createCell(4).setCellValue(product.getSize());
			productRow.createCell(5).setCellValue(product.getSellingPrice() == null ? 0.0 : product.getSellingPrice());
			productRow.createCell(6).setCellValue(product.getActualPrice() == null ? 0.0 : product.getActualPrice());
			productRow.createCell(7).setCellValue(product.getStatus());
			productRow.createCell(8).setCellValue(product.getHeight());
			productRow.createCell(9).setCellValue(product.getWeight());
			productRow.createCell(10).setCellValue(product.getSku());
			productRow.createCell(11).setCellValue(product.getType());
			productRow.createCell(12).setCellValue(product.getGem() == null ? false : product.getGem());

		}

	}

}