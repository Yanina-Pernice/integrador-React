import React from 'react'
import Button from '../../Button/Button'
import { CarritoWrapperStyled, CloseButtonStyled, ContainerBotonesStyled, ContainerCloseButtonStyled, ContainerPrecioStyled, ContainerPrincipalStyled, OverlayStyled, ProductosWrapperStyled, TituloCarritoStyled, TotalStyled  } from './CarritoStyles'
import { GoTrash } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx"

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { openConfirmationModal, closeConfirmationModal } from "../../../redux/modal/modalSlice";


import ConfirmationModal from "./ConfirmationModal"
import ModalCardCarrito from './ModalCardCarrito';



const Carrito = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const isConfirmationModalOpen = useSelector((state) => state.modal.isConfirmationModalOpen)

  const { itemsCarrito, costoEnvio } = useSelector((state) => state.cart);

  const precioTotal = itemsCarrito.reduce((acumulador, item) => {
    return (acumulador += item.price * item.cantidad)
  }, 0);

 
  const openCart = () => {
    dispatch(toggleHiddenCart())
  };

  // Función para abrir el modal de confirmación
  const openConfirmation = () => {
    dispatch(openConfirmationModal());
  };

  // Función para cerrar el modal de confirmación
  const closeConfirmation = () => {
    dispatch(closeConfirmationModal());
  };

  // Función para vaciar el carrito (llamada cuando se confirma en el modal)
  const handleVaciarCarrito = () => {
    dispatch(cleanCart());
    closeConfirmation(); // Cierra el modal de confirmación después de vaciar el carrito
  };

  return (

    <>
      <CarritoWrapperStyled style={{ display: hiddenCart ? 'none' : 'flex' }}>

        <ContainerCloseButtonStyled>

          <TituloCarritoStyled>
            <h2>Mi Carrito</h2>

            <CloseButtonStyled
              // onClick={() => dispatch(toggleHiddenCart())} 
              onClick={openCart}
            >
              <RxCrossCircled size="24px"/>

            </CloseButtonStyled>

          </TituloCarritoStyled>

        </ContainerCloseButtonStyled>

        <ContainerPrincipalStyled>
 
          <ProductosWrapperStyled>

            {itemsCarrito.length ? (
              itemsCarrito.map((item) => {
                return <ModalCardCarrito key={item.id} {...item} />;
              })
            ) : (
              <p>No hay productos en tu carrito de compras.</p>
            )}
          </ProductosWrapperStyled>

        </ContainerPrincipalStyled>

        <ContainerPrecioStyled>

          <TotalStyled>

            <p>Subtotal: $ { precioTotal } </p>
            <p>Envio: $ { costoEnvio } </p>
            <span/>
            <p>Total: $ { precioTotal + costoEnvio }</p>
      
          </TotalStyled>

        </ContainerPrecioStyled>

        <ContainerBotonesStyled>

          <Button
            // onClick={openConfirmation}
            disabled={!itemsCarrito.length}
            >
            FINALIZAR PEDIDO</Button>
          
          <Button 
            onClick={openConfirmation}
            disabled={!itemsCarrito.length}
            > 
            <GoTrash size={18} />
            VACIAR CARRITO
          </Button>

        </ContainerBotonesStyled>

      </CarritoWrapperStyled>

      {/* MODAL DE CONFIRMACION */}
      
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        confirmHandler={handleVaciarCarrito}
        cancelHandler={closeConfirmation}      
      />

    </>
  ) 
}

export default Carrito

