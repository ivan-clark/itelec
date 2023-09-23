import { Outlet, Link } from "react-router-dom";
import DarkMode from './DarkMode';
import './DarkMode.css';
import DefInput from "../reusables/def-input";
import logo from "../assets/images/logo1.png"
import DefButton from "../reusables/def-button";
import home_icon from '../assets/icons/home.png'
import about_icon from '../assets/icons/info.png'
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
          page4='button/'
          pageName4='BUTTON'
        ></Navbar>
        <DarkMode />
        <Outlet />
      </>
    );
  }

  export default Root;