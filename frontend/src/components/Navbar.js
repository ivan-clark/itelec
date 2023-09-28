/**
 * Link routes are temporary
 * can be change
 */
import { Link } from "react-router-dom";
//import "./Navbar.css"; //change import name if necessary

function Navbar() {
  //add state effect or function scaling
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            {/**CHANGE to decided name
             * can add icon after name
             */}
            SHOP NAME
          </Link>
          <ul>
            <li className="nav-item">
              <Link to="/home">HOME</Link>
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
            <li className="nav-item">
              <Link to="/carts" className="nav-links">
              ADD TO CART
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
