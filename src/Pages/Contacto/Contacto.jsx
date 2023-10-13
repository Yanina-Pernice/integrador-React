import React, { useEffect } from 'react'
import { ContactoContainer, FormContacto } from './ContactoStyles'

import Input from '../../componentes/FormUI/input/Input'
import SubmitButton from '../../componentes/FormUI/submit/SubmitButton'
import TextArea from '../../componentes/FormUI/textArea/TextAreaInput'

import { Formik } from 'formik'
import { contactoValidationSchema } from '../../Formik/validationSchema'
import { contactoInitialValues } from '../../Formik/initialValues'
import { toggleModal } from '../../redux/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'

import { ModalContainer, ModalContent } from '../Home/Productos Destacados/CardsProductosStyles'

const Contacto = () => {

  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal)

  const handleSubmitSuccess = () => {
    dispatch(toggleModal())
  };

  let timeOutModal;

  useEffect(() => {
    if (isOpen) {
      timeOutModal = setTimeout(() => {
        dispatch(toggleModal())
      }, 2000);
    }
    return () => clearTimeout(timeOutModal)
  }, [isOpen, dispatch])

  return (

    <ContactoContainer>
      <h2>CONTACTO</h2>

      <Formik
        initialValues={(contactoInitialValues)}
        validationSchema={contactoValidationSchema}
        onSubmit={ (values, {resetForm}) => {
          resetForm();
          handleSubmitSuccess();       
          
        }}
      >

        {
          ({touched, errors})=> (
          
          <FormContacto>

            <Input 
              type='text' 
              name='nombre' 
              placeholder='Nombre' 
              id='name'
              className={errors.nombre && touched.nombre? 'error' : ''}
            />

            <Input 
              type='text' 
              name='apellido' 
              placeholder='Apellido' 
              id='apellido'
              className={errors.apellido && touched.apellido? 'error' : ''}
            />

            <Input 
              type='email' 
              name='email' 
              placeholder='email' 
              id='email'
              className={errors.email && touched.email? 'error' : ''}
            />

            <Input
              type='text' 
              name='asunto' 
              placeholder='Asunto' 
              id='asunto'
              className={errors.asunto && touched.asunto? 'error' : ''}
            />

            <TextArea
              type='text' 
              name='mensaje' 
              placeholder='Mensaje' 
              id='msj'
              className={errors.mensaje && touched.mensaje? 'error' : ''}
            />

            <SubmitButton/>

          </FormContacto>)
        }
        
      </Formik>

      {/* MODAL */}
      {isOpen && (
        <ModalContainer>
          <ModalContent>            
            <p>¡Formulario enviado exitosamente!</p>
          </ModalContent>
        </ModalContainer>
        )
      }

    </ContactoContainer>  

  );
}

export default Contacto


