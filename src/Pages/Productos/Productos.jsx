import CardProducto from "../../Pages/Home/Productos Destacados/CardProducto";
import Categorias from "./Categorias/Categorias";
import { ButtonContainerStyled, ProductosWrapper, ProductosContainer } from "../Home/Productos Destacados/CardsProductosStyles";

import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const ListaDeProductos = () => {
  // DESPLAZAMIENTO SUAVE
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const totalProducts = useSelector((state) => state.productos.totalProductos);
  const categoriaSeleccionada = useSelector((state) => state.categorias.categoriaSeleccionada);

   // FILTRADO DE PRODUCTOS POR CATEGORIA 
  const productos = useSelector((state) => 
    categoriaSeleccionada
      ? state.productos.productos.filter((producto) => producto.category === categoriaSeleccionada)      
      : state.productos.productos
  );


  return (
    <ProductosWrapper>
      <h2>NUESTRA COLECCIÓN</h2>

      <Categorias />

      <ProductosContainer>
        {productos && productos.length > 0 
        ? (
          productos.map((producto) => (
            <CardProducto {...producto} key={producto.id} />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </ProductosContainer>

    </ProductosWrapper>
  );
};

export default ListaDeProductos;
