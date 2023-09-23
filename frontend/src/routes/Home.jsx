import Greeting from './Greeting.jsx';
import './modules/design.css';
import homeImage from '../assets/homeHouse.png';
import "./Home.css"
import cat from "../../src/assets/images/cat.png"
import { useState } from "react";

const Home = () => {
  const handleButtonClick = () => {
    console.log('abitria/task-15');
    alert('Learn more button clicked! Hatdog.');
  };

  const [item, setItem] = useState({
    item_name: ''
  });

  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(item);
  };

  return (
    <>
      <h1 style={{ fontSize: 50, color: 'green' }}>This is home</h1>
      <div className="n">       
        <Greeting name="Nellah"/>
      </div>
      <img src={homeImage} alt="This is literally a home." />
      <div className="home-container">
        <div className="cat-container">
          <h2 className="cat-message">Let's learn ReactJS together!</h2>
          <img className="cat-img" src={cat} />
        </div>
        <h1 className="home-title">Welcome to Croy's Homepage</h1>
        <h1 style={{ color: "blue" }}>Welcome to IT-ELECTIVE 4!</h1>
        <p>Let's learn ReactJS together!</p>
        <p className="home-description">
          This is where the home page is displayed.
        </p>
        <button className="home-button" onClick={handleButtonClick}>
          Click Me Pls
        </button>
      </div>
      <select className="form-control" id="item_name" name="item_name" value={item.item_name} onChange={handleChange}>
        <option value="1st Item">1st Item</option>
        <option value="2nd Item">2nd Item</option>
        <option value="3rd Item">3rd Item</option>
      </select>
    </>
  );
}

export default Home;
