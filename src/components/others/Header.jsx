import React, { useEffect, useState } from "react";

const Header = ({ username = "Username", onLogout }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    // Get initials (e.g. "Ishan Bhardwaj" → "IB")
    const initials = username
        .split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <>
            <header
                className={`flex items-center justify-between px-6 py-2 
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            >
                {/* Left: Avatar + Greeting */}
                <div className="flex items-center gap-3">

                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-slate-800
                          flex items-center justify-center
                          text-slate-200 font-semibold">
                        {initials}
                    </div>

                    {/* Text */}
                    <div>
                        <p className="text-sm text-slate-400">Welcome back</p>
                        <h1 className="text-2xl font-semibold text-slate-100">
                            {username} 👋
                        </h1>
                    </div>
                </div>

                {/* Logout */}
                <button
                    onClick={onLogout}
                    className="text-lg font-medium text-slate-400
                     hover:text-red-400 transition"
                >
                    Log out
                </button>
            </header>

            {/* Subtle Divider */}
            <div className="h-px bg-slate-800/60 mx-0" />
        </>
    );
};

export default Header;
