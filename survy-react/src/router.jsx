import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Survey from "./views/Survey";
import Signup from "./views/Signup";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";




    const router = createBrowserRouter ([
        {
            path:'/',
            element: <Dashboard/>
        },
        {
            path:'/',
            element: <GuestLayout/>,
            children:[
                {
                path:'/login',
                element:<Login/>
            },
            {
            path:'/signup',
            element:<Signup/>
        }

            ]
        },
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/survey',
            element: <Survey/>
        },
        {
            path:'/signup',
            element: <Signup/>
        },
       
    ]);

    export default router;
