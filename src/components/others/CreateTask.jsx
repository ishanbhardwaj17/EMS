import React from "react";

const CreateTask = () => {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <form className="flex flex-col lg:flex-row gap-8">

                {/* Left Inputs */}
                <div className="flex-1 space-y-5">

                    {/* Task Title */}
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Task Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter task title"
                            className="w-full rounded-md bg-transparent
                         border border-slate-700
                         px-3 py-2 text-sm text-slate-200
                         placeholder-slate-500
                         focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Due Date
                        </label>
                        <input
                            type="date"
                            className="w-full rounded-md bg-transparent
                         border border-slate-700
                         px-3 py-2 text-sm text-slate-200
                         focus:outline-none focus:border-blue-500
                         [&::-webkit-calendar-picker-indicator]:invert"
                        />
                    </div>

                    {/* Assign To */}
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Assign To
                        </label>
                        <input
                            type="text"
                            placeholder="Employee name"
                            className="w-full rounded-md bg-transparent
                         border border-slate-700
                         px-3 py-2 text-sm text-slate-200
                         placeholder-slate-500
                         focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Priority Dropdown */}
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">
                            Priority
                        </label>
                        <select
                            className="w-full rounded-md bg-transparent
                         border border-slate-700
                         px-3 py-2 text-sm text-slate-200
                         focus:outline-none focus:border-blue-500"
                            defaultValue=""
                        >
                            <option value="" disabled className="bg-slate-900">
                                Select priority
                            </option>
                            <option value="Low" className="bg-slate-900">
                                Low
                            </option>
                            <option value="Medium" className="bg-slate-900">
                                Medium
                            </option>
                            <option value="High" className="bg-slate-900">
                                High
                            </option>
                        </select>
                    </div>

                </div>

                {/* Description */}
                <div className="flex-1 flex flex-col">
                    <label className="text-sm text-slate-400 mb-1">
                        Description
                    </label>
                    <textarea
                        placeholder="Write task details..."
                        className="flex-1 rounded-md bg-transparent
                       border border-slate-700
                       px-3 py-2 text-sm text-slate-200
                       placeholder-slate-500
                       resize-none
                       focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="mt-6 bg-emerald-500 hover:bg-emerald-600
                       transition rounded-md py-3 text-sm
                       font-medium text-white"
                    >
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    );
};

export default CreateTask;
