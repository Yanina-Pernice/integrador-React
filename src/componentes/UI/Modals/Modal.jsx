import React from "react";
import {
  ModalConfirmation,
  ModalConfirmationContent,
  StyledButton,
} from "./ModalStyles";

const Modal = ({ isOpen, message, onYesClick, onNoClick, onCloseClick }) => {
  return (
    <>
      {isOpen && (
        <ModalConfirmation>
          <ModalConfirmationContent>
            <p>{message}</p>

            <div className="contenedor-btns">

              {(!onCloseClick) ? (
                <>
                  <StyledButton onClick={onYesClick}>SÍ</StyledButton>
                  <StyledButton onClick={onNoClick}>NO</StyledButton>
                </>
              ) : (
                <>
                  <StyledButton onClick={onCloseClick}>CERRAR</StyledButton>
                </>
              )}
            </div>
          </ModalConfirmationContent>
        </ModalConfirmation>
      )}
    </>
  );
};

export default Modal;
