import styled from "styled-components";
import { NavLink } from "react-router-dom";

//ESTILO EL HEADER
export const NavbarWrapper = styled.header`
    height: 70px;
    background-color: #fbe8e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1rem 0; 
    gap: 2rem;

    &.open{
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
    }
`

//CONTENEDOR GRAL PAGES Y LINKS
export const LinksWrapperStyled = styled.nav`
    color: #af3264;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-weight: bolder;

    a{
        padding: .5rem
    }


`

//ESTILADO DE LINKS - COMPONENTE LINK BASE, PADRE DE OTROS +CHICOS
export const LinkContainerStyled = styled.div`
    font-size: 1rem;
    font-weight: bolder;
    color: ${(props) => (props.home ? "#e61ebd" : "#af3264")};
    display: flex;
    align-items: center;
`

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
    color: #af3264;
    text-shadow: 2px 2px 4px #8888;
    gap: 5px;
    width: fit-content;
  
`;

//CONTENEDOR MENU
export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    font-size: 2rem;
    cursor: pointer;
    
    @media (max-width: 768px) {
        display: flex;
    }
`;


// CONTENEDOR PAGINAS
export const PagesWrapper = styled.ul`
    display: flex;
    width: 30vw;
        
    a{
        color: #af3264;
        text-shadow: 2px 2px 4px #8888;
        width: 30vw;
        text-align: center;
    }

    @media (max-width: 768px) {
        display: none;
    }

    &.open {

        position: absolute;
        z-index: 1;
        top: 85px;
        right:0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fbe8e5;
        padding: 20px;
        gap: 10px;
        border-radius: 0 0 0 10px;
        width: 40vw;

        @media (min-width: 400px) and (max-width: 768px) {
            top: 85px;

            justify-content: center;
            align-items: center;
     
        }
       

        @media (min-width: 320px) {
            top: 85px;

            justify-content: center;
            align-items: center;
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
  color: #e61ebd;
  &.active {
    color: #af3264;
  }
`;


//CONTENEDOR CARRITO
export const CartContainerStyled = styled.div`
    gap: 15px;
    cursor: pointer;

 

`;

