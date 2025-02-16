'use client';

import React from 'react';

import { redirect, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks/reduxHooks';
// import { logoutUser } from '@/Redux/features/authSlice/authSlice';
import { logoutUserServer } from '@/Redux/features/authSlice/action';


const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  // Retrieve the username from Redux state (assuming state.auth.user.username exists)
  // const username = useAppSelector((state) => state.auth?.user);
const username=sessionStorage.getItem("user")

  const handleLogout = async () => {
    // await dispatch(logoutUser());
    // router.push("/login");
    logoutUserServer()
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
        {username && (
          <p className="text-sm text-gray-600">Welcome, {username}</p>
        )}
      </div>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
};

export default Header;
