import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import { motion } from 'framer-motion'
import Logo from '../../../assets/WAU-Logo-white.svg'
import { transition, loaderVariants } from '../../../helpers/framer-defaults'

export default () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onload = () => {
                setIsLoaded(true)
            }
            setTimeout(() => {
                setIsLoaded(true)
            }, 2000)
        }
    }, [setIsLoaded])

    return (
        <StyledPageLoader
            animate={isLoaded ? "hidden" : "initial"}
            initial="initial"
            variants={loaderVariants}
            exit={{y: "-100%", ...transition}}
            transition={{...transition, duration: 0.4}}
        >
            <img src={Logo} alt="WAU Architetti logo" className="loader-logo" />
        </StyledPageLoader>
    )
}

const StyledPageLoader = styled(motion.div)(() => [
    css`
        ${tw`fixed w-screen h-screen left-0 right-0 top-0 bottom-0 flex items-center justify-center`}
        background: var(--gradientBg);
        z-index: 9999;
        pointer-events: none;

        .loader-logo {
            width: 40%;
            max-width: 200px;
            height: auto;
            animation: pulse 0.6s ease infinite alternate both;
        }

        @keyframes pulse {
            from {
                opacity: 1;
            }
            to {
                opacity: 0.5;
            }
        }
    `
])