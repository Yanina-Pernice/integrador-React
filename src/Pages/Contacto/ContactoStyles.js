import styled from "styled-components";
import pattern_sprinkles from "../images/pattern_sprinkles.png"

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

export const FormContacto = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 320px;
    gap: 20px;
    border: 1px solid grey;
    border-radius: 8px;
    -webkit-box-shadow: 10px 10px 25px 7px rgba(235,223,235,1);
    -moz-box-shadow: 10px 10px 25px 7px rgba(235,223,235,1);
    box-shadow: 10px 10px 25px 7px rgba(235,223,235,1);

    & input {
        padding: 10px;
        width: 250px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif; 
          
    }

    & textarea {
        width: 250px;
        height: 80px;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-family: 'Montserrat', sans-serif;

    } 

    
` 
    
   


