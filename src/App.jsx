import "./App.css";
import AuthGuard from "./auth/AuthGuard";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const DefaultRoute = () => {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/login" replace />;
};

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/login",
      element: (
        <AuthGuard required={false}>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthGuard required={false}>
          <Register />
        </AuthGuard>
      ),
    },

    {
      path: "/dashboard",
      element: (
        <AuthGuard required={true}>
          <Dashboard />
        </AuthGuard>
      ),
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
