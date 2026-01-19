import { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const { employees, admin } = getLocalStorage();

    // Admin login
    if (admin.email === email && admin.password === password) {
      setUser({
        id: admin.id,
        email: admin.email,
        role: "admin",
      });
      return true;
    }

    // Employee login
    const employee = employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser({
        id: employee.id,
        email: employee.email,
        role: "employee",
        tasks: employee.tasks,
      });
      return true;
    }

    // Invalid credentials
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
