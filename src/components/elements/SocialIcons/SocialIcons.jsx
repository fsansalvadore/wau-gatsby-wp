import React, { useRef, useEffect } from 'react'
import SocialIcon from './SocialIcon'
import styled from 'styled-components'

const SocialIconsContainer = styled.div`
    a {
        margin-right: 10px;
        transition: opacity 0.25s ease;
    }

    a.social-icon:hover {
        opacity: 1 !important;
    }
`

const SocialIcons = () => {
    const socialIconsRef = useRef(null)

    useEffect(() => {
        const links = socialIconsRef.current.querySelectorAll("a")

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                socialIconsRef.current.querySelectorAll("a").forEach(
                    l => l.style.opacity = "0.5"
                )
                link.style.opacity = "1"
            })
            link.addEventListener('mouseout', () => {
                socialIconsRef.current.querySelectorAll("a").forEach(
                    l => l.style.opacity = "1"
                )
            })
        })
    })

    return (
        <SocialIconsContainer ref={socialIconsRef}>
            <SocialIcon isFacebook/>
            <SocialIcon isInstagram/>
            <SocialIcon isLinkedin/>
            <SocialIcon isSpotify/>
        </SocialIconsContainer>
    )
}

export default SocialIcons