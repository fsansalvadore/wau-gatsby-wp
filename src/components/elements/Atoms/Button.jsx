import React from 'react'
import tw, { css } from 'twin.macro'
import styled from 'styled-components'

const StyledButton = styled.button(() => [
    css`
        ${tw`font-mono px-4 py-2 border border-solid text-black text-base font-light hover:bg-black`}
        color: var(--black);
        background: transparent;
        border-color: var(--black);
        
        &:hover {
            border-color: var(--black);
            background: var(--black);
            transform: scale(1.2);
        }   
    `
])

const Button = (({
    children,
    ...props
}) => {
    return (
        <StyledButton {...props} >{children}</StyledButton>
    )
})

export default Button