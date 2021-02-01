import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import Logo from '../Logo/Logo'
import GridMaxWidthContainer from './GridMaxWidthContainer'

export default ({lang}) => {
    return (
        <StyledFooter>
            <GridMaxWidthContainer>
                <div tw="col-span-12 text-center lg:col-span-5 lg:text-left">
                    <Logo isMenuLight  />
                </div>
                <div className="footer-list">
                    <h5>Naviga</h5>
                    <ul>
                        <li><Link to="#">Home Page</Link></li>
                        <li><Link to="#">Home Page</Link></li>
                        <li><Link to="#">Home Page</Link></li>
                        <li><Link to="#">Home Page</Link></li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h5>Chat</h5>
                    <ul>
                        <li><Link to="#">Home Page</Link></li>
                        <li><Link to="#">Home Page</Link></li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h5>Seguici</h5>
                    <ul>
                        <li><Link to="#">Facebook</Link></li>
                        <li><Link to="#">Instagram</Link></li>
                    </ul>
                </div>
                <div className="footer-lang-container" tw="col-span-12 lg:col-span-1">
                    <ul>
                        <li>ITA</li>
                        <li>ENG</li>
                    </ul>
                </div>
                <hr tw="col-span-full my-8 opacity-50"/>
                <div tw="col-span-12 lg:col-span-6" className="footer-inline-list">
                    <p tw="inline mr-4 text-sm">© WAU {new Date().getFullYear()}</p>
                    <ul tw="inline">
                        <li>
                            <Link to="#" >Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div tw="col-span-12 lg:col-span-6 flex justify-end" className="footer-inline-list">
                    <ul>
                        <li>
                            <Link to="#" >Website Credits</Link>
                        </li>
                    </ul>
                </div>
            </GridMaxWidthContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer(() => [
    css`
        ${tw`w-full flex items-center py-8`}
        background: var(--purple);
        color: var(--white);

        h5 {
            ${tw`opacity-40 text-xs font-mono mb-4`}
        }

        a {
            ${tw`visited:text-white text-white`}
        }
        .footer-list {
            ${tw`col-span-12 md:col-span-4 lg:col-span-2 text-center md:text-left my-2`}

            li {
                ${tw`text-sm mb-2`}        
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
                ${tw`text-sm inline-block mr-4`}
            }
        }
    `
])