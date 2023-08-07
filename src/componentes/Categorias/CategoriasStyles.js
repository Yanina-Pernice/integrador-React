import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasWrapper = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin: 0 15px;
    justify-content: center;
    align-items: center;
    h2{
        color: #e9cccc;
    }
    @media (max-width: 768px) {
        padding-top: 30px;
        text-align: center;
    };
`;

export const CategoriasContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center
    {/* gap: 20px; */}
    user-select: none;// no te deja seleccionar la card
`;

export const CardCategoria = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin: 4px;
    /* padding: 2 rem 0.5rem; */
    background-color: ${({selected}) => selected ? "#f6b7ac" : "#f8d8d6"};
    border-radius: 15px;
    cursor: pointer;
    h2 {
        font-size: 1rem;
        margin-bottom: 5px;
        color: #fff;
        text-align: center;
    }
    // :first-child{
    //     img {
    //         padding-top: 7px;
    //         padding-bottom: 7px;
    //     }
    // }

`;

export const BorderDecoration = styled.div`
    height: 5px;
    width: 30%;
    background: #e9b8a8;
    border-radius: 15px;
    margin-bottom: 10px;
`;