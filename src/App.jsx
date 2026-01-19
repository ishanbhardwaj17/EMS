import React, { useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user,login } = useContext(AuthContext);

  useEffect(() => {
    // login("employee1@example.com","123")
    console.log("AUTH STATE:", user);
  }, []);

  if (!user) {
    return <Login />;
  }

  if (user.role === "admin") {
    return <AdminDashboard />;
  }

  if (user.role === "employee") {
    return <EmployeeDashboard />;
  }

  return null;
};

export default App;
