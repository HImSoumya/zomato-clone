import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Card = ({ path, img, heading, subheading }) => {
  return (
    <Link to={path}>
      <div className="card border-[1px] w-[400px] h-[280px] mt-4 rounded-[20px] overflow-hidden cursor-pointer transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105 duration-300 ">
        <div className="img">
          <img src={img} alt="..." className="h-[194px] w-full object-cover " />
        </div>
        <div className="text p-2 px-2">
          <h1 className="font-normal text-xl">{heading}</h1>
          <p className="text-gray-600 text-[18px]">{subheading}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
