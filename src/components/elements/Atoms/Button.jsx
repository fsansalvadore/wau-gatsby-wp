import React from 'react'
import tw, { css } from 'twin.macro'
import styled from 'styled-components'

const StyledButton = styled.button(() => [
    css`
        ${tw`font-mono px-4 py-2 border border-solid border-black`}
        ${props => props.isWhite && tw`border-white`}
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