import React from 'react'
import tw, { css } from 'twin.macro'
import styled from 'styled-components'

export default ({value, index}) => {
    return (
        <StyledValueCircle tw="flex" data-counter={index} >
          <p>{value.title}</p>
        </StyledValueCircle>
    )
}

const StyledValueCircle = styled.div(() => [
    css`
      width: 28vw;
      height: 28vw;
      max-width: 300px;
      max-height: 300px;
      ${tw`flex items-center justify-center rounded-full border-2 border-solid border-gray-800 opacity-50 hover:opacity-100 transition-opacity transition-transform duration-200 ease-in-out cursor-pointer`}
      p {
        ${tw`font-bold! text-xs md:text-base`}
      }

      &.active {
        transition: transform 0.3s ease;
        border-color: var(--green) !important;
        opacity: 1 !important;
        border-width: 3px !important;
        color: var(--purple) !important;
        transform: scale(1.1);
      }
    `
])