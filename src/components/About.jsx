import React, {useState,  useEffect, useRef } from "react";
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';
import ReactPlayer from "react-player";
import "./About.css"; 

const About = () => {
  const soloTeamRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.squarespace-cdn.com/content/v1/61d75585328c965518c61fdc/a88a4ec5-1d34-4879-a802-cdda3db7004c/About+Page-+Updated+Elizabeth+Lounge+Shot.jpg?format=1000w",
    "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
    );

    if (soloTeamRef.current) {
      observer.observe(soloTeamRef.current);
    }

    return () => {
      if (soloTeamRef.current) {
        observer.unobserve(soloTeamRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div >
      <div className="h-[90vh] bg-[#EDECE7] flex justify-center border-b-2 border-black" id="about">
        <div className="w-[40%] mt-[40px] ml-[10px]">
          <p className="text-[16px] text-[#87A287] font-semibold font-title">ABOUT US</p>
          <h2 className="text-[45px] mb-[-21px] font-title"><i>Everyone is unique.</i></h2>
          <h2 className="text-[45px] mb-[-21px] font-title"><i>Everyone is their</i></h2>
          <h2 className="text-[45px] mb-7 font-title"><i>own solo artist.</i></h2>
          <p className="text-[14px] font-title1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <button className="mt-6 text-[13px] bg-[#F2C1A9] h-[50px] w-[120px] rounded-[20px] font-title1">
            <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              BOOK NOW
            </NavLink>
          </button>
        </div>
        <div className="image-slider-container w-[40%] mt-[40px] overflow-hidden relative">
        <div
          className=".image-slider"
          style={{
            display: 'flex',
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="slider-image w-full" 
            />
          ))}
        </div>
      </div>
      </div>

      <div className="flex flex-col items-center justify-center py-16 fade-in" ref={soloTeamRef}>
        <h2 className="text-gray-700 text-lg font-semibold mb-2 tracking-widest font-title">
          THE SOLO TEAM
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mb-8 font-title1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo
          assumenda ab voluptates nobis placeat in maiores quidem, expedita
          reprehenderit labore, necessitatibus itaque a laborum, obcaecati atque
          sapiente tempore dicta voluptatum quos nesciunt ipsam nihil pariatur
          officia. Voluptates alias eaque doloremque voluptate praesentium. Fuga
          nisi pariatur eveniet, blanditiis natus molestiae. Accusantium dolore
          eum itaque, facere veritatis alias voluptatum eos.
        </p>
        <div className="flex gap-4 mt-[20px]">
          <button className="px-6 py-2 border-2 font-title border-green-900 text-green-900 font-semibold rounded-full hover:bg-green-900 hover:text-white transition duration-300">
          <NavLink
              to="/ourteamone"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              PLACEONE TEAM
            </NavLink>
          </button>
          <button className="px-6 py-2 border-2 font-title border-green-900 text-green-900 font-semibold rounded-full hover:bg-green-900 hover:text-white transition duration-300">
          <NavLink
              to="/ourteamtwo"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              PLACETWO TEAM
            </NavLink>
          </button>
        </div>
      </div>

      <div className="py-8 px-4 md:px-16 lg:px-32 mx-auto max-w-6xl mt-[30px]">
        <h2 className="text-4xl font-title mb-6 text-center flex ">
          <i>Our Services</i>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl  mb-2 font-title">Barbering</h3>
            <p className="text-sm font-title1">
              Straight Razor Shave, Cut & Groom, Clipper Cut, Neck Clean Up,
              Beard Clean Up, Beard Detailing, Cut & Groom / Beard Trim Series
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-title mb-2 ">Waxing</h3>
            <p className="text-sm font-title">
              Lip, Chin, Sideburn, Nose, Ear, Brow, Under Arm, Forearm, Full
              Arm, Chest or Abdomen, Back, Lower Leg, Full Leg, Bikini, Thigh,
              Brazilian, French Bikini
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-title mb-2">Face</h3>
            <p className="text-sm font-title1">
              Brow Shaping, Brow Tinting, Lash Lift, Lash Extensions, Lash
              Extension Touch Up, Mascara Lash Package, Natural Lash Package
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-title mb-2">Weddings</h3>
            <p className="text-sm font-title1">
              Bridal Style / Trial, Blow Dry Set, Upstyle, Curl Set, Flower Girl
              Style, Bridal Makeup / Trial, Full-Face Makeup, Added Curls, False
              Lashes
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-title mb-2">Treatments</h3>
            <p className="text-sm font-title1">
              Kerastase Treatment, K18 Mask, Bond Builder Mask, Brazilian
              Blowout, Keratin Complex Treatment, Relaxer, Perm
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-title mb-2">Spray Tanning</h3>
            <p className="text-sm font-title1">
              Glo Up by Solo, Single Sessions, 3 & 5 Session Packages, Custom,
              dry-quick formulation leaves no sticky residue or mess
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-title mb-2">Hair</h3>
            <p className="text-sm font-title1">
              Cut & Style, Bang Trim, Blow Dry, Curl Set / Upstyle, Express
              Style, Hair Extensions / Tape, Tab & Sew-In, K-Top & I-Tip Braids
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-title mb-2">Color</h3>
            <p className="text-sm font-title1">
              Single Process Color, Lightening, Foliage, Balayage, SPC &
              Partial, Dimensional Color, Corrective Color
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-sm font-semibold border-2 border-[#3D5B5C] text-[#3D5B5C] px-4 py-2 rounded-full font-title hover:bg-[#3D5B5C] hover:text-white transition">
          <li><NavLink
              to="/services"
            >
              VIEW SERVICES
            </NavLink>
            </li>
          </button>
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

export default About;
