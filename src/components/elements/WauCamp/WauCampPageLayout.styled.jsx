import tw, { css } from 'twin.macro'
import styled from 'styled-components'

const StyledWAUCampPage = styled.div(() => [
    css`
    .studio-content > div {
      // max-width: 1600px;
  
      > * {
        ${tw`col-span-12`}
      }
      
      > p, 
      > ul,
      > ol,
      > h1,
      > h2,
      > h3,
      > h4,
      > .wp-block-quote {
        ${tw`col-span-12 md:col-span-7 md:col-start-6 my-4 mb-8 md:mb-8 xl:mb-8`}
      }
  
      ul {
        ${tw`pl-4`}
      }
  
      iframe.p4-_1gxhi00 {
        height: 56vw !important;
      }
      
      .video-container {
        iframe, video {
          width: 100vw !important;
          // height: 56vw !important;
        }
        video:focus { outline: none; }
      }
  
      .player-wrapper {
        position: relative;
        padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
      }
      
      .react-player {
        position: absolute;
        top: 0;
        left: 0;
      }
  
      p {
        line-height: 1.6rem;
        font-weight: 200;
        ${tw`md:text-lg mb-4 md:mb-8`}
      }
      
      section p:last-of-type {
        ${tw`md:text-lg mb-0`}
      }
  
      > .wp-block-columns {
        ${tw`flex flex-col md:flex-row`}
  
        .wp-block-column {
          flex-grow: 1;
          ${tw`mr-0 md:mr-4`}
        }
        
        .wp-block-column:last-of-type {
          ${tw`mr-0`}
        }
      }
  
      .wp-block-embed {
        iframe {
          width: 100%;
          height: 57vw;
        }
      }
  
      > .wp-block-image.size-large {
        grid-column: 1 / span 12;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        max-width: 1000%;
        width: auto;
        
        img {
          width: 100%;
          height: auto;
        }
      }
  
      .wp-block-separator {
        ${tw`my-6 md:my-12 xl:my-32`}
      }
      .wp-block-image {
        ${tw`my-12 xl:my-32`}
        
        img {
          ${tw`w-full h-auto`}
        }
      }
    }
    `
  ])

  export default StyledWAUCampPage