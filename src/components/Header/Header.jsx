// import { NavLink } from 'react-router-dom';
import { Main, Nav, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <Main>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    </Main>
  );
};

export default Header;
