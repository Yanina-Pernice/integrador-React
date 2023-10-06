import styled from "styled-components";
import pattern_sprinkles from '../Images/pattern_sprinkles.png'
import {Form as FormikForm} from 'formik';

export const ContactoContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${pattern_sprinkles});
    background-repeat: repeat;
    background-size: contain;
    background-position: center;
    
    h2{
        color: #EF8275;
        text-shadow: 4px 4px 2px rgba(187,171,139,0.25);
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
    -webkit-box-shadow: 13px 6px 40px 6px rgba(251,232,229,1);
    -moz-box-shadow: 13px 6px 40px 6px rgba(251,232,229,1);
    box-shadow: 13px 6px 40px 6px rgba(251,232,229,1);


    @media (min-width: 320px) {
        padding: 10px;
        width: 270px;
    }
  
` 
    
   


