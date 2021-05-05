import React from "react";
import "twin.macro";
import Img from "gatsby-image";

const ImageWrapper = ({ image, imgAlt, ...rest }) => {
  if (!image) return null;

  if (image && image.imageFile) {
    return (
      <Img
        fixed={image.imageFile.childImageSharp.fixed}
        // fluid={image.node.imageFile.childImageSharp.fluid}
        tw="absolute w-full h-auto top-0 right-0 bottom-0 left-0"
        alt={imgAlt ? imgAlt : "Image"}
        {...rest}
      />
    );
  } else {
    return (
      <img
        tw="w-full h-auto top-0 right-0 bottom-0 left-0"
        src={image && image.sourceUrl}
        alt={imgAlt ? imgAlt : "Image"}
        {...rest}
      />
    );
  }
};

// eslint-disable-next-line import/no-default-export
export default ImageWrapper;
