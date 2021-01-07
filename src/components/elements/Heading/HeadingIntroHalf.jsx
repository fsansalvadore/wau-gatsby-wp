import React from 'react'
import tw from 'twin.macro'

const HeadingIntroHalf = ({
    breadcrumb,
    heading,
    subheading,
}) => {
    return (
        <>
        <p className="breadcrumbs mono">{breadcrumb}</p>
          <div tw="flex w-full flex-col md:flex-row">
            <div tw="w-full md:w-1/2">
              <h1>{heading}</h1>
            </div>
            <div className="intro" tw="w-full pl-0 md:pl-8 md:w-1/2">
              <p>{subheading}</p>
            </div>
          </div>
        </>
    )
}

export default HeadingIntroHalf