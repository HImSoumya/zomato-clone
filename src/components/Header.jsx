import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
 
const Header = ( ) => {
  const [nav, setNav] = useState(false); 
   
  
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className={`w-full   md:h-[60px] flex justify-between items-center px-4 bg-whiet text-white`}>
      <div>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US"
        >
          <h1 className="text-sm text-white flex gap-1 mt-1 cursor-pointer">
            <HiMiniDevicePhoneMobile
              style={{ fontSize: "15px", marginTop: "3px" }}
            />
            Get the App
          </h1>
        </a>
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer">
          <a to="home">Investor Relations</a>
        </li>
        <li className="px-4 cursor-pointer">
          <a to="home">New Restaurant</a>
        </li>
        <li className="px-4 cursor-pointer"  >
          <a to="home">Login</a>
        </li>
        <li className="px-4 cursor-pointer">
          <a to="home">Sign up</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-10 flex justify-end">
        {nav ? <FaTimes style={{ color: "black" }} /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-white text-black flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-3 text-xl">
          <a to="home">Investor Relation</a>
        </li>
        <li className="py-3 text-xl">
          <a to="about">New Restaurant</a>
        </li>
        <li className="py-3 text-xl"  >
          <a to="skills">Login</a>
        </li>
        <li className="py-3 text-xl">
          <a to="work">Sign up</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
