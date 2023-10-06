import CardProducto from "../../Pages/Home/Productos Destacados/CardProducto";
import Categorias from "./Categorias/Categorias";
import { ButtonContainerStyled, ProductosWrapper, ProductosContainer } from "../Home/Productos Destacados/CardsProductosStyles";
import Button from '../../componentes/Button/Button';

import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { INITIAL_LIMIT } from "../../utils/constantes";

const ListaDeProductos = () => {
  // DESPLAZAMIENTO SUAVE
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const totalProducts = useSelector((state) => state.productos.totalProductos);
  const categoriaSeleccionada = useSelector((state) => state.categorias.categoriaSeleccionada);

  const [limite, setLimite] = useState(INITIAL_LIMIT); 

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

      {!categoriaSeleccionada && (
        <ButtonContainerStyled>
          <Button
            onClick= {() => setLimite((prevLimite) => prevLimite - INITIAL_LIMIT)}
            disabled={INITIAL_LIMIT === limite}
          >
            Ver menos
          </Button>

          <Button
            onClick={() => setLimite((prevLimite) => prevLimite + INITIAL_LIMIT)}
            disabled={ totalProducts <= limite }
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
      )}
    </ProductosWrapper>
  );
};

export default ListaDeProductos;
