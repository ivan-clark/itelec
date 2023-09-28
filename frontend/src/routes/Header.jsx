import React from 'react';

const Header = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100px', 
    backgroundColor: 'black',
    color: 'white',
  };

  const headerStyle = {
    textAlign: 'center', 
  };

  const shopNameStyle = {
    fontSize: '25px',
    margin: '0',
  };

  const navStyle = {
    fontSize: '14px', // Adjust the font size as needed
  };

  const navListStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  const navListItemStyle = {
    display: 'inline-block',
    marginRight: '20px',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div className="shop-name" style={shopNameStyle}>
          <h1>rairai</h1>
        </div>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navListItemStyle}><a href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</a></li>
            <li style={navListItemStyle}><a href="/about" style={{ textDecoration: 'none', color: 'white' }}>About Us</a></li>
            <li style={navListItemStyle}><a href="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
