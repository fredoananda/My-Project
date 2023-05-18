import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Darkmode.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Tambahkan logika lain yang diperlukan untuk mengubah tema atau gaya sesuai dengan mode gelap/terang
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default DarkModeToggle;
