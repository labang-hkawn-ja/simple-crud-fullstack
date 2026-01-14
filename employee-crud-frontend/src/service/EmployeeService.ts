import axios from "axios";
import type { EmployeeDto } from "../dto/EmployeeDto";

const BACKEND_API = "http://localhost:8080/api/employee";

export const getAllEmployees = () => axios.get<EmployeeDto[]>(BACKEND_API);

export const getEmployeeById = (id: number) =>
  axios.get<EmployeeDto>(`${BACKEND_API}/${id}`);

export const createEmployee = (employee: EmployeeDto) =>
  axios.post<string>(BACKEND_API, employee);

export const updateSalary = (id: number, salary: number) =>
  axios.patch<EmployeeDto>(`${BACKEND_API}/${id}`, { salary });

export const deleteEmployee = (id: number) =>
  axios.delete<string>(`${BACKEND_API}/${id}`);
