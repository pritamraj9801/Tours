import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>Tour</div>
      <div id="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/tours">Tours</Link>
      </div>
    </nav>
  );
};

export default Header;
