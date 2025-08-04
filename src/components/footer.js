const Footer = () => {
  return (
    <footer className="mt-4">
      <div id="footerContainer">
        <div>
          <h1>Tour Adventures</h1>
          <p>
            At Tour Adventures, we specialize in crafting unforgettable journeys
            across New Zealand. From stunning landscapes to cultural adventures,
            our expert team ensures every trip is unique, seamless, and tailored
            just for you.
          </p>
          <h2>FOLLOW US</h2>
          <button>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <ul>
            <li>Private Tours</li>
            <li>Group Tours</li>
            <li>Custom Itineraries</li>
            <li>Adventure Travel</li>
            <li>Cultural Experiences</li>
          </ul>
        </div>
        <div>
          <h2>USEFUL LINKS</h2>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/tours">Tours</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>CONTACT US</h2>
          <p>152 Condell Avenue, Papanui, Christchurch</p>
          <p>+64 27 658 0080</p>
          <p>info@kiwiadventurestour.co.nz</p>
        </div>
      </div>
      <div>We Accept Payement</div>
      <div>
        <hr />
        <p className="text-center">© Kiwi Adventures Tour & Travel . All Rights Reserved.</p>
        <p className="text-center">Designed & Built by Pritam</p>
      </div>
    </footer>
  );
};
export default Footer;
