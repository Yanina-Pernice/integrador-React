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
  const { recomendados } = useSelector((state) => state.recomendados);

  console.log(recomendados);

  return (
    <ProductosWrapper>
      <h2>PRODUCTOS DESTACADOS</h2>
      <ProductosContainer>
       
        {recomendados.map((recomendado) => {
          return <CardProducto key={recomendado.id} {...recomendado} />;
          })
        }

      </ProductosContainer>

      <ButtonContainerStyled>
        <Link to="/productos">
          <Button>Ver todos</Button>
        </Link>
      </ButtonContainerStyled>
    </ProductosWrapper>
  );
};

export default CardsProductosDestacados;
