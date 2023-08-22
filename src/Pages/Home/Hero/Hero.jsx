import React from "react"
import { HeroContainerStyled,  HeroTextContainerStyled } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>Accesorios que destacan tu Esencia</h1>

        <p>Prepárate para descubrir la magia de los detalles y cómo cada accesorio puede hacer que te sientas más segura y auténtica.</p>
        <p>Nuestra misión es inspirarte a elevar tu estilo, romper barreras y atreverte a ser diferente. Es hora de dejar tu huella en el mundo con accesorios que hablen por sí mismos.</p>
        
        <p>Así que, ¿estás lista para llevar tu look al siguiente nivel? Explora nuestra colección y déjate cautivar por la originalidad y el encanto de nuestros accesorios. <span>¡Es hora de Glow Up Your Style!</span></p>        

      </HeroTextContainerStyled>
       
    </HeroContainerStyled>
  )
}

export default Hero
