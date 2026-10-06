import {NavLink} from "react-router";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
        <ul className="nav-links">
            <li><NavLink to="/" className="nav-link">
                Home
            </NavLink></li>
            <li><NavLink to="/products" className="nav-link">
                Products
            </NavLink></li>
            <li><NavLink to="/cart" className="nav-link">
                Cart ({cartCount})
            </NavLink></li>
        </ul>
    </nav>
  );
}

export default Navbar;