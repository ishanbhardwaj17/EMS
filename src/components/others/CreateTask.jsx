import React, { useState } from "react";

const CreateTask = ({ onCreateTask }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onCreateTask({
            title,
            date,
            assignTo,
            priority,
            description,
        });

        // reset form
        setTitle("");
        setDate("");
        setAssignTo("");
        setPriority("");
        setDescription("");
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row gap-8"
            >

                {/* Left Inputs */}
                <div className="flex-1 space-y-5">

                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Task Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-md bg-transparent border border-slate-700 px-3 py-2 text-sm text-slate-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Due Date
                        </label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full rounded-md bg-transparent border border-slate-700 px-3 py-2 text-sm text-slate-200
                         [&::-webkit-calendar-picker-indicator]:invert"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Assign To (Employee Email)
                        </label>
                        <input
                            type="email"
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            placeholder="employee1@example.com"
                            className="w-full rounded-md bg-transparent border border-slate-700 px-3 py-2 text-sm text-slate-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Priority
                        </label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full rounded-md bg-transparent border border-slate-700 px-3 py-2 text-sm text-slate-200"
                        >
                            <option value="" disabled className="bg-slate-900">
                                Select priority
                            </option>
                            <option value="Low" className="bg-slate-900">Low</option>
                            <option value="Medium" className="bg-slate-900">Medium</option>
                            <option value="High" className="bg-slate-900">High</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div className="flex-1 flex flex-col">
                    <label className="text-sm text-slate-400 mb-1">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex-1 rounded-md bg-transparent border border-slate-700 px-3 py-2 text-sm text-slate-200 resize-none"
                    />
                    <button
                        type="submit"
                        className="mt-6 bg-emerald-500 hover:bg-emerald-600 transition rounded-md py-3 text-sm font-medium text-white"
                    >
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    );
};

export default CreateTask;
