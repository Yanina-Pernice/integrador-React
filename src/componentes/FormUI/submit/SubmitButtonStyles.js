import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SubmitButtonStyled = styled(motion.button)`
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 15px;
    background: rgb(233,204,204);
    background: linear-gradient(90deg, rgba(233,204,204,1) 25%, rgba(255,221,210,1) 81%);
    color: #af3264;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        opacity: 95%;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

`

