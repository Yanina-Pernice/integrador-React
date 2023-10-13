import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CarritoWrapperStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  max-width: 450px;
  height: 95vh;
  padding: 1rem;
  background-color: #ffff;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  z-index: 100;


  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
    box-sizing: border-box; 
  }

`;

export const TituloCarritoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  //margin: 0 0 2rem 0;

  & h2 {
    margin-top: 0;
  }

  @media (min-width: 320px) and (max-width: 500px) {
    text-align: center;
    
    & h2 {
      font-size: 1.25rem;
    }
  }
`;

export const ContainerCloseButtonStyled = styled.div`
  height: 32px;

`

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height:  1.75rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #ea8a8a;
  color: white;
  cursor: pointer;
`;

export const ContainerPrincipalStyled = styled.div`
  height: 80vh;
`;

export const ProductosWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  height: 440px;
  min-height: 320px;
  margin: 0 auto;
  padding-top: 1rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  & p{
    text-align: center;
  }

  @media (max-height: 800px) {
    height: 260px; 

  }

`;

export const ContainerPrecioStyled = styled.div`
  background-color: #fbf0f0;
  & p {
    text-align: center;
    margin-bottom: 5px;
  }

  @media (min-width: 320px) and (max-width: 500px) {

    
  }
`;

export const TotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2px;

  & p {
    padding-left: .5rem;
  }

  & span{
    width: 100%;
    height: 5px;
    border-radius: 2px;
    background: rgb(175,50,100);
    background: linear-gradient(153deg, rgba(175,50,100,1) 39%, rgba(234,138,138,1) 81%);
  }

`;

export const ContainerBotonesStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

`;

// MODAL CARD CARRITO
export const ContainerProductosStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;
  background: #fbf0f0;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;  
  }

  @media (min-width: 320px) and (max-width: 476px) {
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
    padding: .75rem;

  }
`;

export const TextoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 190px;

  @media (min-width: 320px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const TituloCardStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const PrecioStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;

  @media (min-width: 320px) {
    font-size: 20px;
    text-align: center;

  }

`;

export const ContainerCantidadStyled = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 320px) {
  font-size: 16px;

  }

`;

// OVERLAY

export const OverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5); // Fondo semitransparente
  backdrop-filter: blur(5px); 

`;
