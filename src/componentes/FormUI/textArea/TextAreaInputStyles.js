import styled from 'styled-components';

export const TextAreaInputStyled = styled.textarea`
  width: 250px;
  height: 80px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-color: ${({ error }) => (error ? 'red' : 'none')};
  outline: none;
  resize: none;
  font-family: 'Montserrat', sans-serif;

`;

export const ErrorStyled = styled.span`
  padding-left: 5px;
  color: red;
`;