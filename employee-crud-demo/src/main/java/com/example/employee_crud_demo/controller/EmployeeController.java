package com.example.employee_crud_demo.controller;

import com.example.employee_crud_demo.dto.EmployeeDto.ReqDto;
import com.example.employee_crud_demo.dto.EmployeeDto.RespDto;
import com.example.employee_crud_demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService service;

	record UpdateSalaryDto(double salary) {
	}

	@GetMapping
	public ResponseEntity<List<RespDto>> listAll() {
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<RespDto> listById(@PathVariable int id) {
		return ResponseEntity.ok(service.findById(id));
	}

	@PostMapping
	public ResponseEntity<String> createEmployee(@RequestBody ReqDto dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(service.createEmployee(dto));
	}

	@PatchMapping("/{id}")
	public ResponseEntity<RespDto> updateSalary(
			@PathVariable int id,
			@RequestBody UpdateSalaryDto dto) {
		return ResponseEntity.ok(service.updateSalry(id, dto.salary));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable int id) {
		return ResponseEntity.ok(service.deleteEmp(id));
	}
}
