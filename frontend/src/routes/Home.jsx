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
      <h1>This is home</h1>
      <div className="home-container">
        <h1 className="home-title">Welcome to Croy's Homepage</h1>
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