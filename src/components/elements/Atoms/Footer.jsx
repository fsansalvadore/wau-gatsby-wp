import React from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import GridMaxWidthContainer from './GridMaxWidthContainer'

export default ({lang}) => {
    return (
        <StyledFooter>
            <GridMaxWidthContainer>
                
            </GridMaxWidthContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer(() => [
    css`
        ${tw`flex items-center`}
    `
])