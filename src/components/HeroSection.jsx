import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[480px]">
      <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg')] bg-cover bg-no-repeat"></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 w-full h-full">
        {/* <div>
          <Header getStateFromHeader={getStateFromHeader} />
        </div> */}
        <div className="w-full h-full flex justify-center items-center mb-[50px]">
          <div>
            <div className="heading text-center text-white">
              <h1 className="font-bold text-[3rem] md:text-[4rem]">zomato</h1>
              <p className="text-[1.2rem] md:text-[2rem]">
                Discover the best food & drinks in Bhubaneswar
              </p>
            </div>
            <div className="rounded-xl overflow-hidden w-full flex justify-center items-center">
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
