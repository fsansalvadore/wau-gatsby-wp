import React from 'react';
import parse from 'html-react-parser';

const Spacer = ({name, originalContent}) => {
    return (
        <>
            {parse(originalContent)}
        </>
    )
}

export default Spacer