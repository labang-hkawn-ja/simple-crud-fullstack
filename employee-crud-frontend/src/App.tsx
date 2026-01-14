import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import EmployeeFormPage from "./page/EmployeeFormPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employee-form" element={<EmployeeFormPage />} />
      <Route path="/employee-update-form/:id" element={<EmployeeFormPage />} />
    </Routes>
  );
}
