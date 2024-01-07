import Shimmer from "../Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import RestaurantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const listOfRestaurants = useRestaurantList();
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(
    () => setFilteredListOfRestaurants(listOfRestaurants),
    [listOfRestaurants]
  );

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search ">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(mylist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container ">
        {filteredListOfRestaurants.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
