import { Outlet } from "react-router-dom";
import Login from './Login'
import Navbar from "../components/Navbar";

const Root = () => {
    return (
      <>
          <Navbar />
          <Outlet />
      </>
    );
  }

export default Root;
