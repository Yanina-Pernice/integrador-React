import { ErrorMsjStyled, InputContainerStyled, InputStyled } from "./InputStyles";
import { ErrorMessage, Field } from "formik";

const Input = ({ type, placeholder, name, isError }) => {
  return (
   
    <InputContainerStyled>

      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        error = {isError}  
        as={InputStyled}            
        className={isError ? "error" : ""} 
      
      />

      <ErrorMessage name={name} component={ErrorMsjStyled} />      

    </InputContainerStyled>

  )
}
  

export default Input;