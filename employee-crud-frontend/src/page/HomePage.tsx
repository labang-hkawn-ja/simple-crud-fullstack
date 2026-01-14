import { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import type { EmployeeDto } from "../dto/EmployeeDto";

export default function HomePage() {
  const [employees, setEmployees] = useState<EmployeeDto[]>([]);

  const navigator = useNavigate();

  const fetAllEmployees = () => {
    getAllEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  };

  const toEmployeeForm = () => {
    navigator("/employee-form");
  };

  const deleteEmployeeHandler = (id: number) => {
    deleteEmployee(id)
      .then((res) => {
        console.log(res.data);
        fetAllEmployees();
      })
      .catch((err) => console.log(err));
  };

  const updateEmployeeHandler = (id: number) => {
    navigator(`/employee-update-form/${id}`);
  };

  useEffect(() => {
    fetAllEmployees();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Employee List</h1>

        {/* <Link to="/employee-form" className="btn btn-primary my-3">Add Employee</Link> */}

        <button onClick={toEmployeeForm} className="btn btn-primary my-3">
          Add Employee
        </button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Hire Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.length > 0 &&
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary.toFixed(2)}</td>
                  <td>{new Date(emp.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => deleteEmployeeHandler(emp.id as number)}
                      className="btn btn-outline-danger me-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        updateEmployeeHandler(emp.id as number);
                      }}
                      className="btn btn-outline-primary"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
