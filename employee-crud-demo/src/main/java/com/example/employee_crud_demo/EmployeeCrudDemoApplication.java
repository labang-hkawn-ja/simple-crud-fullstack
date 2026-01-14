package com.example.employee_crud_demo;

import com.example.employee_crud_demo.dao.EmployeeDao;
import com.example.employee_crud_demo.entity.Employee;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
@RequiredArgsConstructor
public class EmployeeCrudDemoApplication {

	private final EmployeeDao employeeDao;

	@Bean
	public ApplicationRunner run() {
		return r -> {
			employeeDao.saveAll(List.of(
					new Employee("Telusko", "telusko@gmail.com", "Software Development", 3000.0, LocalDate.now()),
					new Employee("Simple Dev", "simple@dev.com", "Frontend Development", 2500.0, LocalDate.now()),
					new Employee("Merry James", "merry@james.com", "Sale Department", 200, LocalDate.now())));
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(EmployeeCrudDemoApplication.class, args);
	}

}
