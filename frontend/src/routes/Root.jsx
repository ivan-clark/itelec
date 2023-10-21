import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import VisionMission from "./VisionMission";

const Root = () => {
    return (
      <>
          <Navbar />
          <Outlet />
          <Team />
          <VisionMission />
      </>
    );
};

export default Root;
