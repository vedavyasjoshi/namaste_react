import Shimmer from "../Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import RestaurantCard, { withPromotedLabel } from "./RestuarantCard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const listOfRestaurants = useRestaurantList();
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUserName} = useContext(UserContext);

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
    <div>
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 bg-green-200 py-2 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {res.info.avgRating > 4.2 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
