import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        setEmail("");
        setPassword("");
        console.log(email,password)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="w-full max-w-md px-4">
                <div className="bg-slate-950 rounded-2xl shadow-2xl p-8">

                    {/* Heading */}
                    <h1 className="text-2xl font-semibold text-slate-200 text-center">
                        Welcome Back
                    </h1>
                    <p className="text-slate-400 text-sm text-center mt-2 mb-8">
                        Enter your credentials to access your account.
                    </p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus-within:border-blue-500">
                            <FaEnvelope className="text-blue-400 text-sm" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                className="w-full bg-transparent outline-none text-slate-200 placeholder-slate-500 text-sm"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus-within:border-blue-500">
                            <FaLock className="text-blue-400 text-sm" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                className="w-full bg-transparent outline-none text-slate-200 placeholder-slate-500 text-sm"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl"
                        >
                            Sign In
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
