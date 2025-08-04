import { getTourCategories } from "../DatabaseSchema/dbSchema";
const Services = () => {
  const tourCategories = getTourCategories();
  return (
    <div id="tourCategoriesContainer">
      {tourCategories.map((category, index) => (
        <div key={index} className="tourCategory p-1">
          <img src={category.imageURL} alt="not found" className="tourCategoryImg"/>
          <h3>{category.name}</h3>
          <h4>{category.description}</h4>
        </div>
      ))}
    </div>
  );
};
export default Services;
