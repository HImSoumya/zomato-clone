/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Filters = ({ getRating }) => {
  const [btnState, setBtnState] = useState(false);
  const handleRating = () => {
    if (!btnState) {
      const newRating = 4;
      getRating(newRating,btnState);
    }
    setBtnState(!btnState);
  };
  return (
    <div className="w-full   h-[100px] flex justify-start gap-3 items-center px-12">
      <button className="flex text-[11px] justify-center items-center px-2 py-2 md:text-[16px] border-[1px] rounded-md text-gray-400 gap-1">
        <CiSliderHorizontal />
        Filters
      </button>
      <button
        onClick={handleRating}
        className={`flex text-[11px] justify-center items-center px-2 py-2 md:text-[16px] border-[1px] rounded-md text-gray-400 gap-1 ${
          btnState ? "bg-[#EF4F5F] text-white" : ""
        }`}
      >
        Rating: 4.0 +{btnState?<IoIosClose className="text-white text-[25px]"/>:null}
      </button>
      <button className="flex text-[11px] justify-center items-center px-2 py-2 md:text-[16px] border-[1px] rounded-md text-gray-400 gap-1">
        Pure Veg
      </button>
      <button className="flex text-[11px] justify-center items-center px-2 py-2 md:text-[16px] border-[1px] rounded-md text-gray-400 gap-1">
        Cuisines
        <FaAngleDown />
      </button>
    </div>
  );
};

export default Filters;
