import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Back = styled(Link)`
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  color: green;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 40px;
`;

export const Wrapper = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
}

`;
