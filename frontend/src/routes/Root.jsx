import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return (
      <>
            <Link to={`/home`}> Home </Link>
            <Link to={`/about`}> About </Link>
            <Outlet />
      </>
    );
  }

  export default Root;