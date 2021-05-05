import React from "react";
import tw from "twin.macro";

const StyledGridMaxWidthContainer = tw.div`relative w-full grid grid-cols-12 px-4 sm:px-8 md:px-16`;

// eslint-disable-next-line import/no-default-export
export default ({ children, ...props }) => {
  return (
    <StyledGridMaxWidthContainer {...props}>
      {children}
    </StyledGridMaxWidthContainer>
  );
};
