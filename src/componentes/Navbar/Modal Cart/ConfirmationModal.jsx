import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// MODAL CONFIRMATION

const ModalConfirmation = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eaf6f6;
  border-radius: 9px;
  z-index: 1000;
  max-width: 50%;

  @media (max-width: 578px) {
    width: 90%; 
    max-width: 90%; 

  }

`
const ModalConfirmationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2.5rem;

  & p {
    color: #11999e;
  }

  & button {
    margin: .5rem;

  }

  .contenedor-btns{
    display: flex;
  }

`

const StyledButton = styled.button`
  background-color: #15b7b9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  
  &:hover {
    background-color: #10ddc2;
  }
`;

const ConfirmationModal = ({ isOpen, confirmHandler, cancelHandler }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalConfirmation>
      <ModalConfirmationContent>
        <p>¿Estás seguro de que deseas vaciar el carrito?</p>
        <div className="contenedor-btns">
          <StyledButton  onClick={confirmHandler}>SÍ</StyledButton>
          <StyledButton onClick={cancelHandler}>NO</StyledButton>
        </div>
        
      </ModalConfirmationContent>
    </ModalConfirmation>
  );
};

export default ConfirmationModal;
