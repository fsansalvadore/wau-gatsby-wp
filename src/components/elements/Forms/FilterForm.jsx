import React from 'react'
import styled from 'styled-components'
import tw, { css } from 'twin.macro'
import antd from "./antd-custom.css";

export default ({children, otherProps}) => {
    return (
        <StyledFilterForm {...otherProps} styles={antd.styles} >
            {children}
        </StyledFilterForm>
    )
}

const StyledFilterForm = styled.form(() => [
    css`
        ${tw``}

        .ant-select {
            .ant-select-selector {
                ${tw`border-black`}
                color: black !important;
            }
        }
    `
])