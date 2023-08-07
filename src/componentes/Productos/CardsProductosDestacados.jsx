import React from 'react';
import { ButtonContainerStyled, ProductosContainer, ProductosWrapper } from './CardsProductosStyles';
import { products } from '../../data/Products';
import CardProducto from './CardProducto';
import Button from '../Hero/UI/Button/Button';

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
          <Button disabled>Ver todos</Button>
        </ButtonContainerStyled>

    </ProductosWrapper>
  )
}
export default CardsProductosDestacados

