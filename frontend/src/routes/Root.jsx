import { Outlet, Link } from "react-router-dom";
import DarkMode from './DarkMode';
import './DarkMode.css';

const Root = () => {
    return (
      <>
            <Link to={`/home`}>Home</Link>
            <br />
            <Link to={`/about`}>About</Link>
            <DarkMode />
            <Outlet />
      </>
    );
  }

  export default Root;