import { useState } from "react";
import ItemList from "./ItemList";

const CategoryItems = ({ category }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div onClick={handleClick} className="cursor-pointer my-8">
      <span className="font-bold text-md flex justify-between">
        {category.title} ({category.itemCards?.length})<span>⌄</span>
      </span>
      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default CategoryItems;
