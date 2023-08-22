import React from 'react'
import { BeneficiosContainer, BeneficiosWrapper, CardBeneficios } from './BeneficiosStyles'

const Beneficios = () => {
  return (
    <BeneficiosWrapper>

        <h2>BENEFICIOS EXCLUSIVOS</h2>       

        <BeneficiosContainer>
            <CardBeneficios>
                <h3>Elegancia Asequible</h3>
                <p>Accesorios de calidad a precios que te encantarán.</p>
            </CardBeneficios>
            <CardBeneficios>
                <h3>Envío Rápido</h3>
                <p>Disfruta tus accesorios en tiempo récord.</p>
            </CardBeneficios>
            <CardBeneficios>
                <h3>Garantía de Satisfacción</h3>
                <p>Tu felicidad es nuestra prioridad, sin complicaciones.</p>
            </CardBeneficios>
            <CardBeneficios>
                <h3>Contenido Inspirador</h3>
                <p>Únete para recibir consejos y tutoriales que realzan tu estilo.</p>
            </CardBeneficios>
        </BeneficiosContainer>
    </BeneficiosWrapper>
  )
}

export default Beneficios
