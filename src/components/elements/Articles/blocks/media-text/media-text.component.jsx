import React from 'react'
import parse from 'html-react-parser'

import './media-text.style.scss'

const MediaText = ({name, originalContent}) => {
    return (
        <div>
            {parse(originalContent)}
        </div>
    )
}

export default MediaText