import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/apply">Apply</Link>
      <Link to="/Step">Step</Link>
    </nav>
  );
};

export default Navigation;
