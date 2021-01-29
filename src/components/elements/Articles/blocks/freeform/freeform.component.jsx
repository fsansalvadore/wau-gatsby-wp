import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components'

const FreeformStyled = styled.div`
    padding: 5rem 4rem;
    margin: 0 auto;
    max-width: 700px;

    p {
        font-size: 0.9rem;
        margin: 0 auto;
        max-width: 700px;
        line-height: 1.4rem;
        font-weight: 800;
        letter-spacing: 0;
    }
`

const Freeform = ({name, originalContent}) => {
    return (
        <FreeformStyled>
            {parse(originalContent)}
        </FreeformStyled>
    )
}

export default Freeform