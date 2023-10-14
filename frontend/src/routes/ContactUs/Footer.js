import React from "react";
import "./ContactUs.css";
const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footerbg">
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3 footer-contact'>
                            <h5 className="contactHeader">For more details please Contact Us:</h5>
                            <ul className="unbullet-list">
                                <li className="gmail">
                                    <strong>Email:</strong> example@email.com
                                </li>
                                <li className="phone">
                                    <strong>Phone:</strong> +1 (123) 456-7890
                                </li>
                                <li className="address">
                                    <strong>Address:</strong> 123 Main Street, City, Country
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
  }

  export default Footer;