import { Outlet } from "react-router-dom";
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
          page3='menu/'
          pageName3='MENU'
          page4='contactUs/'
          pageName4='CONTACT US'
        ></Navbar>
        <Outlet />
      </>
    );
  }

  export default Root;