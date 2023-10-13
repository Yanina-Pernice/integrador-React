import styled from "styled-components";
import pattern_sprinkles from '../Images/pattern_sprinkles.png'
import {Form as FormikForm} from 'formik';

export const ContactoContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${pattern_sprinkles});
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
    
    h2{
        background: linear-gradient(95deg, #af3264, #ff4a92);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 4px 4px 2px rgba(187,171,139,0.25);
    }  
    
    @media (max-width: 768px) {
        padding: 1 rem;

    }

`

export const FormContacto = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 320px;
    border-radius: 8px;
    box-shadow: 1px 3px 148px 15px rgba(255,204,227,0.77);
    -webkit-box-shadow: 1px 3px 148px 15px rgba(255,204,227,0.77);
    -moz-box-shadow: 1px 3px 148px 15px rgba(255,204,227,0.77);

    @media (max-width: 768) {
        width:90%;

    }

    @media (min-width: 320px) {
        padding: 10px;
        margin-bottom: 60px;
        width: fit-content;
    }
  
` 
    
   


