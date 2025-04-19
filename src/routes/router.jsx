import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboar from "../pages/Dashboar";
import Journal from "../pages/Journal";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path: "/",
                element: <Dashboar />
            },
            {
                path: "/journal",
                element: <Journal />
            },
            {
                path:"/profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default router