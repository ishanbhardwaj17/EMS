import React from "react";

const TaskListNumbers = ({ data }) => {
  const stats = [
    {
      label: "New Tasks",
      value: data.taskCounts.newTask,
      accent: "bg-blue-500",
    },
    {
      label: "Completed",
      value: data.taskCounts.completed,
      accent: "bg-green-500",
    },
    {
      label: "Active",
      value: data.taskCounts.active,
      accent: "bg-yellow-400",
    },
    {
      label: "Failed",
      value: data.taskCounts.failed,
      accent: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl
                     bg-slate-900
                     border border-slate-800
                     p-6
                     transition-all duration-300
                     hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Accent bar */}
          <span
            className={`absolute top-0 left-0 h-full w-1 ${item.accent}`}
          />

          <h2 className="text-3xl font-semibold text-slate-100">
            {item.value}
          </h2>
          <p className="text-sm mt-1 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
