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
    ${tw`width[30vw] height[30vw] sm:max-width[200px] sm:max-height[200px] md:max-width[270px] md:max-height[270px] flex items-center justify-center rounded-full border-2 border-solid border-gray-800 opacity-50 hover:opacity-100 transition-all transform duration-200 ease-in-out cursor-pointer`}
    p {
      ${tw`font-bold! text-10 sm:text-base`}
    }

    &.active {
      transition: transform 0.3s ease;
      border-color: var(--green) !important;
      opacity: 1 !important;
      color: var(--purple) !important;
      ${tw`scale[1.1]`}
    }
  `,
]);
