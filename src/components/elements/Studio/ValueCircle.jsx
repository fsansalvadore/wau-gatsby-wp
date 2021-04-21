import React from "react";
import tw, { css } from "twin.macro";
import styled from "styled-components";

// eslint-disable-next-line import/no-default-export
export default ({ value, index }) => {
  return (
    <StyledValueCircle tw="flex" data-counter={index}>
      <p>{value.title}</p>
    </StyledValueCircle>
  );
};

const StyledValueCircle = styled.div(() => [
  css`
    width: 28vw;
    height: 28vw;
    max-width: 300px;
    max-height: 300px;
    ${tw`w-auto height[100px] sm:width[23vw] sm:height[23vw] max-width[200px] max-height[200px] md:max-width[270px] md:max-height[270px] flex items-center justify-center rounded-full border-0 border-none sm:border-2 sm:border-solid border-gray-800 opacity-50 hover:opacity-100 transition-all transform duration-200 ease-in-out cursor-pointer`}
    p {
      ${tw`font-bold! text-base`}
    }

    &.active {
      p {
        ${tw`underline sm:no-underline`}
      }
      transition: transform 0.3s ease;
      border-color: var(--green) !important;
      opacity: 1 !important;
      color: var(--purple) !important;
      ${tw`scale[1.1]`}
    }
  `,
]);
