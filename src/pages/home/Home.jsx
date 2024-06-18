import Card from "../../components/Card";
import Collections from "../../components/Collections";
import HeroSection from "../../components/HeroSection";
import cardOptions from "../../data/optionsData";
import collectionsData from "../../data/collections";
import { IoMdArrowDropright } from "react-icons/io";
import { Fragment } from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Fragment>
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header />
      </div>
      <div className="relative">
        <HeroSection />
        <section>
          <div className="w-full h-auto mt-[40px] flex flex-col justify-center md:flex-row md:justify-evenly items-center px-8">
            {cardOptions.map((card) => {
              return (
                <Card
                  key={card.id}
                  path={card.path}
                  img={card.img}
                  heading={card.heading}
                  subheading={card.subheading}
                />
              );
            })}
          </div>
        </section>

        <section>
          <div className=" w-full mt-[80px] mb-[200px]">
            <div className="flex  justify-center items-center">
              <div className="w-[90%] ">
                <h1 className="text-2xl font-normal text-left">Collections</h1>
                <p className="">
                  Explore curated lists of top restaurants, cafes, pubs, and
                  bars in Bhubaneswar, based on trends{" "}
                  <span className="text-[#ee4f69] cursor-pointer inline-flex items-center ml-[60px]">
                    All collections in Bhubaneswar{" "}
                    <IoMdArrowDropright
                      style={{ fontSize: "24px", color: "#ee4f69" }}
                    />
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full h-auto flex flex-col items-center md:flex-row justify-center gap-2 mt-8">
              {collectionsData.map((data) => {
                return (
                  <Collections
                    key={data.id}
                    img={data.img}
                    heading={data.heading}
                    subheading={data.subheading}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
