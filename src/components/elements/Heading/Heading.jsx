import styled from 'styled-components'
import tw from 'twin.macro'

const Heading = styled.div`
    width: 100%;
    ${tw`p-8 pt-28 md:p-16 md:pt-40`}

    h1 {
        font-size: 3.25rem;
        ${tw`text-3xl md:text-5xl`}
    }

    .breadcrumbs, h1 {
       ${tw`mb-3 md:mb-8`}
    }
    
    .intro {
        ${tw`text-xl`}
    }
`

export default Heading