import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

//ESTILO EL HEADER
export const NavbarWrapper = styled.header`
    height: 70px;
    background-color: #fbe8e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 15px 1rem 15px; 
    gap: 1rem;

    &.open{
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
        
    }

`

export const LogoImage = styled.img`  
  height: 13vh; 

  @media (min-width: 320px) {
        height:8vh;
    }

`

//CONTENEDOR GRAL PAGES Y LINKS
export const LinksWrapperStyled = styled.nav`
    color: #af3264;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 9px;
    font-weight: bolder;
    padding: 1rem;

    a{
        //gap: 10px;
        padding: 0.25rem;
    }

    .cartUserContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        gap: 10px;
    }

    @media (min-width: 320px) {
        padding: 0.25rem;
        margin-right: 0rem;
    }
`

//ESTILADO DE LINKS - COMPONENTE LINK BASE, PADRE DE OTROS +CHICOS
export const LinkContainerStyled = styled.div`
    font-size: 1rem;
    font-weight: bolder;
    color: ${(props) => (props.home ? "#fbe8e5" : "#af3264")};
    display: flex;
    align-items: center;

    &:hover{
        background: linear-gradient(55deg, #af3264, #ff4a92);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }
`

// CONTENEDOR PAGINAS
export const PagesWrapper = styled(motion.ul)`
    width: 40vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0; 
    //gap: 10px;
    list-style: none;
    position: relative;
    
    a {
        color: #af3264;
        text-shadow: 2px 2px 4px #8888;
        text-align: center;

        &:hover {
            text-decoration: underline;
            background: linear-gradient(98deg, #af3264, #ff4a92);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    @media (max-width: 768px) {
        display: none;
    
        &.open {

            position: absolute;
            z-index: 10;
            top: 102px;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            background-color: #fbe8e5;
            padding: 30px;
            gap: 10px;
            border-radius: 0 0 0 10px;
            width: 30vw;
            height: calc(100vh - 120px);

        }
    }

    @media (min-width: 320px) and (max-width: 410px) {
        &.open {
            width: 50vw;
        } 
    }
`

//PAGINA NOSOTROS
export const NosotrosContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 768px){
        display: none;
    }
`;

//NAVLINK PRODUCTOS NOSOTROS Y CONTACTO
export const NavLinkStyled = styled(NavLink)`
    padding: 1rem;
    color: #ea8a8a;
    
    &.active {
        color: #f9a1bc;
    }
`;

//CONTENEDOR HOME
export const HomeContainerStyled = styled(LinkContainerStyled)`
    display: flex;

    a:first-child {
        background-color: #ffff;
        border-radius: 1rem;
        padding: .75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    
    @media (max-width: 768px){
        display: none;
    }
`;

//CONTENEDOR USUARIO
export const UserContainerStyled = styled.div`
    display: flex;
    align-items: center;
    color: #af3264;
    text-shadow: 2px 2px 4px #8888;
    gap: 5px;
    width: fit-content;
  
`;

export const SpanStyled = styled.span`
    &:hover {
        text-decoration: underline;
    }
`

//CONTENEDOR MENU
export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    font-size: 2rem;
    cursor: pointer;
    
    @media (max-width: 768px) {
        display: flex;
    }
`;

//CONTENEDOR CARRITO
export const CartContainerStyled = styled.div`
    gap: 15px;
    cursor: pointer;

    &:hover {
        color: #f9a1bc;
    }    
`;

export const CartBubble = styled.div`
    position: relative;
    cursor: pointer;
    padding-right: 10px;

    span {
        position: absolute;
        top: 0;
        right: 0;
        height: 17px;
        width: 17px;
        text-align: center;
        border: 1px solid white;
        border-radius: 1rem;
        color: white;
        background-color: #f9a1bc;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
    }
`;


// export const OverlayStyled = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 99;
//   height: 100vh;
//   width: 100%;
//   background: rgba(0, 0, 0, 0.5); // Fondo semitransparente
//   backdrop-filter: blur(5px); 
//   pointer-events: none;

// `;



