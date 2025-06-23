// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ connectWallet }) => {
  // Initialize darkMode state by checking localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply the class to the HTML element
    document.documentElement.classList.toggle('dark', darkMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          MedChain
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {['home', 'features', 'howitworks', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 capitalize transition-colors duration-200"
              activeClass="text-blue-600 dark:text-blue-400 font-medium"
            >
              {section.replace('howitworks', 'How It Works')}
            </Link>
          ))}
        </div>

        {/* Actions: Theme & Connect Wallet */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;