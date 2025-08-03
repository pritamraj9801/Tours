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
      <div id="welcomeSection">
        <div className="welcomeSectionBox">
          <h1 className="text-white">
            Discover New Zealand with Private Tours Tailored Just for You
          </h1>
          <h4 className="text-white">
            Specializing in exclusive Private Tours with customised itineraries,
            design to deliver unforgettable experiences for families and groups
            of friends, ensuring personalized adventures tailored to your needs
          </h4>
          <button type="button">Book Now</button>
        </div>
      </div>
      <div id="aboutSection" className="mt-2">
        <div className="aboutImage">
          <img
            src="./images/Designs/welcomeBg.jpg"
            alt="not found"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
        <div className="aboutDescription">
          <h3>About us</h3>
          <h2>
            Adventure on Your Terms – Any Weather, Any Time-We’re Totally
            Flexible
          </h2>
          <p>
            Welcome to Kiwi Adventures Tour & Travel, where adventure meets
            exceptional service! Founded with a passion for exploration and a
            deep love for travel, we specialize in creating unforgettable
            journeys. From exotic destinations to hidden gems, our expert team
            is dedicated to curating personalized itineraries that cater to solo
            travelers, families, couples, and groups alike. At Kiwi Adventures,
            we believe in more than just traveling. Our commitment to
            excellence, attention to detail, and local expertise ensure that
            every trip is seamless, safe, and filled with wonder.
          </p>
          <div>
            <img
              src="./images/Designs/welcomeBg.jpg"
              alt="not found"
              style={{ width: "100px", height: "100px" }}
            />
            <img
              src="./images/Designs/welcomeBg.jpg"
              alt="not found"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <button type="button">Learn More</button>
        </div>
      </div>
      <div id="tourLocationsContainer" className="mt-2">
        <h3 className="text-center">Tour Location</h3>
        <h1 className="text-center">Explore Our Travel Picks</h1>
        <div id="tourLocations">
          {tourLocations.map((location, index) => (
            <div key={index} className="tourLocation">
              <img
                src={location.imageURL}
                alt="Location"
                className="locationImage"
              />
              <h3>{location.name}</h3>
              <p>{location.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="packagesContainer" className="mt-2">
        <h3 className="text-center">Packages</h3>
        <h1 className="text-center">Perfect Private Day Tour Packages</h1>
        <div id="packages">
          {packages.map((pkg, index) => (
            <div key={index} className="package">
              <img src={pkg.imageURL} alt="Package" className="packageImage" />
              <h3>{pkg.name}</h3>
              <p>Price: ${pkg.price.toFixed(2)}</p>
              <p>{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="whyUsSection" className="mt-2">
        <h3 className="text-center">Why Choose Us</h3>
        <h1 className="text-center">Your Perfect Travel Partner</h1>
        <h3 className="text-center">
          Experience New Zealand like never before with our expert guidance,
          personalized service, and unmatched local knowledge.
        </h3>
        <div id="whyUsContainer">
          <div className="whyUsBox">
            <h2>Expert Local Guides</h2>
            <h4>Our passionate local guides share insider knowledge and hidden gems that only locals know, making your journey truly authentic and memorable. We offer tour guides fluent in German, French, Japanese, English, and Hindi to ensure a comfortable and personalized experience for every traveler.</h4>
          </div>
          <div  className="whyUsBox">
            <h2>Personalized Experiences</h2>
            <h4>Every tour is tailored to your interests and preferences. We create unique itineraries that match your travel style and dreams perfectly.</h4>
          </div>
          <div  className="whyUsBox">
            <h2>Best Value Guarantee</h2>
            <h4>Premium experiences at competitive prices. We ensure you get the best value for your investment with transparent pricing and no hidden costs.</h4>
          </div>
          <div  className="whyUsBox">
            <h2>24/7 Support</h2>
            <h4>Round-the-clock assistance throughout your journey. Our dedicated support team is always ready to help, ensuring peace of mind during your travels.</h4>
          </div>
          <div  className="whyUsBox">
            <h2>Safety First</h2>
            <h4>Your safety is our top priority. All our tours follow strict safety protocols with fully insured vehicles and certified professional drivers.</h4>
          </div>
          <div  className="whyUsBox">
            <h2>Eco-Friendly Tours</h2>
            <h4>Sustainable tourism that respects New Zealand's pristine environment. We're committed to preserving the natural beauty for future generations.</h4>
          </div>
        </div>
      </div>
       <div id="testimonialsContainer" className="mt-2">
        <h3 className="text-center">Testimonials</h3>
        <h1 className="text-center">Our Happy Travelers</h1>
        <div id="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img
                src={testimonial.imageURL}
                alt="Testimonial"
                className="testimonialImage"
              />
              <h3>{testimonial.author}</h3>
              <p>{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
