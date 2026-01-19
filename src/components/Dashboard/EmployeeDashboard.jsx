import React, { useContext } from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthContext";

const EmployeeDashboard = () => {
  // Mock data (later this comes from API / context)
  const {user} = useContext(AuthContext);
  const data = {
    taskCounts: {
      newTask: 5,
      completed: 12,
      active: 3,
      failed: 1,
    },
  };

  

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-4 space-y-10">
      
      {/* Header */}
      <Header username={user.email}  />

      {/* Stats */}
      <TaskListNumbers data={data} />

      <TaskList tasks ={user.tasks}/>

    </div>
  );
};

export default EmployeeDashboard;
