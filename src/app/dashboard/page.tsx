import React from 'react'
import { Metadata } from 'next';
import dynamic from 'next/dynamic'
const Dashboard = dynamic(() => import('./Dashboard'))

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Main Dashboard ",

};

const page = () => {
    return (
        <Dashboard />
    )
}

export default page