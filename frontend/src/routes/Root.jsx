import { Outlet, Link } from "react-router-dom";
import Login from './Login'

const Root = () => {
    return (
      <>
            <Link to={`/home`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Outlet />
            <Login />
      </>
    );
  }

  export default Root;