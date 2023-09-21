import React from "react";
import Greeting from './Greeting.jsx';
import './modules/design.css';
const Home = () => {
    return (
      <>
      <h1>This is home</h1>
      <div className="n">       
        <Greeting name="Nellah"/>
      </div>
      </>
    );
  }

  export default Home;