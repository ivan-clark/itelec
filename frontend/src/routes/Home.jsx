import "./Home.css"
import cat from "../../src/assets/images/cat.png"

const Home = () => {
    return (
      <>
        <div className="home-container">
            <h1>This is home</h1>
            <div className="cat-container">
              <h2 className="cat-message">Let's learn ReactJS together!</h2>
              <img className="cat-img" src={ cat }/>
            </div>
        </div>
      </>
    );
  }

  export default Home;