import React from 'react'
import { LoginContainerStyled, LoginEmailStyled } from './LoginStyles'
import Input from '../../componentes/FormUI/input/Input'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'


const Login = () => {
  return (

    <LoginContainerStyled>
        <h1>Iniciar Sesión</h1>

        <Formik>

            <Form>

                <Input/>
                <Input/>

                
                <Link/>
                <Link/>
                
                <LoginEmailStyled>¿No tienes cuenta? Registrate aquí</LoginEmailStyled>
                <Submit>Ingresar</Submit>
            </Form>


        </Formik>

    </LoginContainerStyled>

    

  )
}

export default Login
