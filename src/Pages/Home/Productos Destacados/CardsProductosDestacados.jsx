import React from 'react';
import { ButtonContainerStyled, ProductosContainer, ProductosWrapper } from './CardsProductosStyles';
import { products } from '../../../data/Products';
import CardProducto from './CardProducto';
import Button from '../../../componentes/Button/Button';
import { Link } from "react-router-dom";

const CardsProductosDestacados = () => {

    const ListaProductosDestacados = products.filter(item => item.destacado);

  return (
    
    <ProductosWrapper>

        <h2>PRODUCTOS DESTACADOS</h2>
        <ProductosContainer>
            {

                ListaProductosDestacados.map((item) => {
                    return <CardProducto key= {item.id} {...item}/>
                })
                
            }   
        </ProductosContainer>     
        <ButtonContainerStyled>
          <Link to="/productos">
            <Button >Ver todos</Button>
          </Link>
          
        </ButtonContainerStyled>

    </ProductosWrapper>
  )
}
export default CardsProductosDestacados

