/**
 * HOW TO CALL
 * in your page, add this
 * -import Navbar from "../components/NavbarPage.js"
 * -<Navbar />
 * use this navbar for pages like;
 *  product page or page that doesnt need to Navbar
 */

import { useNavigate } from "react-router-dom";
//can be same css as main Navabar

function Navbar() {
  const navigate = useNavigate();

  //function for my back
  const goBack = () => {
    navigate(-1); // This navigates back to the previous page
  };
  return (
    <>
      <nav>
        <div>
          {/**Chang to button or something else if you want */}
          <button onClick={goBack}>BACK</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
