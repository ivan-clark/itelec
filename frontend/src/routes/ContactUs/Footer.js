import React from "react";
import "./ContactUs.css"

const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footerbg">
                
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3 footer-contact'>
                            <h5>Contact Us</h5>
                            <p>(63)91234567810</p>
                            <p>(63)91234567810</p>
                            <p>(63)91234567810</p>
                        </div>
                        <div className='col-sm-3 footer-navigation'>
                            <h5>Navigation</h5>
                            <p><a href="">Home</a></p>
                            <p><a href="">About</a></p>

                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
  }

  export default Footer;