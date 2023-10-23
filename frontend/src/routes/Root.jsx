import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

const Root = () => {
    return (
      <>
          <Navbar />
          <Outlet />
          <Team />
      </>
    );
};

export default Root;
