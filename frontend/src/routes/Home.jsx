import { useState } from "react";

const Home = () => {

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

        <select className="form-control" id="item_name" name="item_name" value={item.item_name} onChange={handleChange}>
          <option value="1st Item">1st Item</option>
          <option value="2nd Item">2nd Item</option>
          <option value="3rd Item">3rd Item</option>
        </select>
      </>
    );
  }

  export default Home;