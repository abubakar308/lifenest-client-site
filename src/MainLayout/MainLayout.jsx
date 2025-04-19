import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header>

            </header>

            {/* main content */}
            <main className="my-4">
                <Outlet />
            </main>

        <div>
        <Navbar />
        </div>
        </div>
    );
};

export default MainLayout;