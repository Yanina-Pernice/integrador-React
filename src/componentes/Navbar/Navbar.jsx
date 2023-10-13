import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { MenuContexto } from "./Menu Context/MenuContext";
import Cart from "./Cart/Cart"
import Carrito from  "../Navbar/Modal Cart/Carrito"
import { toggleMenu } from "../../redux/menu/menuSlice"
import { toggleHiddenMenu } from "../../redux/user/userSlice"

import LOGO_GU from "./LOGO_GU.png"

import {
  NavbarWrapper,
  LinksWrapperStyled,
  PagesWrapper,
  HomeContainerStyled,
  LinkContainerStyled,
  UserContainerStyled,
  MenuContainerStyled,
  NavLinkStyled,
  CartBubble,
  SpanStyled,
  LogoImage,
} from "./NavbarStyles";

import { BiSolidHomeHeart, BiSolidUser } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

// import { OverlayStyled } from "./Modal Cart/CarritoStyles";
import ModalCardCarrito from "./Modal Cart/ModalCardCarrito";
import ModalUser from "./Modal User/ModalUser";


const Navbar = () => {
  const sizeIcon = 25;
  const dispatch = useDispatch()
  const {isMenuOpen} = useSelector((state) => state.menu);

  //TOGGLE DEL MENU
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }
  
  return (
    <NavbarWrapper>

      <ModalUser/>

      <div> 
        <Link to="/">
          <LogoImage
            src={LOGO_GU}
            alt="Logo"
          />
        </Link>
      </div>

      <LinksWrapperStyled>


        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
        >
          <PagesWrapper className={isMenuOpen ? "open" : ""}>
            <Link to="/about-us">NOSOTROS</Link>
            <Link to="/productos">PRODUCTOS</Link>
            <Link to="/contacto">CONTACTO</Link>
          </PagesWrapper>

        </motion.div>

        <div className="cartUserContainer">

          <MenuContainerStyled>
            <FiMenu
              onClick={() => handleToggleMenu()}
              style={{ color: "#af3264" }}
            />
          </MenuContainerStyled>

          <HomeContainerStyled>
            <motion.div whileTap={{ scale: 0.95 }}>
              <NavLinkStyled to="/">
                <LinkContainerStyled>
                  <BiSolidHomeHeart
                    style={{ color: "#af3264" }}
                    size={sizeIcon}
                  />
                  HOME
                </LinkContainerStyled>
              </NavLinkStyled>
            </motion.div>
          </HomeContainerStyled>

          <CartBubble>
            <Cart />
          </CartBubble>

          <Carrito>
            <ModalCardCarrito />
          </Carrito>

          <UserContainerStyled>
            <BiSolidUser
              
              size={sizeIcon}
            />
            {
              toggleHiddenMenu && (
              <SpanStyled>
     
              </SpanStyled>)
            }
          </UserContainerStyled>
        </div>

      </LinksWrapperStyled>



    </NavbarWrapper>
  );
};

export default Navbar;
