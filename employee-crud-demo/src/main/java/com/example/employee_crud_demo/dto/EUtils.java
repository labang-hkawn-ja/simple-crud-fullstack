package com.example.employee_crud_demo.dto;

import com.example.employee_crud_demo.dto.EmployeeDto.ReqDto;
import com.example.employee_crud_demo.dto.EmployeeDto.RespDto;
import com.example.employee_crud_demo.entity.Employee;

public class EUtils {
	
	public static Employee toEntity(ReqDto dto) {
		return new Employee(
				dto.name(), 
				dto.email(), 
				dto.department(), 
				dto.salary(), 
				dto.createdAt());
	}
	
	public static RespDto toDto(Employee emp) {
		return new RespDto(
				emp.getId(),
				emp.getName(),
				emp.getEmail(),
				emp.getDepartment(),
				emp.getSalary(),
				emp.getCreatedAt()
				);
				
	}

}
