import { useSelector } from "react-redux";
import React from 'react'
import { CategoriasContainer, CategoriasWrapper } from './CategoriasStyles'
// import { categories } from '../../../data/Categories'
import Categoria from './Categoria'



const Categorias = () => {
    
    const {categorias} = useSelector((state) => state.categorias)

    // console.log(categorias)
    
    return (
        <CategoriasWrapper>
                <h2>CATEGORIAS</h2>
                <CategoriasContainer>
                    {   
                        categorias.map( (category) => {
                            return <Categoria key={category.id} {...category}/>

                        })
                    }            
                </CategoriasContainer>
        </CategoriasWrapper>
    )
}

export default Categorias

