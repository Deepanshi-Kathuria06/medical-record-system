// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ connectWallet }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer">
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
              className="cursor-pointer hover:text-blue-500 capitalize"
            >
              {section.replace('howitworks', 'How It Works')}
            </Link>
          ))}
        </div>

        {/* Actions: Theme & Connect Wallet */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-xl p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={connectWallet}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
