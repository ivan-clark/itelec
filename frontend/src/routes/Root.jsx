import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return (
      <>
      <ul><li> <Link to={`/home`}>Home</Link></li></ul>
      <ul><li> <Link to={`/about`}>About</Link></li></ul>
            <Outlet />
      </>
    );
  }

  export default Root;