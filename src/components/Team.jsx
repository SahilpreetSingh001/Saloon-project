import React from "react";
import Footer from "./Footer"
import ReactPlayer from "react-player";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Team = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }, []); 
  return (
    <div id="team">
      <div className="h-[90vh] bg-white flex justify-center border-b-2 border-black">
        <div className="w-[40%] mt-[80px] ml-[10px]">
          <p className="text-[20px] text-[#87A287] font-semibold  font-title1">TEAM</p>
          <h2 className="text-[45px] mb-[-21px] font-title">A Dedication To Their </h2>
          <h2 className="text-[45px] font-title">Craft.</h2>
          <p className="text-[14px] mb-[30px] font-title1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem{" "}
            <br /> quae culpa modi temporibus nostrum. Ipsam voluptate
            voluptatibus <br />
            aspernatur earum quo obcaecati consequatur reprehenderit. Odit{" "}
            <br />
            nostrum alias dolore sapiente libero esse officia dignissimos
            exercitationem laborum corporis, voluptatem quas eos illum expedita
            repellendus suscipit, aliquam quisquam qui nam cupiditate velit.
            Laborum, neque!
          </p>
          <button className="px-6 mr-[20px]  font-title py-2 border-2 border-green-900 text-green-900 font-semibold rounded-full hover:bg-green-900 hover:text-white transition duration-300">
          <NavLink
              to="/ourteamone"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              TEAM ONE
            </NavLink>
          </button>
          <button className="px-6 py-2 border-2 font-title border-green-900 text-green-900 font-semibold rounded-full hover:bg-green-900 hover:text-white transition duration-300">
          <NavLink
              to="/ourteamtwo"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              TEAM TWO
            </NavLink>
          </button>
        </div>
        <div className="w-[40%] mt-[40px]">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2442283445/display_1500/stock-photo-five-hairdressers-stylists-boys-and-girls-after-work-portrait-of-a-professional-barbershop-team-2442283445.jpg"
            alt="About Us"
          />
        </div>
      </div>
      <div className="bg-[#EDECE7] w-full h-[160vh] grid justify-center ">
            <p className="mt-[40px] text-[40px] ml-[40px] font-title"><i>Team One</i></p>
            <div className="flex gap-[30px] ml-[40px]  font-title1">
                <p className="text-[30px]" ><NavLink
              to="/ourteamone#name1"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name2"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name3"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name4"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            
            </div>
            <div className="flex gap-[30px] ml-[40px] font-title1">
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name5"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name6"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name7"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name8"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            </div>
            <div className="flex gap-[30px] ml-[40px] font-title1">
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name9"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name10"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
            <p className="text-[30px]" ><NavLink
              to="/ourteamone#name11"
              className="{({ isActive }) => (isActive ? 'text-[#de8b61] ' : '')} hover:text-[#F2C1A9]"
            >
              <img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" id="name1"/>
            </NavLink> Name</p>
                
            </div>
      </div>

      <div className="bg-white w-full h-[160vh] grid justify-center ">
            <p className="mt-[40px] text-[40px] ml-[40px] font-title"><i>Team Two</i></p>
            <div className="flex gap-[30px] ml-[40px] font-title1">
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
            </div>
            <div className="flex gap-[30px] ml-[40px] font-title1">
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
            </div>
            <div className="flex gap-[30px] ml-[40px] font-title1">
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                <p className="text-[30px]"><img className="h-[200px] w-[200px]" src="/image2.jpg" alt="" /> Name</p>
                
            </div>
      </div>
      <div
        className="relative w-full h-[400px] mt-[40px] mb-[30px] flex items-center justify-center bg-cover bg-center bg-[url('/public/image6.png')]"
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
      <Footer />
    </div>
  );
};

export default Team;
