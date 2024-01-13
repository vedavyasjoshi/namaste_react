import ItemList from "./ItemList";

const CategoryItems = ({ category, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div className="cursor-pointer my-8">
      <span onClick={handleClick} className="font-bold text-md flex justify-between">
        {category.title} ({category.itemCards?.length})<span>⌄</span>
      </span>
      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

export default CategoryItems;
