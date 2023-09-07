import React from 'react'
import { BorderDecoration, CardCategoria } from './CategoriasStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from "../../../redux/categorias/categoriasSlice"

const Categoria = ({ title, category }) => {

  const { categoriaSeleccionada } = useSelector((state) => state.categorias)

  const dispatch = useDispatch();

  return (
    <CardCategoria 
      selected={category === categoriaSeleccionada}
      onClick={ () => dispatch(selectCategory(category))}
      whileTap={{scale: 0.95}}>
        <h2>{title}</h2>
        <span/>
        <BorderDecoration
        selected={category === categoriaSeleccionada}
        />      
    </CardCategoria>
  )
}

export default Categoria
