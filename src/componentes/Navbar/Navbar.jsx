import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContexto } from "./Menu Context/MenuContext";

import {
  NavbarWrapper,
  LinksWrapperStyled,
  PagesWrapper,
  HomeContainerStyled,
  LinkContainerStyled,
  UserContainerStyled,
  CartContainerStyled,
  MenuContainerStyled,
  NavLinkStyled,
} from "./NavbarStyles";

import { motion } from "framer-motion";

import { BiSolidHomeHeart, BiSolidUser } from "react-icons/bi";

import { BsBagHeart } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

  const { state, dispatch } = useContext(MenuContexto);

  const sizeIcon = 25;

  return (
    <NavbarWrapper>
      <a>
        <img
          src="../../../public/images/Logo.png"
          alt="Logo"
          style={{ width: "90%", height: "90%" }}
        />
      </a>

      <LinksWrapperStyled>
        <PagesWrapper className={state.isMenuOpen ? "open" : ""}>
          <Link to="/about-us">Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
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

        <CartContainerStyled>
          <BsBagHeart size={sizeIcon} />
        </CartContainerStyled>

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
