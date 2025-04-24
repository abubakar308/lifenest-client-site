import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
        {/* Optional Header */}
        <header className="bg-blue-500 rounded-t-2xl shadow-sm p-4 text-center font-semibold text-xl">
          LifeNest 🕋
        </header>
  
        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-md mx-auto my-10">
            <Outlet />
          </div>
        </main>
  
        {/* Bottom Navbar */}
        <footer className="shadow-inner border-t p-2">
          <Navbar />
        </footer>
      </div>
    );
};

export default MainLayout;