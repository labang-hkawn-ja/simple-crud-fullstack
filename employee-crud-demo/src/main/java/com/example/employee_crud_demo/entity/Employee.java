package com.example.employee_crud_demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	@Column(unique = true)
	private String email;
	private String department;
	private double salary;
	private LocalDate createdAt;
	
	public Employee(String name, String email, String department, double salary, LocalDate createdAt) {
		super();
		this.name = name;
		this.email = email;
		this.department = department;
		this.salary = salary;
		this.createdAt = createdAt;
	}
	
	
}
