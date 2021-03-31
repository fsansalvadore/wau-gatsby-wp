import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import parse from 'html-react-parser'
import { motion } from 'framer-motion'
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
            {
              y: "170%",
              // skewY: 4,
              opacity: 0
            },
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
                <motion.div tw="text-3xl line-height[110%] letter-spacing[-0.04rem] lg:(text-5xl line-height[90%] letter-spacing[-0.01rem]) mb-8 w-3/4">{parse(title)}</motion.div>
              </div>
            }
            {
              content &&
              <div className="st-content st-anim">
                <motion.span tw="block md:text-xl mb-4 w-3/4">{parse(content)}</motion.span>
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
      .st-title {
        ${tw`w-full`}

        > * {
          ${tw`w-full lg:w-3/4`}
        }
      }
      .st-content {
        ${tw`w-full`}

        > * {
          ${tw`w-full`}
        }
      }
    `,
    $hasTextCenter && css`
      ${tw`text-center flex justify-center items-stretch`}
    
      > div, > div > div {
        ${tw`text-center flex justify-center`}
      }
    `
])