import React from 'react'
import parse from 'html-react-parser'

import './media-text.style.scss'

const MediaText = ({name, originalContent}) => {
    console.log('media text:')
    console.log(name)
    console.log(originalContent)

    return (
        <div>
            {parse(originalContent)}
        </div>
    )
}

export default MediaText