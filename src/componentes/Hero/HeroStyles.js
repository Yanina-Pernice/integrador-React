import styled from "styled-components";

//CONTENEDOR SECCION
export const HeroContainerStyled = styled.section`
    display: flex;
    justify-content: space-around; 
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    h1 {
        margin-bottom: 2rem;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

//CONTENEDOR TEXTO
export const HeroTextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 50%;
    color: #af3264;
    h1{
        font-size: 4rem;
        margin: 10px 0;
    }
    p{
        font-size: 1.2rem;
        color: #7a6552;
    }
    @media (max-width: 1000px){
        width: 80%;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 320px){
        h1{
           font-size: 3rem; 
        }
    }  
`

//CONTENEDOR IMG DE PORTADA
export const HeroImageContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    img {
        width: 23vw;
        padding: 30px 0 75px 0;
        border-radius: 69% 31% 67% 33% / 68% 65% 35% 32%   ;

    }
    @media (max-width: 1000px){
        display: none;
    }
`

