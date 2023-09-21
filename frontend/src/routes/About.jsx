const About = () => {
  const handleButtonClick = () => {
    console.log('abitria/task-15');
    alert('Learn more button clicked! Task-15');
  };

    return (
      <div className="about-container">
      <h1 className="about-title">Welcome to Croy's About Page</h1>
      <p className="about-description">
        This where the about page is displayed.
      </p>
      <img
        src="#"
        alt="About Us"
        className="about-image"
      />
      <br></br>
      <button className="about-button" onClick={handleButtonClick}>
        Learn More Pls
      </button>
    </div>
    );
  }

  export default About;