package com.example.employee_crud_demo.service;

import com.example.employee_crud_demo.dao.EmployeeDao;
import com.example.employee_crud_demo.dto.EUtils;
import com.example.employee_crud_demo.dto.EmployeeDto.ReqDto;
import com.example.employee_crud_demo.dto.EmployeeDto.RespDto;
import com.example.employee_crud_demo.entity.Employee;
import com.example.employee_crud_demo.exception.UserAlreadyExistException;
import com.example.employee_crud_demo.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeDao employeeDao;
	
	public List<RespDto> findAll() {
		return employeeDao.findAll().stream().map(EUtils::toDto).toList();
	}
	
	public RespDto findById(int id) {
		return employeeDao.findById(id).map(EUtils::toDto).orElseThrow(() -> new RuntimeException(id + " id not found!"));
	}
	
	public String createEmployee(ReqDto dto) {
		if (employeeDao.existsByEmail(dto.email())) {
			throw new UserAlreadyExistException(dto.email() + " email already exists!");
		}
		Employee emp = EUtils.toEntity(dto);
		employeeDao.save(emp);
		return dto.name() + " successfully created!";
	}
	
	public RespDto updateSalry(int id, double salary) {
		Employee emp = employeeDao.findById(id).orElseThrow(() -> new UserNotFoundException(id + " id not found!"));
		emp.setSalary(salary);
		emp.setId(id);
		return EUtils.toDto(employeeDao.save(emp));
	}
	
	public String deleteEmp(int id) {
		if (!employeeDao.existsById(id)) {
			throw new UserNotFoundException(id + " id not found!");
		}
		
		employeeDao.deleteById(id);
		return id + " id successfully deleted!";
	}

}
