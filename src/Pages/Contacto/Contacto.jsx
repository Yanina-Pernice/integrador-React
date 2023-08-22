import React from 'react'
import { ContactoContainer, FormContacto } from './ContactoStyles'
import Button from '../../componentes/Button/Button'

const Contacto = () => {
  return (

    <ContactoContainer>

      <h2>CONTACTO</h2>

      <FormContacto>

        <input type='text' name='nombre' placeholder='Nombre' id='name'/>

        <input type='text' name='apellido' placeholder='Apellido' id='apellido'/>

        <input type='email' name='email' placeholder='email' id='email'/>

        <input type='text' name='asunto' placeholder='Asunto' id='asunto'/>

        <textarea type='text' name='mensaje' placeholder='Mensaje' id='msj'/>

        <Button radius= '15'>Enviar</Button>

      </FormContacto>

    </ContactoContainer>  

  );
}

export default Contacto


