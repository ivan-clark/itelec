import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;