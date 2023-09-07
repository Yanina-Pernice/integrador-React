import CardProducto from "../../Pages/Home/Productos Destacados/CardProducto"

import { ProductosWrapper, ProductosContainer } from "../Home/Productos Destacados/CardsProductosStyles"
import Categorias from "./Categorias/Categorias"

import { useSelector } from "react-redux"
import React, {useEffect} from "react"



const ListaDeProductos = () => {
  // useSelector para acceder al estado de productos desde el slice
  let productos = useSelector((state) => state.productos);


  // Crear una función para filtrar productos por categoría


  useEffect(() => {
    
    window.scrollTo(0, 0); // Desplazar suavemente hacia arriba
  }, []);
  

  return (
  
    <ProductosWrapper>

      <h2>NUESTRA COLECCION</h2>

      <Categorias/>

      <ProductosContainer>

        {

          Object.entries(productos).map(([,producto]) => {
            return producto.map((item) => {
              return <CardProducto {...item} key={item.id} />
            })
          })
          
      
        }   
              
      
      </ProductosContainer>

    </ProductosWrapper>
  )
}

export default ListaDeProductos
