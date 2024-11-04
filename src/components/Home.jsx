import React from "react";
import Footer from "./Footer";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import ReactPlayer from "react-player";

const Home = () => {
  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to "About Our Salon" section
  const scrollToAbout = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };


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
      { threshold: 0.1 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);
  return (
    <div>
      <div className="h-[120vh] bg-[url(/public/image1.avif)] bg-cover relative" ref={heroSectionRef}>
        <div className="bg-[#91A88E] w-[50%] h-full absolute"></div>
        <div className="w-[80%] h-[90vh] absolute m-[90px] flex flex-row ">
          <p className="text-[70px] ml-[40px] absolute z-10 font-title">
            Premier <p className="mt-[-40px]"> Chicago Salon</p>
            <p className="text-[15px] mt-5 font-title2">
              Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit.
              Commodi maxime, doloribus corporis voluptatem <br />
              ut architecto magni iste voluptate laudantium suscipit
              <br /> odio ex numquam recusandae ducimus et vitae <br /> repellat
              alias qui temporibus eveniet dolores <br />
              aliquam autem perferendis! Temporibus ullam <br />
              cupiditate pariatur placeat.
            </p>
            <button className="mt-6 text-[13px] bg-[#F2C1A9] h-[50px] w-[120px] rounded-[20px] font-title2">
          <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              BOOK NOW
            </NavLink>
          </button>
          </p>
          <div className="h-[500px] w-[60%] bg-[url(https://images.squarespace-cdn.com/content/v1/61d75585328c965518c61fdc/b5368031-2f24-452b-8539-e7d10bedf522/Home+Page-+Option+2.jpg?format=1500w)] bg-cover absolute ml-[450px] z-0"></div>
        </div>
      </div>
      <div className="bg-[#F2EDE8] w-screen mt-[-30px] mb-11">
        <div className="py-8 px-4 md:px-16 lg:px-32 mx-auto max-w-6xl mt-[30px] bg-[#F2EDE8] ">
          <h2 className="text-4xl  mb-6 text-center flex font-title">
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
              <h3 className="text-2xl  mb-2 font-title">Waxing</h3>
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
              <h3 className="text-2xl  mb-2 font-title">Weddings</h3>
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
              <h3 className="text-2xl mb-2 font-title">Spray Tanning</h3>
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
              <p className="text-sm font-title">
                Single Process Color, Lightening, Foliage, Balayage, SPC &
                Partial, Dimensional Color, Corrective Color
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="text-sm font-title border-2 border-[#3D5B5C] text-[#3D5B5C] px-4 py-2 rounded-full hover:bg-[#3D5B5C] hover:text-white transition">
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
               View Services
            </NavLink>
            </button>
            
          </div>
          <div className="flex justify-end">
            <p className="text-4xl mr-[35px] mt-[180px] font-title"><i>Our Locations</i></p>
            <img
              src="https://images.squarespace-cdn.com/content/v1/61d75585328c965518c61fdc/88324d9e-8911-4064-8ae7-c33ef42897f3/hair-style-illustration-solo-salon.png?format=750w"
              alt=""
              srcset=""
              className="h-[250px] w-[300px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto mb-[80px]">
            <div className="mb-4">
              {/* Replace with actual image */}
              <img
                src="https://via.placeholder.com/300x200"
                alt="Solo Salon Elizabeth"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-xl font-title text-center">
              ABCD Salon XYZ-CITY
            </h2>
            <p className="text-center text-gray-600 mb-2 font-title1">
              114 N. XYZ-CITY St. QWERTY, IL 60607
            </p>

            <hr className="my-4" />

            <div className="text-center font-title1">
              <p>Monday | Open for Classes</p>
              <p>Tuesday - Thursday | 9:00 AM - 9:00 PM</p>
              <p>Friday | 10:00 AM - 6:00 PM</p>
              <p>Saturday | 9:00 AM - 5:00 PM</p>
              <p>Sunday | Closed</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto mb-[80px]">
            <div className="mb-4">
              {/* Replace with actual image */}
              <img
                src="https://via.placeholder.com/300x200"
                alt="Solo Salon Elizabeth"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-xl font-title text-center">
              ABCD Salon XYZ-CITY
            </h2>
            <p className="text-center text-gray-600 mb-2 font-title1">
              114 N. XYZ-CITY St. QWERTY, IL 60607
            </p>

            <hr className="my-4" />

            <div className="text-center font-title1">
              <p>Monday | Open for Classes</p>
              <p>Tuesday - Thursday | 9:00 AM - 9:00 PM</p>
              <p>Friday | 10:00 AM - 6:00 PM</p>
              <p>Saturday | 9:00 AM - 5:00 PM</p>
              <p>Sunday | Closed</p>
            </div>
          </div>
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
      <div className="relative w-screen h-[95vh] mt-[40px] flex">
        <div className="h-full w-[60%] bg-[#91A88E] absolute z-0 p-[100px]">
          <p className="text-[50px] font-title">About Our Salon</p>
          <p className="font-title1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            consectetur cumque pariatur reiciendis? Autem corrupti voluptas
            debitis, repudiandae optio reprehenderit labore ex magnam, at, enim
            eligendi nemo eos ipsam similique quam soluta! Explicabo voluptates
            eos blanditiis minus, sed reprehenderit reiciendis!
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
        <img
          src="https://images.squarespace-cdn.com/content/v1/61d75585328c965518c61fdc/8d425d37-7c3c-4018-aaa6-616f74d46e5e/homepage-option-1.png?format=1000w"
          alt=""
          className="z-10 h-[350px] w-[600px] ml-[42%] mt-[60px] absolute"
        />
        
      </div>
      {showScrollButton && (
        <button
          onClick={scrollToAbout}
          className="fixed bottom-4 left-4 bg-[#F2C1A9] text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <NavLink
              to="/About"
              className="{({ isActive }) => (isActive ? 'text-[#F2C1A9] ' : '')} hover:bg-blue-700"
            >
              Go To About Section
            </NavLink>
        </button>
      )}
      <Footer />
      
    </div>
  );
};

export default Home;
