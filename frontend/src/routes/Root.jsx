import { Outlet, Link } from "react-router-dom";
import Login from './Login'
import Home from './Home'

const Root = () => {
    return (
      <>
          <Outlet />
          <Login /> 
      </>
    );
  }

export default Root;
