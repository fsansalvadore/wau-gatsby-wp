import React from "react";
import { css } from "twin.macro";
import styled from "styled-components";

const StyledGridMaxWidthContainer = styled.div(() => [
  css`
    // max-width: 1600px;
  `,
]);

// eslint-disable-next-line import/no-default-export
export default ({ children, ...props }) => {
  return (
    <StyledGridMaxWidthContainer
      tw="relative w-full grid grid-cols-12 px-8 md:px-16"
      {...props}
    >
      {children}
    </StyledGridMaxWidthContainer>
  );
};
