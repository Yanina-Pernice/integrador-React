import { AnimatePresence } from "framer-motion";

import {
  ModalUserContainerStyled,
  UsernameStyled,
  HrStyled,
  LinkStyled
} from "./ModalUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setUsuarioActual, toggleHiddenMenu } from "../../../redux/user/userSlice";

const ModalUser = () => {
  const {hiddenMenu, usuarioActual} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalUserContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="carrito-user"
        >
          <UsernameStyled>{usuarioActual.nombre}</UsernameStyled>
          <HrStyled />
          <LinkStyled to="/checkout">Finalizar Compra</LinkStyled>
          <span onClick={() => {
            dispatch(setUsuarioActual(null))
            dispatch(toggleHiddenMenu())
          }}>Cerrar Sesion</span>
        </ModalUserContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
