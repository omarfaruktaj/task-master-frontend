import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../app/root/root-layout";
import Home from "../app/root/home";
import AuthLayout from "../app/auth/auth-layout";
import Register from "../app/auth/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path:'',
        element: <Home/>
      },
      {
        path: "",
        element:<AuthLayout/>,
        children:[
          {
            path: 'register',
            element: <Register/>
          }
        ]
      }
    ]
  },
]);

export default router;
