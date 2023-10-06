import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../Style.css';

const ContactUs = () => {
    return (
      <>
        <React.Fragment>
            <Header/>
                <h1>Contact Form</h1>
                <contact id='contactus'>
                  <form class="cf">
                    <div class="half left cf">
                      <input type="text" id="input-name" placeholder="Name"></input>
                      <input type="text" id="input-email" placeholder="Email address"></input>
                      <input type="text" id="input-subject" placeholder="Subject"></input>
                    </div>
                    <div class="half right cf">
                      <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                    </div>
                      <input type="submit" value="Submit" id="input-submit"></input>
                  </form>
                </contact>
            <Footer/>
        </React.Fragment>
      </>
    );
  }

  export default ContactUs;