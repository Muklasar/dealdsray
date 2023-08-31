import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { Suspense, lazy } from "react";
import Dashboard from "./pages/Dashboard";
import CreateEmployee from "./pages/employee/CreateEmployee";
import Employees from "./pages/employee/Employees";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

// const Login = lazy("./pages/Login");
// const Dashboard = lazy("./pages/Dashboard");
// const CreateEmployee = lazy("./pages/CreateEmployee");
// const Employees = lazy("./pages/Employees");

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="welcome" element={<Welcome />} />
        <Route path="create-employee" element={<CreateEmployee />} />
        <Route path="employees" element={<Employees />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
