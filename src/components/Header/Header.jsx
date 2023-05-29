import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </>
  );
};

export default Header;
