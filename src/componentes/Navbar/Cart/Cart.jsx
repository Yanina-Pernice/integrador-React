import { BsBagHeart } from "react-icons/bs";
import { CartContainerStyled } from "../NavbarStyles";

import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/cart/cartSlice";

const Cart = () => {

  const sizeIcon = 25;

  const totalItemsCarrito = useSelector((state) => state.cart.itemsCarrito).reduce((acc, item) => (acc += item.cantidad), 0)
  
  const dispatch = useDispatch()

  return (
    <CartContainerStyled onClick={() => dispatch(toggleHiddenCart())}>
      <BsBagHeart size={sizeIcon}/>
      <span>{totalItemsCarrito}</span>
    </CartContainerStyled>
  );
};

export default Cart 