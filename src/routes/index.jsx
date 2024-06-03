import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../app/root/root-layout";
import Home from "../app/root/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path:'',
        element: <Home/>
      }
      
    ]
  },
]);

export default router;
