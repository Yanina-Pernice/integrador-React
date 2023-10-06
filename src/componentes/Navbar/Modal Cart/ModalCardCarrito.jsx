import React from 'react'
import { LiaPlusSquareSolid } from "react-icons/lia";
import { LiaMinusSquareSolid } from "react-icons/lia";

import Counter from "../../UI/Counter/Counter";
import Increase  from '../../UI/Increase/Increase';

import { useDispatch } from "react-redux";
import { agregarProducto, removerProducto } from "../../../redux/cart/cartSlice";
import { GoTrash } from "react-icons/go";
import { ContainerCantidadStyled, ContainerProductosStyled, PrecioStyled, TextoContainerStyled, TituloCardStyled } from './CarritoStyles';

const ModalCardCarrito = ({cardImg, title, price, cantidad, id}) => {

    const dispatch = useDispatch()
  
    return (

      <ContainerProductosStyled>

        <img
          src={cardImg}
          alt={title}
        />

        <TextoContainerStyled>

          <TituloCardStyled>{title}</TituloCardStyled>
          <PrecioStyled>{price}</PrecioStyled>

        </TextoContainerStyled>

        <ContainerCantidadStyled>

          <Increase
            onClick={() => dispatch(removerProducto(id))}
          >
            {
              cantidad === 1 ? <GoTrash /> : <LiaMinusSquareSolid />
            }
            
          </Increase>

          <Counter>{cantidad}</Counter>

          <Increase onClick={() => dispatch(agregarProducto({cardImg, title, price, cantidad, id}))}>
            <LiaPlusSquareSolid />
          </Increase>

        </ContainerCantidadStyled>

      </ContainerProductosStyled>
    );
  };
  
  export default ModalCardCarrito;
