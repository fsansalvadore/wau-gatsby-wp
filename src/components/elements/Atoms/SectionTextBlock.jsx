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
    label,
    title,
    content,
    link,
    cta,
    fullWidthContent,
    hasTextCenter,
    ...otherProps
}) => {
    const sectionRef = useRef(null)
    
    useEffect(() => {
        if(typeof window !== `undefined` && typeof document !== `undefined` && sectionRef.current) {
            gsap.registerPlugin(ScrollTrigger)
            // const label     = sectionRef.current.querySelector(".st-label h4")
            // const title     = sectionRef.current.querySelector(".st-title h5")
            // const content   = sectionRef.current.querySelector(".st-content p")
            // const link      = sectionRef.current.querySelector(".st-link > div")
            const items      = sectionRef.current.querySelectorAll(".st-anim > *")

            let sectionTextTL = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              }
            })
          
            ScrollTrigger.defaults({
                immediateRender: false,
                ease: Power1.inOut
            })
          
            sectionTextTL
            .fromTo([items],
            {y: "170%", skewY: 4, opacity: 0},
            {duration: 0.8, skewY: 0, opacity: 1, ease: Power1.easeOut, y: "0",stagger: 0.1},
            sectionRef.current)
          }
    }, [sectionRef.current])

    return (
        <StyledContactsTextBlock
          $fullWidthContent={fullWidthContent}
          $hasTextCenter={hasTextCenter}
          {...otherProps}
          ref={sectionRef}
        >
            {
              label &&
              <div className="st-label st-anim">
                <motion.h4 tw="font-mono text-sm mb-4">{label}</motion.h4>
              </div>
            }
            {
              title &&
              <div className="st-title st-anim">
                <motion.h5 tw="text-3xl lg:text-5xl mb-4 w-3/4">{title}</motion.h5>
              </div>
            }
            {
              content &&
              <div className="st-content st-anim">
                <motion.p tw="text-xl mb-4 md:mb-8 w-3/4">{parse(content)}</motion.p>
              </div>
            }
            {
              link && (
                <div className="st-link st-anim" tw="py-8">
                  <div>
                    <Button to={link || "#"}>
                      {
                        cta ? cta : "Scopri di più"
                      }
                    </Button>
                  </div>
                </div>
              )
            }
        </StyledContactsTextBlock>
    )
}

const StyledContactsTextBlock = styled(motion.div)(({$fullWidthContent, $hasTextCenter}) => [
    css`
      ${tw`w-full flex flex-col`}

      > div {
          ${tw`overflow-hidden relative`}
      }
    `,
    $fullWidthContent && css`
      p {
        ${tw`w-full`}
      }
    `,
    $hasTextCenter && css`
      > div {
        ${tw`text-center flex justify-center`}
      }
    `
])