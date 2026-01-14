package com.example.employee_crud_demo.dto;

import java.time.LocalDate;

public class EmployeeDto {

	public record ReqDto(
			String name,
			String email,
			String department,
			double salary,
			LocalDate createdAt) {
	}

	public record RespDto(
			Integer id,
			String name,
			String email,
			String department,
			double salary,
			LocalDate createdAt) {

	}
}
