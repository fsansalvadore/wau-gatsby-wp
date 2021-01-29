import React from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'

import './gallery.style.css'

const GalleryContainer = styled.div`
    padding: 0 4rem;
`

const Gallery = ({originalContent}) => {
    return(
        <GalleryContainer>
            {parse(originalContent)}
        </GalleryContainer>
    )
}

export default Gallery