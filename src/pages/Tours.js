import { getTours } from "../DatabaseSchema/dbSchema";
const Tours = () => {
  return <div id="toursContainer" className="mt-4">
    {getTours().map((tour, index) => (<div className="tour" key={index}>
      <img src={tour.imageURL} alt="Tour" className="tourImage"/>
      <h3>{tour.name}</h3>
      <p>{tour.description}</p>
      <p>Price: ${tour.price.toFixed(2)}</p>
    </div>))}
  </div>;
};
export default Tours;