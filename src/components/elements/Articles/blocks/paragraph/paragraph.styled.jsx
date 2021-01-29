import styled from 'styled-components'

const ParagraphStyled = styled.div`
    p {
        font-size: 1rem;
        padding: 5rem 2rem;
        margin: 0 auto;
        max-width: 700px;
        line-height: 150%;
        font-weight: 400;
        letter-spacing: 0rem;
    }

    @media (min-width: 900px) {
        padding: 5rem 4rem;
    }
`

export default ParagraphStyled