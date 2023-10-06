import React from "react";

import {
  ButtonContainerStyled,
  ProductosContainer,
  ProductosWrapper,
} from "./CardsProductosStyles";

import CardProducto from "./CardProducto";
import Button from "../../../componentes/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const CardsProductosDestacados = () => {
    
  const {recomendados} = useSelector((state) => state.recomendados)

  return (
    <ProductosWrapper>
      <h2>PRODUCTOS DESTACADOS</h2>
      <ProductosContainer>
       
        {
          recomendados?.map((recomendado) => {
            return <CardProducto key={recomendado.id} {...recomendado} />;
          })
        }

      </ProductosContainer>

      <ButtonContainerStyled>
        <Link to="/productos">
          <Button
                     
          >
            VER TODOS
          </Button>
        </Link>
      </ButtonContainerStyled>
    </ProductosWrapper>
  );
};

export default CardsProductosDestacados;
