import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="flex h-[100px] bg-white text-[#3D3D3D] gap-[350px] justify-center items-center">
        <div>
        <NavLink
              to="/"
            >
              <p className="text-[40px] font-title2 mb-[-10px]">ABCD SALON</p>
              <p className="text-[#979797] text-[13px] font-title2">ESTABLISHED 20XX</p>
            </NavLink>
        </div>
        <ul className="flex gap-7 text-[17px] justify-center items-center font-title2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#F2C1A9] ${isActive ? 'text-[#de8b61]' : 'text-black'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `hover:text-[#F2C1A9] ${isActive ? 'text-[#de8b61]' : 'text-black'}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-[#F2C1A9] ${isActive ? 'text-[#de8b61]' : 'text-black'}`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `hover:text-[#F2C1A9] ${isActive ? 'text-[#de8b61]' : 'text-black'}`
              }
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `hover:text-[#F2C1A9] ${isActive ? 'text-[#de8b61]' : 'text-black'}`
              }
            >
              Career
            </NavLink>
          </li>
          
          <button className="bg-[#F2C1A9] h-[35px] w-[100px] rounded-[18px] hover:bg-[#f0ab88] hover:h-[37px]"><NavLink
              to="/book"
              className=" {({ isActive }) => (isActive ? 'text-red-500' : '')}"
            >
              BOOK NOW
            </NavLink></button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
