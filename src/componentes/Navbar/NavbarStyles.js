import styled from "styled-components";

//ESTILO EL HEADER
export const NavbarContainerStyled = styled.header`
    height: 100px;
    background-color: #fbe8e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1rem 0; 

`

//CONTENEDOR LINKS
export const LinksContainerStyled = styled.div`
    color: #af3264;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    a{
        padding: 1rem 1.5rem
    }

    a:first-child {
        background-color: #ffff;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`

//contenedor por un link componente base padre de otros mas chicos
export const LinkContainerstyled = styled.div`
    font-size: 1.2rem;
    color: ${(props) => (props.home ? "#af3264" : "#e7c897")};
    display: flex;
    align-items: center;
`

//CONTENEDOR HOME E INICIO DE SESION
export const UserNavStyled = styled.div`
    gap: 15px;
    cursor: pointer;
    span {
        color: #af3264;
        font-size: 1rem;
        margin-right: 20px;
    }
    @media (max-width: 768px) {
        display:none;
    }
`;

//CONTENEDOR USUARIO
export const UserContainerStyled = styled(LinkContainerstyled)`
    color: #af3264;
`;

//CONTENEDOR HOME
export const HomeContainerStyled = styled(LinkContainerstyled)`
    @media (max-width: 768px){
        display: none;
        color: #af3264;
    }
`;

//CONTAINER MENU
export const MenuContainerStyled = styled(LinkContainerstyled)`
    display: none;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export const SpanStyled = styled.span`
    &:hover {
        text-decoration: underline;
    }
`;




