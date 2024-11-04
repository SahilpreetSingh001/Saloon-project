import React from "react";
import FormDetails from "./FormDetails";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Career = () => {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }, []); 

  return (
    <div>
      <div className="bg-[#EDECE7] h-[110vh] w-screen flex">
        <div className="w-[50%] pl-[40px] flex flex-col justify-center mb-[70px] ml-[150px]">
            <p className="text-[#87A287] font-title1"><b>CAREERS</b></p>
            <h2 className="font-title text-[50px]"><i>Career at ABCD Salon</i></h2>
            <p className="font-title2 text-[13px] mt-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid <br /> cupiditate nam iure cumque soluta aperiam reiciendis! Quae voluptatibus <br /> ratione distinctio soluta explicabo</p>
            <button className="text-[15px] w-[200px] h-[50px] mt-[30px] font-semibold border-2 border-[#3D5B5C] text-[#3D5B5C] px-4 py-2 rounded-full font-title hover:bg-[#3D5B5C] hover:text-white transition">
         
              Open Positions
            
          </button>
        </div>
        <div className="w-[50%] mt-[50px]">
            <img src="https://images.pexels.com/photos/12303221/pexels-photo-12303221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-[70%] h-[500px]"/>
        </div>
      </div>
      <FormDetails />

      <div
        className="relative w-full h-[400px] mb-[30px] flex items-center justify-center bg-cover bg-center bg-[url('/public/image6.png')]"
      >
        
        <div className="absolute bottom-16">
         <button className=" text-[13px] mb-[31px] bg-[#F2C1A9] h-[68px] w-[163px] rounded-[31px]">
          <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              BOOK NOW
            </NavLink>
          </button>
        </div>
      </div>
      <div className="text-[30px] font-title w-screen h-[400px] flex items-center justify-center flex-col mb-[0px]">
        <i>@ABCDSALON</i>
        <div className="w-[153vh] h-[200px] flex gap-[20px] mt-[10px]">
        <ReactPlayer
          url="https://www.youtube.com/"
          controls
          className="react-player"
          width="200px"
          height="200px"
        />
        <ReactPlayer
          url="https://www.youtube.com/"
          controls
          className="react-player"
          width="200px"
          height="200px"
        />
        <ReactPlayer
          url="https://www.youtube.com/"
          controls
          className="react-player"
          width="200px"
          height="200px"
        />
        <ReactPlayer
          url="https://www.youtube.com/"
          controls
          className="react-player"
          width="200px"
          height="200px"
        />
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default Career;
