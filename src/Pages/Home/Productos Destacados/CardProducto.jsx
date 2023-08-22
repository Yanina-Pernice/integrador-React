import React from 'react'
import { CardPrice, PriceContainer, ProductosCard } from './CardsProductosStyles'
import Button from '../../../componentes/Button/Button'

const CardProducto = ({cardImg, title, desc, price}) => {
  return (
    <ProductosCard>
        <img src={cardImg} alt={title}/>
        <h2>{title}</h2>
        <p>{desc}</p>
        <PriceContainer>
          <CardPrice>${price}</CardPrice>
          <Button>
            Agregar
          </Button>
        </PriceContainer>
    </ProductosCard>
  )
}

export default CardProducto
