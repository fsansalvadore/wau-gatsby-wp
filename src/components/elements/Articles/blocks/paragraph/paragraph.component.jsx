import React from 'react';
import parse from 'html-react-parser';

import ParagraphStyled from './paragraph.styled'

const Paragraph = ({name, originalContent}) => {
    return (
        <ParagraphStyled>
            {parse(originalContent)}
        </ParagraphStyled>
    )
}

export default Paragraph