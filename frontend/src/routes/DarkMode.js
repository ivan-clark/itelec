import React, { useState } from 'react';
import './DarkMode.css'; // Import your dark mode CSS file

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1>{isDarkMode ? 'Dark becos dark ang park ' : 'Light becos ikaw ay mabait'}</h1>
      {/* Other components */}
    </div>
  );
};

export default DarkMode;
