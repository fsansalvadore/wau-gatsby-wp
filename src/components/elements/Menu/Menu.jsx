import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { transition } from '../../../helpers/framer-defaults'

import LanguageSelector from '../LanguageSelector'
import SocialIcons from '../SocialIcons/SocialIcons'

const MenuContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 100;
`
const MenuSlider = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 550px;
    background: linear-gradient(317.03deg, var(--green) -33.22%, var(--purple) 78.8%);
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px;
    padding: 4rem;
    will-change: width, transform;
    transition: width 0.3s ease;

    * {
      color: var(--white);
    }

    .menu-top {
        flex: 1;
        display: flex;
        align-items: center;

        a {
            padding: 10px;
            font-size: 1.8rem;
            line-height: 4rem;
            opacity: 0.3;
            transition: opacity 0.15s ease;
            will-change: opacity;

            &:hover {
                opacity: 1;
            }
        }
    }

    .menu-bottom {
        display: flex;
        flex-direction: column;

        .lang-container {
            display: flex;
            align-items: flex-end;
        }
    }
    
    @media screen and (min-width: 768px) {
        width: 60%;
        
        .menu-bottom {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`


export const DimOverlay = styled(motion.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 9998;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
    display: none;
`

const sliderVariants = {
    initial: {
        x: "100%"
    },
    show: {
        x: 0,
    },
    hidden: {
        x: "100%"
    }
}

export const menuDim = {
    initial: {
        opacity: 0,
        display: "none",
    },
    hidden: { 
        opacity: 0,
        display: "block",
        transitionEnd: {
            display: "none",
        },
    },
    show: {
        opacity: 1,
        display: "block",
    }
}

const Menu = ({lang, isOpen}) => {
    const data = useStaticQuery(graphql`
        query GET_MENU_BY_NAME {
            wordpress {
                menus {
                    nodes {
                        count
                        name
                        menuItems {
                            nodes {
                                id
                                databaseId
                                title
                                url
                                cssClasses
                                description
                                label
                                linkRelationship
                                target
                                parentId
                                path
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <MenuContainer>
            <MenuSlider
                variants={sliderVariants}
                animate={isOpen ? "show" : "hidden"}
                initial="initial"
                transition={{...transition, duration: 0.4}}
            >
                <div className="menu-top">
                    <ul>
                        {
                            lang === "it" ?
                            data.wordpress.menus.nodes.find(node => node.name === "Menu ita").menuItems.nodes.map(item => (
                                <li key={item.id}>
                                    <Link to={item.path.replace("/dev/wau/wp", "")}>{item.label}</Link>
                                </li>
                            )) :
                            data.wordpress.menus.nodes.find(node => node.name === "Menu eng").menuItems.nodes.map(item => (
                                <li key={item.id}>
                                    <Link to={item.path.replace("/dev/wau/wp", "")}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="menu-bottom">
                    <div className="menu-bottom-info">
                        <div className="menu-footer-info">
                            <h3>WAU ARCHITETTI</h3>
                            <a target="_blank" href="https://www.google.com/maps/place/Via+Po,+1,+10124+Torino+TO/data=!4m2!3m1!1s0x47886d7075788f65:0xfbab35a5fc5276c2?sa=X&ved=2ahUKEwjD8czu4onuAhXJ5KQKHc0nCyUQ8gEwAHoECAYQAQ">Via Po, 1 - 10124 Torino, Italia</a>
                            <p>T <a target="_blank" href="tel:+390118127237">+39 011 812 7237</a></p>
                        </div>
                        <div className="social-icons">
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="lang-container">
                        <LanguageSelector />
                    </div>
                </div>
            </MenuSlider>
            <DimOverlay
                variants={menuDim}
                initial="initial"
                animate={isOpen ? "show" : "hidden"}
                transition={{...transition, duration: 0.4}}    
            />
        </MenuContainer>
    )
}

export default Menu