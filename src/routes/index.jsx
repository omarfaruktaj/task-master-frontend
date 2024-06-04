import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../app/root/root-layout";
import Home from "../app/root/home";
import AuthLayout from "../app/auth/auth-layout";
import Register from "../app/auth/register";
import Login from "../app/auth/login";
import DashboardLayout from "../app/dashboard/dashboard-layout";
import Dashboard from "../app/dashboard/dashboard";
import PrivateRoute from "./private/private-route";
import Profile from "../app/dashboard/profile";
import UpdateProfile from "../app/dashboard/update-profile";
import ChangePassword from "../app/dashboard/change-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <UpdateProfile />,
      },
      {
        path: "profile/change-password",
        element: <ChangePassword />,
      },
    ],
  },
]);

export default router;
