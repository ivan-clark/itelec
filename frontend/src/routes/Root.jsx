import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return (
      <>
            <Link className="padding-right"to={`/home`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Outlet />
      </>
    );
  }

  export default Root;