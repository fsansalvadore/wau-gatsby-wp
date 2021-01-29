import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBlock = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: visible;

    .slick-slider,
    .slick-list {
        overflow: visible;
        line-height: 0;
    }
    
    .slick-slider {
        overflow: visible;
            img {
                cursor: ew-resize !important;
            }
    }

    .slick-slide {
        padding: 0px;
    }
    * {
        outline: none !important;
        box-shadow: none !important;
    }
`

const Carousel = ({name, saveContent, dynamicContent, innerBlocks }) => {
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        centerPadding: "70px",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <SliderBlock>
            <Slider {...settings}>
                {
                    innerBlocks.map(slide => (
                        <div key={JSON.parse(slide.attributes.background).backgroundImage.id}>
                            <img src={JSON.parse(slide.attributes.background).backgroundImage.link} alt=""/>
                        </div>
                    ))
                }
            </Slider>
        </SliderBlock>
    )
}

export default Carousel