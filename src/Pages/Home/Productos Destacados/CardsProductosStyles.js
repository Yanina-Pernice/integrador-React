import styled from "styled-components";

//SECTION
export const ProductosWrapper = styled.section`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    margin: 3rem;
    h2{
        text-align: center;
        color: #af3264;
    }
    @media (max-width: 768px) {
        text-align: center;
    }
`
//CONTENEDOR DE PRODUCTOS
export const ProductosContainer = styled.div`
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 400px);
    row-gap: 2rem;
    width: 100%;
    max-width: 1300px;
    padding: 1rem 0;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, 300px);
    }
`;

//CARD DEL PRODUCTO
export const ProductosCard = styled.div`
    background: #ffe9e3;
    width: 300px;
    border-radius: 15px;
    padding: 1rem;
    img{
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 15px;
    }
    h2{
        font-weight: 600;
        margin: 0;
        background: linear-gradient(95deg, #af3264, #ff4a92);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p{
        color:#5f4444;
        font-size: 1.2rem;
    }
    @media (max-width: 768px) {
        width: 250px;
        text-align: left;
    }
`;

//CONTENEDOR PARA EL PRECIO
export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

//CARD PRECIO
export const CardPrice = styled.span`
    font-weight: 800;
    font-size: 1.75rem;
    background: linear-gradient(95deg, #af3264, #ff4a92);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

//CONTENEDOR BOTON COMPRAR
export const ButtonContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 3rem;
    color: #af3264;
`;

//MODAL

export const ModalContainer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 30px;
    background-color: #eaf6f6; 
    padding: 9px;
    border: 1px solid #ccc;
    height: 4rem;
    border-radius: 5px;

    @media (min-width: 320px) {
        left: 50px;
    }
`

export const ModalContent = styled.div`
    height: 4rem;
    display: flex;
    flex-direction: column;
    
    & p {
        color: #0881a3;
        font-size: 14px;
        font-weight: 500;
        padding: 0 10px;
    }


`
