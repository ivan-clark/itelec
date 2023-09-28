import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} shufaoks. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
