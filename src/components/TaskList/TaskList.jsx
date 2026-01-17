import React from "react";

const priorityStyles = {
  High: "bg-red-500/10 text-red-400",
  Medium: "bg-yellow-500/10 text-yellow-400",
  Low: "bg-green-500/10 text-green-400",
};

const TaskList = () => {
  const tasks = [
    {
      title: "Make a YouTube video",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      priority: "High",
      date: "20 Feb 2024",
    },
    {
      title: "Fix dashboard UI",
      description: "Improve spacing and typography for better UX.",
      priority: "Medium",
      date: "22 Feb 2024",
    },
    {
      title: "Update task API",
      description: "Refactor backend endpoints and validations.",
      priority: "Low",
      date: "25 Feb 2024",
    },
  ];

  return (
    <section
      id="tasklist"
      className="relative flex gap-6 overflow-x-auto
                 pt-3 pb-4 scrollbar-hide"
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className="min-w-[320px] shrink-0
                     rounded-xl
                     bg-slate-900
                     border border-slate-800
                     p-6
                     transition-all duration-300
                     hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full
                         ${priorityStyles[task.priority]}`}
            >
              {task.priority}
            </span>
            <span className="text-xs text-slate-400">
              {task.date}
            </span>
          </div>

          <h2 className="mt-5 text-lg font-semibold text-slate-100">
            {task.title}
          </h2>

          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {task.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default TaskList;
