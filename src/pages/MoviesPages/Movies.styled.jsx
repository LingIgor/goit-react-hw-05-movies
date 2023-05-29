import styled from 'styled-components';

export const Input = styled.input`
  width: 700px;
  height: 50px;
  border-radius: 10px;
  border: 4px solid black;
  font-size: 25px;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  align-content: stretch;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 4px solid;
  font-size: 20px;
  margin-top: 15px;

  &:hover {
    color: blue;
    border: 1px solid black;
    background: grey;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
