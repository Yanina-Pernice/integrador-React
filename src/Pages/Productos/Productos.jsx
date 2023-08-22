import CardProducto from "../../Pages/Home/Productos Destacados/CardProducto"
import { products } from '../../data/Products'
import { ProductosWrapper, ProductosContainer } from "../Home/Productos Destacados/CardsProductosStyles"
import Categorias from "./Categorias/Categorias"
import React, {useEffect} from "react"


const ListaDeProductos = () => {

  useEffect(() => {
    
    window.scrollTo(0, 0); // Desplazar suavemente hacia arriba
  }, []);

  return (

  
    <ProductosWrapper>

      <h2>NUESTRA COLECCION</h2>

      <Categorias/>

      <ProductosContainer>
        {
          products.map((producto) => {
            return <CardProducto key={producto.id} {...producto}/>
          })
        }
      
      </ProductosContainer>

    </ProductosWrapper>
  )
}

export default ListaDeProductos
