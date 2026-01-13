package com.example.employee_crud_demo.dao;

import com.example.employee_crud_demo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	boolean existsByEmail(String email);
}
