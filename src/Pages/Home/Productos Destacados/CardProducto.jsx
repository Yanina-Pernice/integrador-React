import React, { useEffect, useState } from "react";
import {
  CardPrice,
  ModalContainer,
  ModalContent,
  PriceContainer,
  ProductosCard,
} from "./CardsProductosStyles";
import Button from "../../../componentes/Button/Button";
import { RxCrossCircled } from "react-icons/rx"

import { useDispatch, useSelector } from "react-redux";
import { agregarProducto } from "../../../redux/cart/cartSlice";
import { openModal, closeModal } from "../../../redux/modal/modalSlice";


const CardProducto = ({ cardImg, title, desc, price, id }) => {
  const dispatch = useDispatch();
  const [ agregandoAlCarrito, setAgregandoAlCarrito ] = useState(false);
  const isModalOpen = useSelector((state) => state.modal.isOpen)

  const handleAgregandoAlCarrito = () => {
    if(!agregandoAlCarrito) {
      setAgregandoAlCarrito(true);
    }

    setTimeout(() => {
      setAgregandoAlCarrito(false);

      dispatch(agregarProducto({ cardImg, title, desc, price, id }));

      dispatch(openModal());
    }, 1000);
    
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  }

  useEffect(() => {
    if(isModalOpen) {
      const modalTimer = setTimeout(() => {
        handleCloseModal();
      }, 3000);
        
      return () => clearTimeout(modalTimer);
    }
  }, [isModalOpen])

  return (
    <ProductosCard>
      <img src={cardImg} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <PriceContainer>
        <CardPrice><span>${price}</span></CardPrice>
        <Button 
          onClick={handleAgregandoAlCarrito}          
          disabled={agregandoAlCarrito}>
            { agregandoAlCarrito 
              ? "AGREGANDO.." 
              : "COMPRAR" 
            }
        </Button>
      </PriceContainer>

      {/* MODAL */}
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <RxCrossCircled onClick={handleCloseModal}/> 
            <p>Item agregado al carrito!</p>
          </ModalContent>
        </ModalContainer>
      )}

    </ProductosCard>
  );
};

export default CardProducto;
