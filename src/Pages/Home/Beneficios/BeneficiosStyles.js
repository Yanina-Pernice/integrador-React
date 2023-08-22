import styled from "styled-components";

//SECTION
export const BeneficiosWrapper = styled.section`
    display: flex;
    flex-direction: column;
    /* max-width: 1300px; */
    margin-bottom: 3rem;
    h2{
        text-align: center;
        color: #af3264;
    }
    @media (max-width: 768px) {
        padding-top: 30px;
        text-align: center;
    };
`;

//CONTAINER BENEFICIOS
export const BeneficiosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    user-select: none; 
    gap:15px;
`;

//CARD BENEFICIOS
export const CardBeneficios = styled.div`
    width: 200px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 1rem;
    gap: 5px;
    background-color: #f8d8d6;
    border-radius: 15px;
    color: #7a6552;

    h3 {
        font-size: 1rem;
        color: #af3264;
        text-align: center;
    }
  

`;
