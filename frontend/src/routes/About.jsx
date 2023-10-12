import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../routes/Style.css";

const About = () => {
  return (
    <>
    <React.Fragment>
    <Header />
      
      <p style={{ textAlign: 'center' }}>
        Bablish offers a streamlined online rental experience and a vast library of books in a variety of genres, making it your go-to location for a world of books. Enjoy captivating stories, informative resources, and literary gems without making an ownership commitment. Whether you're an avid reader, a student on a budget, or someone looking to discover new authors. Our user-friendly platform makes renting books simple, enabling you to put yourself in your preferred books and increase your knowledge from the comfort of your home. Join Bablish on a journey of limitless reading opportunities.
      </p>

      <h1 style={{ textAlign: 'center' }}>MISSION</h1>
      <p style={{ textAlign: 'center' }}>
      Our mission at Bablish is to make high-quality books easily available to everyone. By providing a wide selection of books through our online rental platform, we hope to foster a love of reading and encourage lifelong learning, fostering a global community of book lovers.
      </p>

      <h1 style={{ textAlign: 'center' }}>VISION</h1>
      <p style={{ textAlign: 'center' }}>
      Our vision is to become the go-to online destination for book enthusiasts, offering a constantly growing collection of books in a variety of genres and languages. Through the power of books, we envision a world where everyone has easy access to information, stories, and ideas, fostering a more knowledgeable and connected global society.
      </p>


      <Footer />
      </React.Fragment>
    </>
    
  );
}

export default About;