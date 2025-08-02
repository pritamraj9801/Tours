import { getTourCategories } from "../DatabaseSchema/dbSchema";
const Services = () => {
  const tourCategories = getTourCategories();
  return (
    <div>
      {tourCategories.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};
export default Services;
