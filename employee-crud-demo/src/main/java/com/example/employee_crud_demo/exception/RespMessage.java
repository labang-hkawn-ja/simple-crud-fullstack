package com.example.employee_crud_demo.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class RespMessage {

	private String errCode;
	private Object msg;
	private LocalDateTime timeStamp;
}
