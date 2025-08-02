import {
  getTourLocations,
  getTestimonials,
  GetPackages,
} from "../DatabaseSchema/dbSchema";
const Home = () => {
  const tourLocations = getTourLocations();
  const testimonials = getTestimonials();
  const packages = GetPackages();
  return (
    <div>
      <div id="tourLocations">
        {tourLocations.map((location, index) => (
          <p key={index}>{location.name}</p>
        ))}
      </div>
      <div id="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <h3>{testimonial.author}</h3>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </div>
      <div id="packages">
        {packages.map((pkg, index) => (
          <div key={index} className="package">
            <h3>{pkg.name}</h3>
            <p>Price: ${pkg.price.toFixed(2)}</p>
            <p>{pkg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
