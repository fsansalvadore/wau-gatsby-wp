import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from './Button'

export default ({
    title,
    content,
    link,
    cta,
    ...otherProps
}) => {
    const contactsTextBlockRef = useRef(null)
    
    useEffect(() => {
        if(typeof window !== `undefined` && typeof document !== `undefined` && contactsTextBlockRef.current) {
            gsap.registerPlugin(ScrollTrigger)
            const title     = contactsTextBlockRef.current.querySelector(".st-title h5")
            const content   = contactsTextBlockRef.current.querySelector(".st-content p")
            const link      = contactsTextBlockRef.current.querySelector(".st-link > div")

            let sectionTextTL = gsap.timeline({
              scrollTrigger: {
                trigger: contactsTextBlockRef.current,
                start: "top 80%",
              }
            })
          
            ScrollTrigger.defaults({
                immediateRender: false,
                ease: Power1.inOut
            })
          
            sectionTextTL
            .fromTo([title, content, link],
            {y: "170%", skewY: 4, opacity: 0},
            {duration: 0.8, skewY: 0, opacity: 1, ease: Power1.easeOut, y: "0",stagger: 0.1},
            contactsTextBlockRef.current)
          }
    }, [contactsTextBlockRef.current])

    return (
        <StyledSectionTextBlock {...otherProps} ref={contactsTextBlockRef} >
            <div className="left" tw="col-span-full md:col-span-3">
                {
                    title &&
                    <div className="st-title">
                        <motion.h5 tw="text-4xl mb-4 w-3/4">{title}</motion.h5>
                    </div>
                }
            </div>
            <div className="right" tw="col-span-full md:col-span-5 md:col-start-4">
                {
                    content &&
                    <div className="st-content">
                        <motion.p tw="text-xl mb-4 w-3/4">{parse(content)}</motion.p>
                    </div>
                }
                <div className="st-link" tw="py-8">
                    <div>
                        <Button to={link ? link : "#"}>
                            {
                                cta ? cta : "Scopri di più"
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </StyledSectionTextBlock>
    )
}

const StyledSectionTextBlock = styled(motion.div)(() => [
    css`
        ${tw`grid grid-cols-8`}
        .right {
            ${tw`w-full flex flex-col `}
        }

        > div > div {
            ${tw`overflow-hidden relative`}
        }
    `
])