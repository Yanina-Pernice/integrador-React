
import { ErrorMessage, Field } from 'formik';
import { ErrorMsjStyled, InputContainerStyled } from '../input/InputStyles';
import { TextAreaInputStyled } from './TextAreaInputStyles';

function TextAreaInput ({ name, placeholder, isError }) {
  return (
    <InputContainerStyled>
      <Field name={name} placeholder={placeholder} error={isError} as={TextAreaInputStyled} />

      <ErrorMessage name={name} component={ErrorMsjStyled} />

    </InputContainerStyled>
  );
}
export default TextAreaInput;