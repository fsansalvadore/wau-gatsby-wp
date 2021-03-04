import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import Logo from '../Logo/Logo'
import GridMaxWidthContainer from './GridMaxWidthContainer'

export default ({lang}) => {
    const data = useStaticQuery(graphql`
        query GET_FOOTERMENU_BY_NAME {
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
        <StyledFooter>
            <GridMaxWidthContainer>
                <div tw="col-span-12 text-center lg:col-span-5 lg:text-left">
                    <Link to={lang == "it" ? "/" : "/en"}>
                        <Logo isMenuLight  />
                    </Link>
                </div>
                <div className="footer-list">
                    <h5>Naviga</h5>
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
                <div className="footer-list">
                    <h5>Chat</h5>
                    <ul>
                        <li><a href="mailto:info@wauarchitetti.com">info@wauarchitetti.com</a></li>
                        <li><a href="tel:+390118127237">(+39) 011 8127237</a></li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h5>Seguici</h5>
                    <ul>
                        <li><a href="https://www.facebook.com/wau.architetti">Facebook</a></li>
                        <li><a href="https://www.instagram.com/wau_architetti">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-lang-container" tw="col-span-12 lg:col-span-1">
                    <ul>
                        <li>
                            <a href="/">ITA</a>
                        </li>
                        <li>
                            <a href="/en">ENG</a>
                        </li>
                    </ul>
                </div>
                <hr tw="col-span-full my-8 opacity-50"/>
                <div tw="col-span-12 text-center lg:text-left lg:col-span-6" className="footer-inline-list">
                    <p tw="inline mr-4 text-sm">© WAU {new Date().getFullYear()}</p>
                    <ul tw="inline">
                        <li>
                            <Link to={lang === "it" ? "/privacy-policy" : "/en/privacy-policy"} tw="py-4" >Privacy Policy</Link>
                        </li>
                        <li>
                            <a href="javascript:void()" id="csconsentlink" tw="py-4">Cookie Settings</a>
                        </li>
                    </ul>
                </div>
                <div tw="col-span-12 text-center mt-6 lg:mt-0 lg:text-right lg:col-span-6 flex justify-center lg:justify-end" className="footer-inline-list">
                    <ul>
                        <li>
                            <a href="https://www.saglietti.it/" target="_blank" tw="py-4" >Design</a>
                        </li>
                        <li>
                            <a href="https://www.fsansalvadore.com/" target="_blank" tw="py-4" >Website</a>
                        </li>
                    </ul>
                </div>
            </GridMaxWidthContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer(() => [
    css`
        ${tw`relative z-40 w-full flex items-center py-8`}
        background: var(--purple);
        color: var(--white);

        h5 {
            ${tw`opacity-40 text-xs font-mono mb-4`}
        }

        a {
            ${tw`opacity-80 hover:opacity-100 visited:text-white text-white`}
        }
        .footer-list {
            ${tw`col-span-12 md:col-span-4 lg:col-span-2 text-center md:text-left my-2`}

            li {
                ${tw`text-sm mb-2 opacity-60 hover:opacity-100`}        
            }
        }
        
        .footer-lang-container {
            ${tw`w-full text-center md:text-left mt-4 md:mt-0`}
            li {
                ${tw`text-sm mb-2 mr-4 inline-block`}        
            }
            li:last-of-type {
                ${tw`mr-0`}        
            }
        }

        .footer-inline-list {
            li {
                ${tw`opacity-60 hover:opacity-100 text-sm inline-block mr-4`}
            }
        }
    `
])