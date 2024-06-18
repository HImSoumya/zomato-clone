import { IoMdArrowDropright } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Collections = ({ img, heading, subheading }) => {
  return (
    <div
      className={` inset-0 w-[300px] h-[350px]  relative bg-cover bg-no-repeat rounded-md`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="text text-white absolute left-0 bottom-0 p-2">
        <h1>{heading}</h1>
        <p className="inline-flex justify-center items-center">
          {subheading}
          <IoMdArrowDropright style={{ fontSize: "24px" }} />
        </p>
      </div>
    </div>
  );
};

export default Collections;
