import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Menu from '../Menu/Menu';
import styled from "styled-components";
import { motion } from 'framer-motion'
import Logo from "../Logo/Logo";
import tw from 'twin.macro'
import { transition } from '../../../helpers/framer-defaults'

const Navbar = styled.div`
    position: fixed;
    z-index: 999;
    height: 80px;
    ${tw`fixed w-full py-0 px-8 md:px-16 flex items-center justify-between`}
`

const MenuBtn = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    opacity: 0.8;
    &:hover {
        cursor: pointer !important;
        opacity: 1;
    }

    .menu-icon, .close-icon {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .close-icon {
        border: 2px solid var(--white);
        
        span {
            position: absolute;
            width: 17px;
            height: 2px;
            background-color: var(--white);

            &:first-of-type {
                transform: rotate(45deg);
            }
            &:last-of-type {
                transform: rotate(-45deg);
            }
        }
    }
`

const openBtnVariant = {
    initial: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        display: "flex",
    },
    hidden: {
        opacity: 0,
        transitionEnd: {
            display: "none",
        },
    },
}
const closeBtnVariant = {
    initial: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        display: "flex",
    },
    hidden: {
        opacity: 0,
        transitionEnd: {
            display: "none",
        },
    },
}

const MainNav = ({lang}) => {
  const [isOpen, toggleMenu] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
        if(isOpen) {
            document.querySelector('body').style.overflowY = "hidden"
        } else {
            document.querySelector('body').style.overflowY = "auto"
        }
    }
  })
  
  return (
    <>
      <Navbar>
          <Link to={lang === "en" ? "/en/" : "/"}>
            <Logo />
          </Link>
        <MenuBtn as="a" onClick={() => toggleMenu(!isOpen)} isOpen={isOpen}>
                <motion.span
                    className="menu-icon"
                    variants={openBtnVariant}
                    animate={!isOpen ? "show" : "hidden"}
                    initial="initial"
                    exit={{opacity: 0, ...transition}}
                    transition={{...transition, duration: 0.4}}
                >
                    <span>Menu</span>
                </motion.span>
                <motion.div
                    className="close-icon"
                    variants={closeBtnVariant}
                    animate={isOpen ? "show" : "hidden"}
                    initial="initial"
                    exit={{opacity: 0, ...transition}}
                    transition={{...transition, duration: 0.4}}
                >
                    <motion.span></motion.span>
                    <motion.span></motion.span>
                </motion.div>
        </MenuBtn>
      </Navbar>
      <Menu lang={lang} isOpen={isOpen}/>
    </>
  )
}

export default MainNav;