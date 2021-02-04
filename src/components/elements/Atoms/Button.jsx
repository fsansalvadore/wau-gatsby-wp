import React from 'react'
import tw, { css } from 'twin.macro'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledButton = styled(Link)(() => [
    css`
        ${tw`font-mono px-4 py-2 border border-solid text-black text-base font-light hover:bg-black`}
        color: var(--black);
        background: transparent;
        border-color: var(--black);
        
        &:hover {
            border-color: var(--black);
            background: var(--black) !important;
        }   
    `
])

export default (({
    children,
    ...props
}) => {
    return (
        <StyledButton {...props} >{children}</StyledButton>
    )
})