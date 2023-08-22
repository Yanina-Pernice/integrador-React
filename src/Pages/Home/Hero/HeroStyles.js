import styled from "styled-components";
import portada from "../../images/portada.png"

//CONTENEDOR SECCION
export const HeroContainerStyled = styled.section`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100vw;
    height: 85vh;

    background-image: url('../public/images/portada.png');
    background-image: url(${portada});
    background-repeat: repeat;
    background-size: cover;
    background-position: center;

    h1 {
        margin-bottom: 2rem;

    }

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    @media (min-width: 320px) and (max-width: 500px) {
        height: fit-content;
    }  

`;

//CONTENEDOR TEXTO
export const HeroTextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: #af3264;
  
    h1{
        font-size: 4rem;
        margin-top: 2rem;
        text-align: center;
    }
    p{
        font-size: 1.2rem;
        color: #af3264;
        font-weight: bolder;
        text-shadow: 4px 4px 9px rgba(255,255,255,0.6);
    }
    @media (max-width: 1000px){
        width: 80%;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 320px){
        h1{
           font-size: 2.5rem; 
        }
    }  
`

//CONTENEDOR IMG DE PORTADA
// export const HeroImageContainerStyled = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40%;
//     img{

//         width: 50vw;
//         height: 30vw;

//     }
//     @media (max-width: 1000px){
//         display: none;
//     }
// `

