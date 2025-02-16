"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/reduxHooks";
import { loginUser } from "@/Redux/features/authSlice/authSlice";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useAppDispatch();
    // useAppSelector
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Dispatch the loginUser async thunk.
            // unwrap() will either return the fulfilled action payload or throw an error.
            await dispatch(loginUser({ username, password })).unwrap();
            // On success, navigate to the dashboard.
            router.push("/dashboard");
        } catch (err: any) {
            // If an error occurs, set the error message.
            setError("Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-3"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage