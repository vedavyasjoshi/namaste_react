import CategoryItems from "./CategoryItems";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <span className="font-bold text-lg">{data.title}</span>
      {data.categories.map((category, ind) => {
        return <CategoryItems category={category} key={ind} />;
      })}
    </div>
  );
};

export default RestaurantCategory;
