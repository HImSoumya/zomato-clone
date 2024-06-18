/* eslint-disable react/prop-types */
import img from "../assets/Img/img1.jpg";

const RestaurantCard = ({ name, type, rating, offers, location }) => {
  return (
    <div className="w-[380px] h-auto p-2 hover:rounded-md hover:border-[1px] hover:shadow-lg">
      <div className="relative">
        <img src={img} className=" rounded-md" alt="" />
        <h1 className="bg-blue-600 text-white w-auto text-sm rounded-r-md px-2 absolute bottom-2">
          {offers}
        </h1>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-lg">
            <b>{name}</b>
          </h1>
          <span className=" bg-green-600 text-white px-3 rounded-md text-sm">
            {rating}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-gray-500 text-sm">{type}</h1>
          <h1 className="text-gray-500 text-sm">{location}</h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
