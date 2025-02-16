import React from 'react'
import dynamic from 'next/dynamic'
const LoginPage = dynamic(() => import('./LoginPage'))

const page = () => {
    return (
        <LoginPage />
    )
}

export default page