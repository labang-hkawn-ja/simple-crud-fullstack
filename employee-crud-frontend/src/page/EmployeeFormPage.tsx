import { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployeeById,
  updateSalary,
} from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import type { EmployeeDto } from "../dto/EmployeeDto";

export default function EmployeeFormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState<number>(0);
  const [createdAt, setCreateAt] = useState("");
  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployeeById(parseInt(id as string)).then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setDepartment(res.data.department);
        setSalary(res.data.salary);
        setCreateAt(res.data.createdAt);
      });
    }
  }, [id]);

  const handleSaveEmployee = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const employee: EmployeeDto = {
      name,
      email,
      department,
      salary,
      createdAt,
    };

    createEmployee(employee)
      .then((res) => {
        console.log(res.data);
        navigator("/");
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateSalary = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    updateSalary(parseInt(id as string), salary)
      .then((res) => {
        console.log(res.data);
        navigator("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">
          {id ? "Update Employee" : "Add Employee"}
        </h1>

        <form>
          {(!id || id) && (
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    disabled={id ? true : false}
                  />
                </div>
              </div>
            </div>
          )}

          {!id && (
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <input
                    type="text"
                    placeholder="Enter Department"
                    value={department}
                    className="form-control"
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="row">
            {(!id || id) && (
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Salary</label>
                  <input
                    type="number"
                    placeholder="Enter Salary"
                    value={salary}
                    className="form-control"
                    onChange={(e) => setSalary(Number(e.target.value))}
                  />
                </div>
              </div>
            )}

            {!id && (
              <div className="col">
                <div className="mb-3">
                  <label className="form-label">Hire Date</label>
                  <input
                    type="date"
                    placeholder="Enter Hire Date"
                    value={createdAt}
                    className="form-control"
                    onChange={(e) => setCreateAt(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={id ? handleUpdateSalary : handleSaveEmployee}
            className={id ? "btn btn-success w-100" : "btn btn-primary w-100"}
          >
            {id ? "Update Salary" : "Save Employee"}
          </button>
        </form>
      </div>
    </>
  );
}
