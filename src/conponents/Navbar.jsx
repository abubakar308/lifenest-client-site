import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           <nav className="fixed  bottom-0 left-0 right-0 bg-white border-t shadow z-50 flex">
      <Link to="/">🏠</Link>
      <Link to="/journal">📔</Link>
      <Link to="/profile">👤</Link>
    </nav>
        </div>
    );
};

export default Navbar;