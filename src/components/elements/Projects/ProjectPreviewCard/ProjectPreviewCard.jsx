import React from 'react'
import tw from 'twin.macro'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';
import { transition } from '../../../../helpers/framer-defaults'
// import { WPImage } from '../../WPImage/WPImage'
import Img from 'gatsby-image'

const StyledProjectPreviewCard = styled(motion.div)`
    height: 300px;

    * {
        color: var(--white);
    }

    .gatsby-image-wrapper {
        width: 100% !important;
        height: 100% !important;
    }
`

const ProjectPreviewCard = ({
    data,
    link,
    imgSrc,
    imgAlt,
    title,
    year,
    featuredImage,
    location,
    ...otherProps
}) => {
    console.log(featuredImage)
    return (
        <LazyLoad height={300}>
            <StyledProjectPreviewCard
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{...transition, duration: 0.8}}
                tw="relative flex items-end w-full"
                {...otherProps}
            >
                <Link to={link} tw="w-full h-full">
                    <div tw="absolute w-full bottom-0 py-8 px-8 md:px-16 z-10">
                        <div tw="">
                            <motion.p>{year} - {location}</motion.p>
                        </div>
                        <div tw="overflow-hidden">
                            <h2>{title ? title : "Missing title project"}</h2>
                        </div>
                    </div>
                    {
                        featuredImage ?
                        <Img
                            fixed={featuredImage.node.imageFile.childImageSharp.fixed}
                            // fluid={featuredImage.node.imageFile.childImageSharp.fluid}
                            tw="absolute w-full h-full top-0 right-0 bottom-0 left-0"
                            alt={ imgAlt ? imgAlt : "Image" }
                        />
                        :
                        <img
                            tw="absolute w-full h-full top-0 right-0 bottom-0 left-0"
                            srcset={featuredImage.node.imageFile.childImageSharp.fluid.srcSet}
                            sizes={featuredImage.node.imageFile.childImageSharp.fluid.sizes}
                            src={featuredImage.node.imageFile.childImageSharp.fluid.src}
                            alt={imgAlt ? imgAlt : "Image"}
                            />
                    }
                </Link>
            </StyledProjectPreviewCard> 
        </LazyLoad>
    )
}

export default ProjectPreviewCard