import React from 'react'
import Hero from '../Home/Hero/Hero'
import Beneficios from '../Home/Beneficios/Beneficios'
import Categorias from '../Productos/Categorias/Categorias'
import CardsProductosDestacados from '../Home/Productos Destacados/CardsProductosDestacados'


const Home = () => {
  return (
    <>
      <Hero/>
      <Beneficios/>
      <Categorias/>
      <CardsProductosDestacados/>
    </>
    

  )
}

export default Home

