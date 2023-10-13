import styled from "styled-components";

//FOOTER - CONTENEDOR GRAL 
export const FooterContainerStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%; 
    color: #af3264;
    background: #fbe8e5;
    padding: 1rem 1 rem 0 1 rem;

    .footer_text {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 14px;

        span {
            font-weight: 800;
        }
    }

    @media (min-width: 320px) {
        .footer_text {
            padding: 1rem;
        }

    }

`;

//CONTENEDOR REDES Y MEDIOS DE PAGO
export const LinkFooterContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //align-items: flex-start;
    gap: .5rem;
    h3 {
        text-align: center;
        background: linear-gradient(95deg, #af3264, #ff4a92);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 320px) {
        align-items: center;
        padding: 1rem;
    }

`;

//CONTENEDOR REDES SOCIALES
export const ContainerRedesSocialesStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    
`;
//CONTENEDOR ICONOS REDES SOCIALES
export const IconosRedesSocialesStyled = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    width: fit-content;
    font-size: 30px;
    
`;

//CONTENEDOR MEDIOS DE PAGO
export const ContainerMediosDePagoStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: fit-content;
`;

//CONTENEDOR IMG MEDIOS DE PAGO
export const MediosDePagoStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: fit-content;
    gap: 10px;

    @media (min-width: 320px) {
        gap: 6px;
    }
`;

