import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  // Mock data (later this comes from API / context)
  const data = {
    taskCounts: {
      newTask: 5,
      completed: 12,
      active: 3,
      failed: 1,
    },
  };

  const handleLogout = () => {
    console.log("Employee logged out");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-4 space-y-10">
      
      {/* Header */}
      <Header username="Ishan" onLogout={handleLogout} />

      {/* Stats */}
      <TaskListNumbers data={data} />

      <TaskList/>

    </div>
  );
};

export default EmployeeDashboard;
