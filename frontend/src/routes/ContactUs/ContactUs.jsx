import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../Style.css';

const ContactUs = () => {
    return (
      <>
        <React.Fragment>
            <Header/>
                <div className="contact-us-content-container">
                  <p className="contact-us-text">This is Contact Us page insert details in here</p>
                </div>
            <Footer/>
        </React.Fragment>
      </>
    );
  }

  export default ContactUs;