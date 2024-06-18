import { useState, useEffect } from "react";
import opt1 from "../assets/Img/opt1.png";
import opt2 from "../assets/Img/opt2.png";
import opt3 from "../assets/Img/opt3.png";
import { Link, useLocation } from "react-router-dom";

const OptionTab = () => {
  const optionsTap = [
    {
      id: 1,
      img: opt1,
      path: "/dining-out",
      text: "Dining Out",
    },
    {
      id: 2,
      img: opt2,
      path: "/order-online",
      text: "Delivery",
    },
    {
      id: 3,
      img: opt3,
      path: "/drinks-nightlife",
      text: "Nightlife",
    },
  ];

  const [activeTab, setActiveTab] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const handleActiveTab = (currentTab) => {
    setActiveTab(currentTab);
    console.log(currentTab);
  };

  return (
    <div className="w-full overflow-auto  flex px-12 gap-12 py-3">
      {optionsTap.map((option) => {
        return (
          <Link
            key={option.id}
            to={option.path}
            onClick={() => handleActiveTab(option.path)}
            className={`flex items-center gap-3 cursor-pointer ${
              activeTab === option.path ? "border-b-2  border-[#EF4F5F]" : ""
            }`}
          >
            <div className={`flex items-center gap-3 pb-3  cursor-pointer`}>
              <div className="h-[70px] w-[70px] bg-[#E5F3F3] flex justify-center items-center rounded-full">
                <img
                  className={`w-[35px] grayscale ${
                    activeTab === option.path ? "grayscale-0" : "grayscale"
                  }`}
                  src={option.img}
                  alt=""
                />
              </div>
              <h1 className="text-[#EF4F5F] text-xl ">{option.text}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default OptionTab;
