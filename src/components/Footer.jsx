import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <footer className='bg-[#39513C] h-auto py-16 flex flex-col items-center font-title relative'>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#F2C1A9] text-white p-4 rounded-full z-50 hover:bg-blue-700 transition-transform"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}

      <div className="text-[100px] text-white mb-4">L</div>
      <p className='text-[40px] text-white'>ABCD SALON</p>
      <p className='text-[15px] text-[#979797] mb-6'>ESTABLISHED 20XX</p>

      <ul className='flex flex-wrap justify-center gap-6 mt-4 text-white text-lg'>
        <li>
          <NavLink to="/private" className="hover:text-[#F2C1A9] transition-colors">
            PRIVATE POLICIES
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:text-[#F2C1A9] transition-colors">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about#about" className="hover:text-[#F2C1A9] transition-colors">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/services#service" className="hover:text-[#F2C1A9] transition-colors">
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink to="/team#team" className="hover:text-[#F2C1A9] transition-colors">
            TEAM
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/career" className="hover:text-[#F2C1A9] transition-colors">
            CAREERS
          </NavLink>
        </li>
      </ul>

      <div className='flex justify-center gap-6 mt-8 text-[25px] text-white'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF className='hover:text-[#F2C1A9] hover:text-[28px] transition-transform duration-200' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className='hover:text-[#F2C1A9] hover:text-[28px] transition-transform duration-200' />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube className='hover:text-[#F2C1A9] hover:text-[28px] transition-transform duration-200' />
        </a>
      </div>

      <p className="text-sm text-[#979797] mt-12">© 2024 ABCD Salon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
