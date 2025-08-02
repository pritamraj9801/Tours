import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
      <Link to="/packages" style={{ margin: '0 10px' }}>Packages</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
      <Link to="/tours" style={{ margin: '0 10px' }}>Tours</Link>
    </nav>
  );
};

export default Header;
