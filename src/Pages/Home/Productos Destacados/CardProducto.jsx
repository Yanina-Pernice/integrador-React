import React, { useEffect, useState } from "react";
import {
  CardPrice,
  ModalContainer,
  ModalContent,
  PriceContainer,
  ProductosCard,
} from "./CardsProductosStyles";
import Button from "../../../componentes/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { agregarProducto } from "../../../redux/cart/cartSlice";
import { toggleModal } from "../../../redux/modal/modalSlice";


const CardProducto = ({ cardImg, title, desc, price, id }) => {
  const dispatch = useDispatch();

  const [ agregandoAlCarrito, setAgregandoAlCarrito ] = useState(false);
  const { isOpen } = useSelector((state) => state.modal)

  const handleAgregandoAlCarrito = () => {
    if(!agregandoAlCarrito) {
      setAgregandoAlCarrito(true);
    }

    setTimeout(() => {
      setAgregandoAlCarrito(false);

      dispatch(agregarProducto({ cardImg, title, desc, price, id }));

      dispatch(toggleModal());
    }, 1000);
    
  }

  const handleCloseModal = () => {
    dispatch(toggleModal());
  }

  useEffect(() => {
    if(isOpen) {
      const modalTimer = setTimeout(() => {
        handleCloseModal();
      }, 2000);
        
      return () => clearTimeout(modalTimer);
    }
  }, [isOpen])

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
      {isOpen && (
        <ModalContainer>
          <ModalContent>            
            <p>Item agregado al carrito!</p>
          </ModalContent>
        </ModalContainer>
      )}

    </ProductosCard>
  );
};

export default CardProducto;
