import React from 'react'
import { CardPrice, PriceContainer, ProductosCard } from './CardsProductosStyles'
import Button from '../Hero/UI/Button/Button'

const CardProducto = ({img, title, desc, price}) => {
  return (
    <ProductosCard>
        <img src={img} alt={title}/>
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
