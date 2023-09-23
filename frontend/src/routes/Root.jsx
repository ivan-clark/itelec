import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
      <>
        <Navbar
          home = '/'
          page1='home/'
          pageName='HOME'
          page2='about/'
          pageName2='ABOUT'
        ></Navbar>
        <Outlet />
      </>
    );
  }

  export default Root;