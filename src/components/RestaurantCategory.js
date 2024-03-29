import { useState } from "react";
import CategoryItems from "./CategoryItems";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState("");

  const handleCollapse = (title) => {
    if (title === showItems) setShowItems("");
    else setShowItems(title);
  };
  
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <span className="font-bold text-lg">{data.title}</span>
      {data.categories.map((category) => {
        return (
          <CategoryItems
            category={category}
            key={category.title}
            showItems={showItems === category.title}
            setShowItems={() => handleCollapse(category.title)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantCategory;
