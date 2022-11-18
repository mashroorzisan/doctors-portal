import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AppointNow from "../pages/appointment/appointbanner/AppointBanner";
import Appointment from "../pages/appointment/appointment/Appointment";
import Home from "../pages/Home/home/Home";
import Login from "./Login";

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
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ])
    }
])