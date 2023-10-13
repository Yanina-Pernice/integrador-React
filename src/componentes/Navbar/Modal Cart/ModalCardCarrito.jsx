import React, { useState } from "react";
import { LiaPlusSquareSolid } from "react-icons/lia";
import { LiaMinusSquareSolid } from "react-icons/lia";

import Counter from "../../UI/Counter/Counter";
import Increase from "../../UI/Increase/Increase";

import { useDispatch } from "react-redux";
import {
  agregarProducto,
  removerProducto,
} from "../../../redux/cart/cartSlice";
import { GoTrash } from "react-icons/go";
import {
  ContainerCantidadStyled,
  ContainerProductosStyled,
  PrecioStyled,
  TextoContainerStyled,
  TituloCardStyled,
} from "./CarritoStyles";

import Modal from "../../UI/Modals/Modal";

const ModalCardCarrito = ({ cardImg, title, price, cantidad, id }) => {
  const dispatch = useDispatch();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleDecreaseCantidad = () => {
    
    if (cantidad === 1) {

      setShowConfirmationModal(true);

    } else {
      dispatch(removerProducto(id));

    }

  };

  const handleDeleteConfirmation = () => {
    dispatch(removerProducto(id));
  };


  return (
    <ContainerProductosStyled>
      <img src={cardImg} alt={title} />

      <TextoContainerStyled>
        <TituloCardStyled>{title}</TituloCardStyled>
        <PrecioStyled>{price}</PrecioStyled>
      </TextoContainerStyled>

      <ContainerCantidadStyled>
        <Increase onClick={handleDecreaseCantidad}>
          {cantidad === 1 ? <GoTrash /> : <LiaMinusSquareSolid />}
        </Increase>

        <Counter>{cantidad}</Counter>

        <Increase
          onClick={() =>
            dispatch(agregarProducto({ cardImg, title, price, cantidad, id }))
          }
        >
          <LiaPlusSquareSolid />
        </Increase>
      </ContainerCantidadStyled>

      {/* Modal de confirmación */}

      <Modal
        isOpen={showConfirmationModal}
        message={"¿Desea eliminar este producto del carrito?"}
        onYesClick={handleDeleteConfirmation}
        onNoClick={() => setShowConfirmationModal(false)}
      />
      
    </ContainerProductosStyled>
  );
};

export default ModalCardCarrito;
