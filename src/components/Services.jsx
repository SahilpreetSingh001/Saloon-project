import React from "react";
import Footer from "./Footer";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { NavLink} from "react-router-dom";
const Services = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }, []); 

  return (
    <div id="service">
      <div className="bg-[#91A78F] w-screen mt-[-30px] mb-11">
        <div className="py-8 px-4 md:px-16 lg:px-32 mx-auto max-w-6xl mt-[30px] bg-[#91A78F] ">
          <h2 className="text-4xl font-title mb-6 text-center flex mt-[40px]">
            <i>Our Services</i>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-title mb-2">Barbering</h3>
              <p className="text-sm font-title1">
                Straight Razor Shave, Cut & Groom, Clipper Cut, Neck Clean Up,
                Beard Clean Up, Beard Detailing, Cut & Groom / Beard Trim Series
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-title mb-2">Waxing</h3>
              <p className="text-sm font-title1">
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
                Bridal Style / Trial, Blow Dry Set, Upstyle, Curl Set, Flower
                Girl Style, Bridal Makeup / Trial, Full-Face Makeup, Added
                Curls, False Lashes
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
                Style, Hair Extensions / Tape, Tab & Sew-In, K-Top & I-Tip
                Braids
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
            <button className="mt-6 text-[13px] bg-[#F2C1A9] h-[50px] w-[120px] rounded-[20px] font-title1">
            <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              BOOK
            </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[90vh] bg-[#EDECE7] flex justify-center border-b-2 border-black">
        <div className="w-[40%] mt-[40px] ml-[10px]">
          <p className="text-[16px] text-[#87A287] font-title"><i>SERVICES</i></p>
          <h2 className="text-[45px] mb-[-21px] font-title">Achieve Your </h2>
          <h2 className="text-[45px] mb-[-21px] font-title">Natural Glam.</h2>
          <p className="text-[14px] mt-[30px] font-title1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, <br /> recusandae. elit. Ullam, recusandae.
          </p>
          <p className="text-[14px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, <br /> recusandae. elit. Ullam, recusandae.
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
        <div className="w-[40%] mt-[40px]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/61d75585328c965518c61fdc/90c70239-ea34-49f4-8ecc-c5fe94335a30/Service+Page-+Updated+Washington+Shot+Next+to+acheive+your+natrual+glam.jpg?format=1000w"
            alt="About Us"
          />
        </div>
      </div>

      <div className="relative w-screen h-[95vh] mt-[40px] flex" >
        <div className="h-full w-[60%] bg-[#DAD7CE] absolute z-0 p-[100px]">
          <p className="text-[50px] font-title"><i>Booking Reminders</i></p>
          <p className="font-title1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            consectetur cumque pariatur reiciendis? Autem corrupti voluptas
            debitis, repudiandae optio reprehenderit labore ex magnam, at, enim
            eligendi nemo eos ipsam similique quam soluta! Explicabo voluptates
            eos blanditiis minus, sed reprehenderit reiciendis!
          </p>
          <button className="mt-6 text-[13px] bg-[#F2C1A9] h-[50px] w-[120px] rounded-[20px]">
          <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              BOOK NOW
            </NavLink>
          </button>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/61d75585328c965518c61fdc/4ff5e38d-0352-45cf-b38a-67ab3289d18e/solo-salon-chicago-hair-stylist-cut-style-haircut-interior-illustration.png?format=1000w"
          alt=""
          className="z-10 h-[350px] w-[600px] ml-[42%] mt-[60px] absolute"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-16" >
        <h2 className="text-gray-700 text-lg font-title mb-2 tracking-widest ">
        About Our Products
        </h2>
        <p className="text-center font-title1 text-gray-700 max-w-2xl mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quo
          assumenda ab voluptates nobis placeat in maiores quidem, expedita
          reprehenderit labore, necessitatibus itaque a laborum, obcaecati atque
          sapiente tempore dicta voluptatum quos nesciunt ipsam nihil pariatur
          officia. Voluptates alias eaque doloremque voluptate praesentium. Fuga
          nisi pariatur eveniet, blanditiis natus molestiae. Accusantium dolore
          eum itaque, facere veritatis alias voluptatum eos.
        </p>
        <div className="flex gap-4 mt-[20px]">
          <button className="px-6 py-2 border-2 border-green-900 text-green-900 font-title rounded-full hover:bg-green-900 hover:text-white transition duration-300">
            SHOP PRODUCT
          </button>
          <button className="px-6 py-2 border-2 border-green-900 text-green-900 font-title rounded-full hover:bg-green-900 hover:text-white transition duration-300">
          <NavLink
              to="/team"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              Our Team
            </NavLink>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src="https://images.squarespace-cdn.com/content/v1/61d75585328c965518c61fdc/b3e8a4dd-5628-4349-b1a2-63260a88f805/Services+Page-+Under+Products_+Gift+Cards.jpg?format=1500w" alt="" className="h-[80vh] w-[50vw]"/>
      </div>
      
      <div
        className="relative w-full h-[400px] mt-[40px] mb-[0px] flex items-center justify-center bg-cover bg-center bg-[url('/public/image6.png')]"
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

export default Services;
