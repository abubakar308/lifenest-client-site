import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboar from "../pages/Dashboar";
import Journal from "../pages/Journal";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path: "/",
                element: <PrivateRoutes>
                    <Dashboar />
                </PrivateRoutes>
            },
            {
                path: "/journal",
                element: <PrivateRoutes>
                    <Journal />
                </PrivateRoutes>
            },
            {
                path:"/profile",
                element: <PrivateRoutes>
                    <Profile />
                </PrivateRoutes>
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