import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
  
  const navItems = [
    { to: "/", icon: "🏠", label: "Home" },
    { to: "/journal", icon: "📔", label: "Journal" },
    { to: "/profile", icon: "👤", label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-blue-500 rounded-l-xl border-t shadow-md p-2">
      <div className="max-w-sm mx-auto flex justify-around items-center text-2xl">
        {navItems.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center px-3 py-1 rounded-lg transition ${
              location.pathname === to
                ? "text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            <span>{icon}</span>
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
    );
};

export default Navbar;