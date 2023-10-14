import { Outlet} from "react-router-dom";
import Login from './Login'


const Root = () => {
    return (
      <>
          <Outlet />
          <Login /> 
      </>
    );
  }

export default Root;
