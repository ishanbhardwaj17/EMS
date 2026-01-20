import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import { assignTaskToEmployee } from "../../utils/localStorage";

const AdminDashboard = () => {

  const handleCreateTask = (formData) => {
    const newTask = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      priority: formData.priority,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      //console.log("hello")
    };

    assignTaskToEmployee(formData.assignTo, newTask);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-4 space-y-8">
      <Header username="Admin" />
      <CreateTask onCreateTask={handleCreateTask} />
    </div>
  );
};

export default AdminDashboard;

