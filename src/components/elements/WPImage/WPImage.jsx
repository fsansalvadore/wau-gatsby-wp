// import React from 'react'
// import Img from "gatsby-image"
// import parse from 'html-react-parser';
// import {useStaticQuery} from "gatsby"

// export const PostImage = ({src, alt, width}) => {
//     const {allWordpressWpMedia} = useStaticQuery(allMedia);
//     const originalSource = src.replace(/^(http?s:\/\/.+?\/.+?)-(\d+x\d+)\.(.+?)$/g, '$1.$3');
//     const image = allWordpressWpMedia.edges.find(({node}) => node.source_url === originalSource);
//     return image == null || image.node.localFile.childImageSharp == null ? (
//       <img
//         src={src}
//         alt={alt}
//         style={{width: width ? width : '100%'}}/>
//     ) : (
//       <Img
//         fluid={image.node.localFile.childImageSharp.fluid}
//         alt={alt}
//         style={{
//           width: width ? width + 'px' : '100%',
//           maxWidth: '100%'
//         }}/>
//     );
// };