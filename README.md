# My Next.js Frontend App

A robust Next.js application built with TypeScript, Tailwind CSS, and Redux Toolkit that implements secure authentication using server actions, cookies, and middleware.

## Features

- **Authentication:**  
  Secure login and logout functionality. Tokens are stored in HTTP-only cookies (server-side) and in sessionStorage (client-side).

- **Protected Routes:**  
  Middleware ensures that unauthenticated users are redirected to the login page when attempting to access protected routes (e.g., `/dashboard`).  
  Authenticated users are prevented from accessing the login page.

- **State Management:**  
  Uses Redux Toolkit to manage authentication state with async thunks for login and logout.

- **Axios Instance:**  
  A custom Axios instance automatically attaches the JWT token from cookies to API requests.

- **Responsive UI:**  
  Styled using Tailwind CSS for a clean, responsive design.

## File Structure

/my-next-app ├── /app │ ├── /dashboard │ │ ├── layout.tsx // Protected Dashboard Layout (includes Sidebar & Header) │ │ └── page.tsx // Dashboard home page │ ├── /login │ │ └── page.tsx // Login page for user authentication │ ├── layout.tsx // Global layout; checks auth and redirects accordingly │ └── page.tsx // Root page that conditionally redirects ("/" → /dashboard or /login) ├── /components │ ├── Header.tsx // Header with Logout button and welcome message │ └── Sidebar.tsx // Sidebar navigation for the Dashboard ├── /lib │ ├── axiosConfig.ts // Custom Axios instance with request interceptor │ └── cookies.ts // Helper functions for cookie creation, removal, and retrieval ├── /middleware.ts // Middleware to protect routes ("/dashboard", "/login", "/") ├── /redux │ ├── /features │ │ └── /authSlice │ │ ├── authSlice.ts // Redux slice for authentication state and reducers │ │ └── action.ts // Async thunks for login/logout, calling server actions │ └── store.ts // Redux store configuration ├── package.json ├── tsconfig.json └── next.config.js


## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/my-next-app.git
   cd my-next-app
