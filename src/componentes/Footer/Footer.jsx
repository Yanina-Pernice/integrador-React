import React from 'react'
import { FooterContainerStyled, LinkFooterContainerStyled, ContainerRedesSocialesStyled, IconosRedesSocialesStyled, ContainerMediosDePagoStyled, MediosDePagoStyled} from './FooterStyles'

import {BsInstagram} from "react-icons/bs"
import {BiLogoTiktok} from "react-icons/bi"
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinkFooterContainerStyled>

        <ContainerRedesSocialesStyled>
          <h3>REDES SOCIALES</h3>
          <IconosRedesSocialesStyled>
              <BsInstagram/>
              <BiLogoTiktok/>
              <BsFacebook/>
          </IconosRedesSocialesStyled>
        </ContainerRedesSocialesStyled>

        <ContainerMediosDePagoStyled>
          <h3>MEDIOS DE PAGO</h3>
          <MediosDePagoStyled>
            <img src= '../../src/assets/imagenes/MediosDePago/visa.png' alt="visa" width="65" height="40"/>
            <img src= '../../src/assets/imagenes/MediosDePago/amex.png' alt="amex" width="65" height="40"/>
            <img src= '../../src/assets/imagenes/MediosDePago/banelco.png' alt="banelco" width="65" height="40"/>  
            <img src= '../../src/assets/imagenes/MediosDePago/mastercard.png' alt="mastercard" width="65" height="40"/>
            <img src= '../../src/assets/imagenes/MediosDePago/rapipago.png' alt="rapipago" width="65" height="40"/>
            <img src= '../../src/assets/imagenes/MediosDePago/pagofacil.png' alt="pago facil" width="65" height="40"/>
            <img src= '../../src/assets/imagenes/MediosDePago/tarjeta-naranja.png' alt="naranja" width="65" height="40"/>
            <img src= '../../src/assets/imagenes/MediosDePago/tarjeta-shopping.png' alt="shopping" width="65" height="40"/>         
          </MediosDePagoStyled>
        </ContainerMediosDePagoStyled>
        
      </LinkFooterContainerStyled>

      <p>Copyright GLOW UP ACCESORIOS-2023. Todos los derechos reservados.</p>
      <p>Defensa del consumidor. Para reclamos ingrese <span>aquí.</span></p>
      <p>creado por <span>YP</span></p>

    </FooterContainerStyled>
  )
}

export default Footer
