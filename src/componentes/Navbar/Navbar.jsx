import React from 'react'
import { HomeContainerStyled, LinkContainerstyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, SpanStyled, UserContainerStyled, UserNavStyled } from './NavbarStyles'

import {motion} from "framer-motion"

import {BiSolidHomeHeart} from "react-icons/bi"
import {BiSolidUser} from "react-icons/bi"
import {FiMenu} from "react-icons/fi"

import Logo from "/images/Logo.png"

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="/#">
                <img src={Logo} alt= "logo" style={{ width: '90%', height: '90%' }} />
            </a>
        </div>

        <LinksContainerStyled>
        
            <HomeContainerStyled>
                <motion.div whileTap={{scale: 0.95}}>
                    <a href="/#"> 
                        <LinkContainerstyled>
                            <BiSolidHomeHeart/>
                        </LinkContainerstyled>
                        Home
                    </a>  
                </motion.div>

            </HomeContainerStyled>

            <UserNavStyled>
                <UserContainerStyled>
                    <SpanStyled>
                        Inicia sesión
                    </SpanStyled>
                    
                    <BiSolidUser/>
                </UserContainerStyled>
            </UserNavStyled>

            <motion.div whileTap={{scale: 0.95}}>                    
                <MenuContainerStyled>
                    <FiMenu/>
                </MenuContainerStyled>
            </motion.div>


        </LinksContainerStyled>


    </NavbarContainerStyled>
  )



}

export default Navbar
