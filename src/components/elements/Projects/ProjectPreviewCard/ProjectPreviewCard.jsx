import React from "react";
import tw from "twin.macro";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Img from "gatsby-image";
import { transition } from "../../../../helpers/framer-defaults";

const StyledProjectPreviewCard = styled(motion.div)`
  // height: 300px;
  padding-bottom: 50%;

  * {
    color: var(--white);
  }

  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
  }

  .preview-card-info-container {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const ProjectPreviewCard = ({
  data,
  link,
  imgSrc,
  imgAlt,
  title,
  projectdate,
  featuredImage,
  location,
  ...otherProps
}) => {
  return (
    <LazyLoad height={300}>
      <StyledProjectPreviewCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, duration: 0.8 }}
        tw="relative flex items-end w-full"
        {...otherProps}
      >
        <Link
          to={link}
          tw="absolute right-0 bottom-0 left-0 top-0 w-full h-full"
        >
          <div
            className="preview-card-info-container"
            tw="absolute w-full bottom-0 py-8 px-8 md:px-16 z-10"
          >
            <div tw="mb-4">
              <motion.p>
                {/* {projectdate ? `${projectdate.split("/").slice(-1)[0]} - ` : ""} */}
                {location}
              </motion.p>
            </div>
            <div tw="overflow-hidden h-auto py-1">
              <motion.h2
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: 0.1, duration: 1 }}
              >
                {title ? title : "Missing title project"}
              </motion.h2>
            </div>
          </div>
          {featuredImage && featuredImage.node.imageFile ? (
            <Img
              fixed={featuredImage.node.imageFile.childImageSharp.fixed}
              // fluid={featuredImage.node.imageFile.childImageSharp.fluid}
              tw="absolute w-full h-full top-0 right-0 bottom-0 left-0 object-cover"
              alt={imgAlt ? imgAlt : "Image"}
            />
          ) : (
            <img
              tw="absolute w-full h-full top-0 right-0 bottom-0 left-0 object-cover"
              src={featuredImage && featuredImage.node.sourceUrl}
              alt={imgAlt ? imgAlt : "Image"}
            />
          )}
        </Link>
      </StyledProjectPreviewCard>
    </LazyLoad>
  );
};

export default ProjectPreviewCard;
