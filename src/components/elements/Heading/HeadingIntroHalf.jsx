import React from "react";
import "twin.macro";

const HeadingIntroHalf = ({ breadcrumb, heading, subheading }) => {
  return (
    <>
      <p className="breadcrumbs mono">{breadcrumb}</p>
      <div tw="flex w-full flex-col xl:flex-row">
        <div tw="w-full xl:w-1/2">
          <h1 tw="leading-10">{heading}</h1>
        </div>
        <div className="intro" tw="w-full pl-0 xl:pl-8 xl:w-1/2">
          <p>{subheading}</p>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HeadingIntroHalf;
