import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.header`
  background-color: #141313;
  height: 70px;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 200px;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 30px;
  padding: 5px;

  &.active {
    color: green;
  }

  &:hover,
  &:focus {
    color: black;
    border: 1px solid white;
    background: white;
    border-radius: 10%;
  }
`;
