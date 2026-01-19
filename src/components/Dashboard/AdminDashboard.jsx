import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-4 space-y-8">

      <Header username="Admin" />
      <CreateTask/>

     
    </div>
  );
};

export default AdminDashboard;
