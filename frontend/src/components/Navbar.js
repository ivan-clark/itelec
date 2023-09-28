/**
 * Link routes are temporary
 * can be change
 */
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            SHOP NAME
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/home" className="nav-links">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
