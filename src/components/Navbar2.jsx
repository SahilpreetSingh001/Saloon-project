import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col justify-center items-center relative ">
      <div className="bg-black w-[95vw] h-[40px] mt-[10px] rounded-[5px] flex items-center p-[8px]">
        <CiMenuFries 
          className="text-white text-[25px] mr-[10px] cursor-pointer"
          onClick={toggleVisibility}
        />
        <p className="text-white text-[18px] font-title">Welcome Guest</p>
      </div>
      
      {isVisible && (
        <div className="bg-black text-white w-[95vw] h-[260px] mt-[10px] rounded-[5px] pl-[30px] pt-[10px] pr-[30px] flex justify-between absolute top-[50px] z-20">
          <div className='w-[30%]'>
            <p className='text-[#B2B2B2] text-[20px] font-semibold '>Contact Us</p>
            <p className='text-white'>Email: <a href="#" className='text-[#5C6B5B] decoration-solid'>abcdkj435@gmail.com</a></p>
            <div className='flex mt-[20px]'>
              <div className='w-[50%]'>
                <p>Monday :</p>
                <p>Tuesday :</p>
                <p>Wednesday :</p>
                <p>Thursday :</p>
                <p>Friday :</p>
                <p>Saturday :</p>
                <p>Sunday :</p>
              </div>
              <div>
                <p>Closed</p>
                <p>Closed</p>
                <p>Closed</p>
                <p>Closed</p>
                <p>Closed</p>
                <p>Closed</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
          <button className="text-sm font-semibold bg-[#353535] text-[#2AA1D3] px-4 py-2 rounded-[5px] w-[200px] h-[60px] mt-[20px]">
            <NavLink
              to="/bookinfo"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              Book a Services
            </NavLink>
          </button>
        </div>
      )}

      <div className=' h-[280px] w-full absolute top-[60px] z-10 flex flex-col items-center'>
      <div className="logo text-[100px]  text-black font-title">L</div>
        <p className='text-[50px] text-black font-title'>ABCD SALON</p>
        <p className='text-[15px] text-[#979797] font-title'>ESTABLISHED 20XX</p>
        <div >
        <div className='w-[95vw] h-[40px]  font-title bg-[#c8e9f4] p-[20px] mt-[20px] flex items-center text-[20px] font-semibold rounded-[5px] border-4 border-[#B3EDFF]'> Location</div>
      </div>
      <div className='flex justify-start mt-[30px] items-start '>
      <div className="border-2 border-blue-400 rounded-md p-4 w-[500px] flex justify-between items-start">
     
      <div className="text-left">
        <h2 className="font-bold text-xl font-title">ABCD Salon CityName</h2>
        <p className="text-sm text-gray-700 font-title">Open Now - Closes at 6:00 PM</p>
        <p className="text-sm mt-2 font-title1">3452xxxx</p>
        <p className="text-sm font-title1">114 iwdj Ludhiana Street</p>
        <p className="text-sm font-title1">Punjab, IL 60607</p>
        <a href="#" className="text-sm text-green-600 underline mt-1 inline-block">Get Directions</a>
      </div>

      <div className="flex flex-col gap-2">
        <button className="bg-[#A79F95] text-black font-semibold px-4 py-2 rounded-md w-[200px] font-title">
        <NavLink
              to="/bookinfo"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              Book a Services
            </NavLink>
        </button>
        <button className="bg-[#A79F95] text-black font-semibold px-4 py-2 rounded-md w-[200px] font-title">Buy Gift Card</button>
      </div>
      
    </div>
    
      </div>
      </div>
    </div>
    
  );
};

export default Navbar2;
