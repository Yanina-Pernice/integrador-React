import { SubmitButtonStyled } from "./SubmitButtonStyles";

const Submit = () => {
  return (
    <SubmitButtonStyled
      whileTap={{ scale: 0.95 }}
      type="submit"
    >
      Enviar
  
    </SubmitButtonStyled>
  );
};

export default Submit;