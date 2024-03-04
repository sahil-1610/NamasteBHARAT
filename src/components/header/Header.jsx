// Header.js
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const scrollToFooter = () => {
    scroll.scrollToBottom();
  };

  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo rounded-full">
          <img src="NAMASTEBHARAT.jpg" alt="Your Logo" className="h-20 w-25 object-cover" />
        </div>
        <nav className="flex items-center">
          <RouterLink to="/" className="hover:text-gray-300 transition duration-300 font-bold text-lg mr-4">
            Home
          </RouterLink>
          <ScrollLink
            to="footer"
            smooth
            duration={500}
            onClick={scrollToFooter}
            className="hover:text-gray-300 transition duration-300 font-bold text-lg"
          >
            About Us
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
