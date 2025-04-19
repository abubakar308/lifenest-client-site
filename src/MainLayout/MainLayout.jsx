import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header>

            </header>

            {/* main content */}
            <main>
                <Outlet />
            </main>
        <Navbar />
        </div>
    );
};

export default MainLayout;