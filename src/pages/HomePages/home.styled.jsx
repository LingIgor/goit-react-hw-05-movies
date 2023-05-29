import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
}
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Linkser = styled(Link)`
  font-weight: 600;
  color: black;
  text-decoration: none;
  font-size: 25px;
  padding: 5px;
  display: inline-block;

  &:active {
    color: green;
  }

  &:hover,
  &:focus {
    color: blue;
    border: 1px solid black;
    background: grey;
  }
`;
