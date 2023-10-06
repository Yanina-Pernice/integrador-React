import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContexto } from "./Menu Context/MenuContext";
import Cart from "./Cart/Cart"

import Carrito from  "../Navbar/Modal Cart/Carrito"

import Logo from "./Logo.png"

import {
  NavbarWrapper,
  LinksWrapperStyled,
  PagesWrapper,
  HomeContainerStyled,
  LinkContainerStyled,
  UserContainerStyled,
  MenuContainerStyled,
  NavLinkStyled,
  CartBubble
} from "./NavbarStyles";

import { motion } from "framer-motion";

import { BiSolidHomeHeart, BiSolidUser } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import ModalCardCarrito from "./Modal Cart/ModalCardCarrito";

const Navbar = () => {

  const { state, dispatch } = useContext(MenuContexto);
  const sizeIcon = 25;

  return (
    <NavbarWrapper>
      <a>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "90%", height: "90%" }}
        />
      </a>

      <LinksWrapperStyled>
        <PagesWrapper className={state.isMenuOpen ? "open" : ""}>
          <Link to="/about-us">NOSOTROS</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/contacto">CONTACTO</Link>
        </PagesWrapper>

        <HomeContainerStyled>
          <motion.div whileTap={{ scale: 0.95 }}>            
            
          <NavLinkStyled to="/">
            <LinkContainerStyled>
              <BiSolidHomeHeart
                  style={{ color: "#a35a4f" }}
                  size={sizeIcon}
              />
            </LinkContainerStyled>
            HOME
          </NavLinkStyled>
            
          </motion.div>
        </HomeContainerStyled>

        <CartBubble>
          <Cart/>
        </CartBubble>

        <Carrito>
          <ModalCardCarrito/>
        </Carrito> 



        <UserContainerStyled>
          <BiSolidUser size={sizeIcon}/>
        </UserContainerStyled>

        <MenuContainerStyled>
          <FiMenu
            style={{ color: "#af3264" }}
            onClick={() => dispatch({ type: "isMenuOpen" })}
          
          />

        </MenuContainerStyled>
      </LinksWrapperStyled>
    </NavbarWrapper>
  );
};

export default Navbar;
