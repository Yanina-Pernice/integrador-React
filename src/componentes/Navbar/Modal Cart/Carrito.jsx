import React, { useState } from "react";
import Button from "../../Button/Button";
import { VaciarCarritoButton } from "../../Button/ButtonStyles";
import {
  CarritoWrapperStyled,
  CloseButtonStyled,
  ContainerBotonesStyled,
  ContainerCloseButtonStyled,
  ContainerPrecioStyled,
  ContainerPrincipalStyled,
  OverlayStyled,
  ProductosWrapperStyled,
  TituloCarritoStyled,
  TotalStyled,
} from "./CarritoStyles";
import { GoTrash } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import { cleanCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";

import ModalCardCarrito from "./ModalCardCarrito";

import { AnimatePresence } from "framer-motion";
import Modal from "../../UI/Modals/Modal";

const Carrito = () => {
  const dispatch = useDispatch();

  const hiddenCart = useSelector((state) => state.cart.hidden);
  const { isOpen, setMessage } = useSelector((state) => state.modal);
  const { itemsCarrito, costoEnvio } = useSelector((state) => state.cart);

  const precioTotal = itemsCarrito.reduce((acumulador, item) => {
    return (acumulador += item.price * item.cantidad);
  }, 0);

  const [showEmptyConfirmationModal, setShowEmptyConfirmationModal] =
    useState(false);
  const [showSuccedConfirmationModal, setShowSuccedConfirmationModal] =
    useState(false);

  //CONFIRMATION MODAL VACIAR CARRITO
  const handleCloseModal = () => {
    dispatch(cleanCart());
    setShowEmptyConfirmationModal(false);
    dispatch(toggleHiddenCart())
  };

  // VACIAR CARRITO
  const handleVaciarCarrito = () => {
    setShowEmptyConfirmationModal(true);
  };

  //CONFIRMATION MODAL FINALIZAR COMPRA
  const handleModalFinalizarCompra = () => {
    setShowSuccedConfirmationModal(true);
  };

  //FINALIZAR COMPRA
  const finalizarCompra = () => {
    dispatch(cleanCart());
    dispatch(toggleHiddenCart())
  }

  return (
    <>
      <>
        {!hiddenCart && (
          <OverlayStyled onClick={() => dispatch(toggleHiddenCart())} />
        )}

        <AnimatePresence>
          {!hiddenCart && (
            <CarritoWrapperStyled
              initial={{ translateX: 600 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: 600 }}
              transition={{ type: "spring", damping: 27 }}
              key="cart-modal"
            >
              <ContainerCloseButtonStyled>
                <TituloCarritoStyled>
                  <h2>Mi Carrito</h2>

                  <CloseButtonStyled
                    onClick={() => dispatch(toggleHiddenCart())}
                  >
                    <RxCrossCircled size="24px" />
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
                    <p>No hay productos en tu carrito de compras</p>
                  )}
                </ProductosWrapperStyled>
              </ContainerPrincipalStyled>

              <ContainerPrecioStyled>
                <TotalStyled>
                  <p>SUBTOTAL: $ {precioTotal} </p>
                  <p>ENVIO: $ {costoEnvio} </p>
                  <span />
                  <p>TOTAL: $ {precioTotal + costoEnvio}</p>
                </TotalStyled>
              </ContainerPrecioStyled>

              <ContainerBotonesStyled>
                <Button
                  onClick={() => handleModalFinalizarCompra()}
                  disabled={!itemsCarrito.length}
                >
                  FINALIZAR PEDIDO
                </Button>

                <VaciarCarritoButton
                  onClick={() => handleVaciarCarrito()}
                  disabled={!itemsCarrito.length}
                >
                  <GoTrash size={18} />
                  VACIAR CARRITO
                </VaciarCarritoButton>
              </ContainerBotonesStyled>
            </CarritoWrapperStyled>
          )}
        </AnimatePresence>
      </>

      {/*  MODAL CONFIRMACION VACIAR CARRITO */}

      <Modal
        isOpen={showEmptyConfirmationModal}
        message={"¿Está seguro que desea vaciar el carrito?"}
        onYesClick={handleCloseModal}
        onNoClick={() => setShowEmptyConfirmationModal(false)}
      />

      <Modal
        isOpen={showSuccedConfirmationModal}
        message={"Gracias por su compra!"}
        onCloseClick={() => {
          setShowSuccedConfirmationModal(false);
          finalizarCompra(); 
        }}
      />

    </>
  );
};

export default Carrito;
