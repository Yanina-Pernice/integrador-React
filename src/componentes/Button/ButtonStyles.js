import { styled } from "styled-components";
import { motion } from "framer-motion";


export const StyledButton = styled(motion.button)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: ${({ radius }) => `${radius}px`};
    background: rgb(233,204,204);
    background: linear-gradient(90deg, rgba(233,204,204,1) 25%, rgba(255,221,210,1) 81%);


    color: #af3264;
    font-weight: 400;
    cursor: pointer;    
    &:hover {
        opacity: 95%;
        background: linear-gradient(153deg, #af3264, #ff4a92);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 800;

    }
    &:disabled {
        cursor: not-allowed;
        //opacity: 0.5;
    }

    @media (min-width: 320px) {
        padding: 0.25rem 1.25rem;

    }

`