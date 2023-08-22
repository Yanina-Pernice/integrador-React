import styled from "styled-components";
import pattern_sprinkles from "../images/pattern_sprinkles.png"

export const AboutUsWrapper = styled.main`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${pattern_sprinkles});
    background-repeat: repeat;
    background-size: contain;
    background-position: center;

`
export const AboutUsTextContainerStyled = styled.div`
    
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 25px;
    margin-top: 4rem;
    margin-bottom: 2rem;
 
    h2{
        color: #131415;
        text-shadow: 4px 4px 2px rgba(187,171,139,0.25);

    }

    p{
        text-align: center;
    }
    

    span{
        font-weight: bolder;
        color: #af3264;

    }

`



