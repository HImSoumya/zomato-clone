import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <div className="w-full h-[80px]  px-12 flex justify-between items-center">
      <div className="flex justify-center items-center gap-4  w-[70%] ">
        <Link to="/">
          <img
            className="w-[150px]"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
          />
        </Link>
        <div className="rounded-xl border-[1px] shadow-lg overflow-hidden w-full flex justify-center items-center">
          <div className="w-[30%] relative">
            <FaLocationDot className="text-red-400 text-xl absolute top-1/2 left-3 transform -translate-y-1/2" />
            <select className="w-full p-3 pl-10 focus:outline-none">
              <option value="Bhubaneswar">Bhubaneswar</option>
              <option value="Baripada">Baripada</option>
            </select>
          </div>
          <div className="w-[70%] relative">
            <IoIosSearch className="text-gray-400  text-2xl absolute top-1/2 left-3 transform -translate-y-1/2" />
            <input
              className="w-full p-3 pl-10 focus:outline-none"
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
      </div>

      <div className="w-[30%]  flex justify-end items-center gap-4">
        <span className="text-gray-400 text-md cursor-pointer">Login</span>
        <span className="text-gray-400 text-md cursor-pointer">Sign up</span>
      </div>
    </div>
  );
};

export default Header2;
