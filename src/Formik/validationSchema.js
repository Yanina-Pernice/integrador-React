import * as Yup from 'yup';

const phoneRegex = /\d]{10}$/;


export const contactoValidationSchema = Yup.object({
    nombre: Yup.string().required('Campo Requerido'),
    apellido: Yup.string().required('Campo Requerido'),
    email: Yup.string().email('El email no valido').required('Campo Requerido'),
    asunto: Yup.string().notRequired('Campo Requerido'),
    mensaje: Yup.string().required('Campo Requerido').max(250, "Máximo de 250 caracteres")
})

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().required('Campo Requerido'),
    cellphone: Yup.string().required('Campo Requerido').matches(phoneRegex, "El número celular no es valido"),
    location: Yup.string().required('Campo Requerido'),
    address: Yup.string().required('Campo Requerido')
})

export const registroValidationSchema = Yup.object({
    name: Yup.string().required('Campo Requerido'),
    email: Yup.string().email('El email no es valido').required('Campo Requerido'),
    password: Yup.string().min(8, 'Mínimo de caracteres: 8').required('Campo Requerido')
})

export const loginValidationSchema = Yup.object({
    email: Yup.string().email('El email no es valido').required('Campo Requerido'),
    password: Yup.string().min(8, 'Mínimo de caracteres: 8').required('Campo Requerido')
})