import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import {
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

const StyledSocialShare = styled.div`
    ${tw`flex items-center`}

    .share-icons > * {
        margin: 2px 4px 2px 2px !important;

        ${tw`opacity-70 hover:opacity-100`}
    }

    .share-icons {
        ${tw`relative flex items-center`}

        button {
            ${tw`flex items-center`}
        }
        svg path {
            fill: var(--black) !important;
        }

        &:before {
            content: '–';
            position: absolute;
            left: -16px;
            font-weight: bold;
            color: var(--black);
        }
    }
`

const iconStyle = {
    fill: "transparent",
}

export default ({lang}) => {
    const [location, setLocation] = useState("")

    useEffect(() => {
        if (typeof window !== `undefined`) {
            setLocation(window.location.href)
        }
    }, [setLocation])
    
    return (
        <StyledSocialShare className="social-share">
            <p tw="inline-flex font-bold!">{lang === "it" ? "Condividi" : "Share"}</p>
            <div tw="inline-flex ml-8" className="share-icons">
                <EmailShareButton url={location}>
                    <EmailIcon size={32} round={true} bgStyle={iconStyle} />
                </EmailShareButton>
                <FacebookShareButton url={location}>
                    <FacebookIcon size={32} round={true} bgStyle={iconStyle} />
                </FacebookShareButton>
                <LinkedinShareButton url={location}>
                    <LinkedinIcon size={32} round={true} bgStyle={iconStyle} />
                </LinkedinShareButton>
                <TwitterShareButton url={location}>
                    <TwitterIcon size={32} round={true} bgStyle={iconStyle} />
                </TwitterShareButton>
            </div>
        </StyledSocialShare>
    )
}