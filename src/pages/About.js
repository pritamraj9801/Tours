const About = () => {
  return (
    <div>
      <div id="aboutTitle">
        <h3 className="text-center">Kiwi Adventures Tour & Travel</h3>
        <h4 className="text-center">
          “We guarantee – Making your journey more interesting than advertised!”
        </h4>
      </div>
      <div id="aboutUsSection" className="mt-2">
        <div className="aboutUsSectionImage">
          <img
            src="./images/Designs/welcomeBg.jpg"
            alt="not found"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
        <div>
          <h2>Our Story</h2>
          <h3>
            With over 22 years of local expertise and 16+ years of curating
            exceptional travel experiences, we are a proudly New Zealand-owned
            tour company dedicated to delivering unforgettable journeys. Our
            deep-rooted knowledge of New Zealand’s landscapes and culture,
            combined with our passion for creating bespoke travel adventures,
            ensures every experience is unique and enriching. We are honored to
            collaborate with trusted partners from around the world, including
            Australia, the United States, Germany, Spain, France, India,
            Singapore, the Philippines, and Thailand. Together, we bring a
            global network of excellence to every aspect of your travel
            experience. Specializing in exclusive Private Tours with customised
            itineraries, design to deliver unforgettable experiences for
            families and groups of friends, ensuring personalized adventures
            tailored to your needs
          </h3>
          <h3>“We don't just show you places — we make you feel them.”</h3>
        </div>
      </div>
      <div id="tourCountersContainer" className="mt-2">
        <div className="tourCounterBox">
          <h2>250+</h2>
          <h3>Curated Tours</h3>
        </div>
        <div className="tourCounterBox">
          <h2>5k+</h2>
          <h3>Happy Travelers</h3>
        </div>
        <div className="tourCounterBox">
          <h2>22+</h2>
          <h3>Years Local Experience</h3>
        </div>
        <div className="tourCounterBox">
          <h2>16+</h2>
          <h3>Years in Tourism</h3>
        </div>
      </div>
      <div id="ourCoreValuesContainer" className="mt-2">
        <h2 className="text-center">Our Core Values</h2>
        <h3 className="text-center">
          We’re driven by purpose, guided by integrity, and inspired by the
          spirit of exploration.
        </h3>
        <div id="ourCoreValuesBox">
          <div className="coreValueBox">
            <h3>Authenticity</h3>
            <h4>Genuine local experiences that connect you deeply.</h4>
          </div>
          <div className="coreValueBox">
            <h3>Inclusivity</h3>
            <h4>Travel for all — regardless of age, background, or ability.</h4>
          </div>
          <div className="coreValueBox">
            <h3>Sustainability</h3>
            <h4>Preserving nature through conscious travel choices.</h4>
          </div>
          <div className="coreValueBox">
            <h3>Excellence</h3>
            <h4>Always delivering quality — no compromises.</h4>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center">Your Next Adventure Begins Now</h3>
        <h4 className="text-center">Don’t just travel. Explore deeper, connect stronger, and live freer with Kiwi Adventures.</h4>
        <div>
          <button type="button">Explore Tours</button>
          <button type="button">Talk To Expert</button>
        </div>
      </div>
    </div>
  );
};
export default About;
