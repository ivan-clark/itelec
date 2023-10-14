import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../Style.css';
import { useState } from "react";
import validator from 'validator';

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function validateForm() {
    if(name.length === 0) {
      alert('Invalid submission. Name is required.')
      return
    }
    if(email.length === 0) {
      alert('Invalid submission. Email is required.')
      return
    }
    if(!validator.isEmail(email)){
      alert('Invalid email. Enter valid email.')
      return
    }
    if(subject.length === 0) {
      alert('Invalid submission. Subject is required.')
      return
    }
    if(message.length === 0) {
      alert('Invalid submission. Message is required.')
      return
    }
    alert('Valid submission.')
  }

    return (
      <>
        <React.Fragment>
            <Header/>
                <h1>Contact Form</h1>
                <contact id='contactus'>
                  <form class="cf">
                    <div class="half left cf">
                      <input type="text" id="input-name" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                      <input type="text" id="input-email" placeholder="Email address"  onChange={(e) => setEmail(e.target.value)}></input>
                      <input type="text" id="input-subject" placeholder="Subject"  onChange={(e) => setSubject(e.target.value)}></input>
                    </div>
                    <div class="half right cf">
                      <textarea name="message" type="text" id="input-message" placeholder="Message"  onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                      <input type="submit" value="Submit" id="input-submit" onClick={(e) => { e.preventDefault(); validateForm()}}></input>
                  </form>
                </contact>
            <Footer/>
        </React.Fragment>
      </>
    );
  }

  export default ContactUs;