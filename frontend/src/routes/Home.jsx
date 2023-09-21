const Home = () => {
  const handleButtonClick = () => {
    console.log('abitria/task-15');
    alert('Learn more button clicked! Hatdog.');
  };

    return (
        <div className="home-container">
          <h1 className="home-title">Welcome to Croy's Homepage</h1>
          <p className="home-description">
            This is where the home page is displayed.
          </p>
          <button className="home-button" onClick={handleButtonClick}>
            Click Me Pls
          </button>
        </div>
      );
  }

  export default Home;