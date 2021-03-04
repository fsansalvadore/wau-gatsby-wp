import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import parse from 'html-react-parser'
import tw from 'twin.macro'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideContent = tw.div`flex! justify-center! items-center`;
const SlideText = styled.div`
  ${tw`text-wauGreen text-3xl`}

  p {
    ${tw`m-auto leading-8 font-light`}
    strong {
        ${tw`font-bold text-4xl`}
    }
    em {
      ${tw`block font-mono mt-4`}
    }
  }
`;

const SliderBlock = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    /* overflow: hidden; */

    .slick-slider,
    .slick-list {
        /* overflow: visible; */
        line-height: 0;
    }
    
    .slick-slider {
        /* overflow: visible; */
        img {
            cursor: ew-resize !important;
        }
    }

    .slick-slide {
      ${tw`p-0 flex items-center justify-center`}

      > div {
          ${tw`w-full flex justify-center`}
      }
    }

    .slick-dots {
      button::before, li.slick-active button::before {
        ${tw`bg-wauGreen text-wauGreen w-3 h-3 rounded-full`}
      }
    }

    * {
      outline: none !important;
      box-shadow: none !important;
    }
`

const WauCampSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    speed: 500,
  };

  return (
    <SliderBlock>
      <Slider {...settings}>
        {
          slides.map(slide => (
            <SlideContent key={Math.random}>
              <img src={slide.immagine.sourceUrl} alt=""/>
              <SlideText>
                {!!slide.testo && parse(slide.testo)}
              </SlideText>
            </SlideContent>
          ))
        }
      </Slider>
    </SliderBlock>
  )
}

export default WauCampSlider;