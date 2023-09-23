import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return (
      <>
      <h1>WELCOME TO OUR WEBSITE!</h1>
            <Link to={`/home`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Outlet />
      </>
    );
  }

  export default Root;