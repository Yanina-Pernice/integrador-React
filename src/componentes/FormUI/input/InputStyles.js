import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  margin: .5rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

`;

export const InputStyled = styled.input`
  
  outline: none;
  color: #212121;
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif; 


`;

export const ErrorMsjStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
