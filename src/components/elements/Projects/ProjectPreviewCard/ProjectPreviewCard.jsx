import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';
import { transition } from '../../../../helpers/framer-defaults'
// import { WPImage } from '../../WPImage/WPImage'

const StyledProjectPreviewCard = styled(motion.li)`
    height: 300px;

    * {
        color: var(--white);
    }
`

const ProjectPreviewCard = ({
    link,
    imgSrc,
    imgAlt,
    title,
    year,
    location,
    ...otherProps
}) => {
    return (
        <LazyLoad height={300}>
            <StyledProjectPreviewCard
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{...transition, duration: 0.8}}
                tw="relative flex items-end w-full"
                {...otherProps}
            >
                <Link to={link}>
                <div tw="absolute w-full bottom-0 py-8 px-8 md:px-16 z-10">
                    <div tw="">
                        <motion.p>{year} - {location}</motion.p>
                    </div>
                    <div tw="overflow-hidden">
                        <h2>{title ? title : "Missing title project"}</h2>
                    </div>
                </div>
                {/* <WPImage
                    src={imgSrc ? imgSrc : ""}
                    alt={imgAlt ? imgAlt : ""}
                    width={100}
                /> */}
                <img
                    tw="absolute w-full h-full top-0 right-0 bottom-0 left-0"
                    src={imgSrc ? imgSrc : ""}
                    alt={imgAlt ? imgAlt : ""}
                    />
                </Link>
            </StyledProjectPreviewCard> 
        </LazyLoad>
    )
}

export default ProjectPreviewCard