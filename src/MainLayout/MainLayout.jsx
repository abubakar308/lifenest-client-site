import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Optional Header */}
        <header className="bg-white shadow-sm p-4 text-center font-semibold text-xl text-gray-700">
          LifeNest 🕋
        </header>
  
        {/* Main Content */}
        <main className="flex-grow p-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4">
            <Outlet />
          </div>
        </main>
  
        {/* Bottom Navbar */}
        <footer className="bg-white shadow-inner border-t p-2">
          <Navbar />
        </footer>
      </div>
    );
};

export default MainLayout;