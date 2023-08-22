import React from 'react'
import { BorderDecoration, CardCategoria } from './CategoriasStyles'

const Categoria = ({img, title, category}) => {
  return (
    <CardCategoria whileTap={{scale: 0.95}}>
        <h2>{title}</h2>
        <span></span>
        {/* <img src={img} alt={category}></img> */}
        <BorderDecoration/>      
    </CardCategoria>
  )
}

export default Categoria
