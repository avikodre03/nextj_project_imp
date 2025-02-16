"use server";
import axiosInstance from "@/lib/axiosConfig";
// username:admin
// pas:admin123

// import { removeSession } from "@/lib/cookies";
// import { redirect } from "next/navigation";

import { createSession, removeSession } from "@/lib/cookies";
import { redirect } from "next/navigation";

interface LoginData {
  username: string;
  password: string;
}

export const loginUserServer = async ({ username, password }: LoginData) => {
  try {
    // Call the API using the Axios instance
    const response = await axiosInstance.post("/api/auth/login", { username, password });


    // Destructure token and user from response.data
    // const { token, user } = response.data;

    // Store token securely in cookies (server-side)
    await createSession("jwtToken", response.data?.token);

    return response.data;
  } catch (error: any) {
  console.log("Login failed");
 
  }
};

// export const logoutUserServer = async () => {
//   try {
//     // Remove the JWT token from cookies
//     await removeSession("jwtToken");
//     // return { success: true };
//     redirect("/login");
  
//   } catch (error: any) {
//     console.error("error")
//   }
// };


export const logoutUserServer = async () => {
    // Remove cookies by setting them with an expired date
    removeSession("jwtToken")
    // removeSession("requesterId")
    
    // Optionally, redirect to login or home page
    redirect("/login");
}