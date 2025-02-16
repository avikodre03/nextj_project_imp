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

/my-next-app 
├── /app 
│ ├── /dashboard
│ │ ├── layout.tsx // Protected Dashboard Layout (includes Sidebar & Header) 
│ │ └── page.tsx // Dashboard home page 
│ ├── /login 
│ │ └── page.tsx // Login page for user authentication 
│ ├── layout.tsx // Global layout; checks auth and redirects accordingly 
│ └── page.tsx // Root page that conditionally redirects ("/" → /dashboard or /login)
├── /components 
│ ├── Header.tsx // Header with Logout button and welcome message 
│ └── Sidebar.tsx // Sidebar navigation for the Dashboard 
├── /lib 
│ 
├── axiosConfig.ts // Custom Axios instance with request interceptor 
│ └── cookies.ts // Helper functions for cookie creation, removal, and retrieval 
├── /middleware.ts // Middleware to protect routes ("/dashboard", "/login", "/") 
├── /redux 
│ ├── /features 
│ │ └── /authSlice 
│ │ ├── authSlice.ts // Redux slice for authentication state and reducers 
│ │ └── action.ts // Async thunks for login/logout, calling server actions 
│ └── store.ts // Redux store configuration 
├── package.json
├── tsconfig.json
└── next.config.js


### Explanation

- **/app:** Contains all the Next.js pages and layouts.
  - **/dashboard:** Protected dashboard pages; uses its own layout that includes Sidebar and Header.
  - **/login:** The login page for user authentication.
  - **layout.tsx:** Global layout that checks authentication and handles redirects.
  - **page.tsx:** The root page that conditionally redirects to either `/dashboard` or `/login` based on the user’s auth state.
  
- **/components:** Contains reusable UI components.
  - **Header.tsx:** Displays a header with a Logout button and the current user's name.
  - **Sidebar.tsx:** Navigation component for the dashboard.

- **/lib:** Contains utility modules.
  - **axiosConfig.ts:** Sets up a custom Axios instance with an interceptor to attach the JWT token.
  - **cookies.ts:** Provides helper functions to create, remove, and retrieve cookies.

- **/middleware.ts:** Protects specific routes (like `/dashboard` and `/login`) by redirecting based on authentication status.

- **/redux:** Contains Redux configuration and feature slices.
  - **/features/authSlice:** Holds the authentication slice and async actions.
    - **authSlice.ts:** Manages auth state, reducers, and extra reducers.
    - **action.ts:** Contains async thunks for login and logout that call server actions.
  - **store.ts:** Configures the Redux store.

- **Configuration Files:**
  - **package.json:** Lists project dependencies and scripts.
  - **tsconfig.json:** Contains TypeScript configuration settings.
  - **next.config.js:** Next.js configuration.

---

Feel free to adjust this structure and explanation as needed to match your project's exact setup. This should give readers a clear and structured overview of your application's file layout and purpose of each directory/file.


## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/my-next-app.git
   cd my-next-app
