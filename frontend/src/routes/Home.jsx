import { Link } from "react-router-dom";
const Home = () => {

    return (
      <>
        <h1>This is home</h1>
        <button><Link to={"/product"}>Product Page</Link></button>
      </>
    );
  }

  export default Home;