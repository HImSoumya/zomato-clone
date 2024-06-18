import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Filters from "../../components/Filters";
import Header2 from "../../components/Header2";
import OptionTab from "../../components/OptionTab";
import RestaurantCard from "../../components/RestaurantCard";
import TopLoadingBar from "../../components/TopLoadingBar";
import axios from "axios";



const OrderOnline = () => {
  const [originalRestaurantData, setOriginalRestaurantData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

  const getRestaurantData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/restaurants");
      setRestaurantData(res.data);
      setOriginalRestaurantData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRating = (rating, btnState) => {
    if (!btnState) {
      const filteredData = originalRestaurantData.filter((data) => {
        return data.rating >= rating;
      });
      setRestaurantData(filteredData);
    } else {
      setRestaurantData(originalRestaurantData);
    }
  };

  return (
    <div>
      <TopLoadingBar />
      <div>
        <Header2 />
        <div className="px-12">
          <Breadcrumbs />
        </div>
        <div>
          <OptionTab />
          <hr />
        </div>
        <div>
          <Filters getRating={getRating} />
        </div>
        <div className="px-12   grid grid-cols-1 md:grid-cols-3 gap-4">
          {restaurantData.map((data) => {
            return (
              <RestaurantCard
                key={data.id}
                name={data.restaurant_name}
                type={data.restaurant_type}
                rating={data.rating}
                offers={data.offers}
                location={data.location}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
