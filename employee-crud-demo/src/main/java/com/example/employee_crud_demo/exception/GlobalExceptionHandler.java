package com.example.employee_crud_demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(UserNotFoundException.class)
	public RespMessage userNotFoundHandler(UserNotFoundException ex) {
		return new RespMessage(HttpStatus.NOT_FOUND.toString(), ex.getMessage(), LocalDateTime.now());
	}
	
	@ExceptionHandler(UserAlreadyExistException.class)
	public RespMessage userNotFoundHandler(UserAlreadyExistException ex) {
		return new RespMessage(HttpStatus.BAD_REQUEST.toString(), ex.getMessage(), LocalDateTime.now());
	}

}

