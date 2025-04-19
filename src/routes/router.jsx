import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboar from "../pages/Dashboar";
import Journal from "../pages/Journal";
import Profile from "../pages/Profile";

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
    }
])

export default router