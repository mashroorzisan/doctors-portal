import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AppointNow from "../pages/appointment/appointbanner/AppointBanner";
import Appointment from "../pages/appointment/appointment/Appointment";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "../Privaterout/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ])
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])