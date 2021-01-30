import React, { useEffect, useState } from "react"
import Layout from "../../Layout"
import { Helmet } from 'react-helmet'
import Heading from "../../../components/elements/Heading/Heading"
import HeadingIntroHalf from "../../../components/elements/Heading/HeadingIntroHalf"
import tw from 'twin.macro'
import Img from 'gatsby-image'
import GridMaxWidthContainer from "../../../components/elements/Atoms/GridMaxWidthContainer"
import styled from 'styled-components'
// import Embed from 'react-embed';
// import ReactPlayer from 'react-player'
import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import {transition} from '../../../helpers/framer-defaults'
import ValueCircle from "../../../components/elements/Studio/ValueCircle"
import StyledStudioPage from '../../../components/elements/Studio/StyledStudioPage'

const StudioPageLayout = ({data}) => {
  const [studio, setStudio] = useState(null)
  const [values, setValues] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if(data) {
      setStudio(data.wordpress.pages.nodes[0])
    }
    if(data && data.wordpress.pages.nodes[0].studioACF.valuesSection.values) {
      setValues(
        [
          {
            title: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value1.title,
            description: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value1.description
          },
          {
            title: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value2.title,
            description: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value2.description
          },
          {
            title: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value3.title,
            description: data.wordpress.pages.nodes[0].studioACF.valuesSection.values.value3.description
          },
        ]
      )
    }
  }, [data, setStudio, setValues])

  let interval

  useEffect(() => {
    if(values) {
      interval = setInterval(() => {
        if(counter < values.length - 1) {
          setCounter(counter => counter + 1)
          console.log(counter)
        } else {
          setCounter(0)
          console.log(counter)
        }
      }, 5000)
      return () => clearInterval(interval);
    }
  }, [counter, values, interval])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const items = document.querySelectorAll(".value-items li")
      items.forEach(item => {
        if(item.dataset.counter == counter) {
          item.querySelector("div").classList.add("active")
        }
      })
      console.log("items", items)
    }
  }, [values, counter])

  return (
    <Layout>
        <Helmet>
            <title>WAU Architetti • {studio ? `${studio.title}` : "Studio"}</title>
        </Helmet>
        <StyledStudioPage>
          <Heading>
            <HeadingIntroHalf
              breadcrumb={studio ? studio.title : "Studio"}
              heading={studio ? studio.pagesACF.title : ""}
              subheading={studio ? studio.pagesACF.introduzione : ""}
            />
          </Heading>
          <div className="studio-content" tw="w-full flex justify-center">
            <GridMaxWidthContainer>
              {
                studio && studio.studioACF.videonative &&
                <div className="cover-image cover-image-fullscreen video-container" tw="mb-8 md:mb-0">
                  {/* <ReactPlayer url={studio.studioACF.video} autoplay="true" controls="false" options={{autoplay:true}} /> */}
                  {/* <Embed url={studio.studioACF.video} autoplay={true} controls={false} /> */}
                  {/* <iframe width="1920" height="1080" src="https://www.youtube.com/embed/cW7VDF0HI9Y?controls=0&autoplay=1&allowfullscreen=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true}></iframe> */}
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    id="myVideo">
                    <source src={studio.studioACF.videonative.mediaItemUrl} type="video/mp4" />
                  </video>
                </div>
              }
              {
                studio && studio.studioACF &&
                <section tw="my-6 md:my-16 xl:my-48">
                  <div tw="grid grid-cols-12">
                    {
                      studio.studioACF.valuesSection.title &&
                      <div tw="text-3xl md:text-5xl mb-4 text-center col-span-12 lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">{parse(studio.studioACF.valuesSection.title)}</div>
                    }
                    <figure tw="col-span-full text-center flex flex-col items-center">
                      <ul className="value-items" tw="my-8 md:my-16 w-full flex justify-center">
                      {
                        values &&
                        values.map((value, index) => (
                            <li
                              key={Math.floor(Math.random() * (100 - 999) + 100)}
                              tw="p-2 md:p-4 list-none"
                              data-counter={index}
                              onClick={() => setCounter(index)}
                              onMouseOver={() => setCounter(index)}
                            >
                              <ValueCircle value={value} index={index} />
                            </li>
                        ))
                      }
                      </ul>
                      <div tw="relative w-full flex justify-center pb-56 md:pb-32">
                        {
                          values.map((value, index) => (
                            <motion.figcaption
                              tw="absolute mx-auto text-center w-full lg:w-2/3 mx-auto"
                              animate={
                                counter === index
                                ? {y:0, opacity: 1, transition: {...transition, delay:0.15}}
                                : {y:40, opacity: 0, transition: {...transition, duration: 0.2}}}
                              initial={{y:40, opacity: 0, transition: {...transition, duration: 0.2}}}
                              trasition={{...transition}}
                              exit={{y:40, opacity: 0}}
                            >
                              <h4 tw="text-3xl font-bold mb-4 md:mb-8">{value.title}</h4>
                              <p>
                                {
                                  value.description
                                }
                              </p>
                            </motion.figcaption>
                          ))
                        }
                      </div>
                    </figure>
                  </div>
                </section>
              }
              {
                studio && studio.studioACF && studio.studioACF.image1 &&
                <figure className="cover-image cover-image-fullscreen" tw="my-8">
                  {
                    studio.studioACF.image1.imageFile ?
                    <Img
                        tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                        fixed={studio.studioACF.image1.imageFile.childImageSharp.fixed}

                    /> :
                    <img
                      src={studio.studioACF.image1.sourceUrl}
                      alt={studio.studioACF.image1.altText}
                      tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                    />
                  }
                </figure>
              }
              {
                studio && studio.studioACF &&
                <section tw="my-10 md:my-16 xl:my-48">
                  <div tw="grid grid-cols-12">
                    {
                      studio.studioACF.sectionApproach.title &&
                      <div tw="text-3xl md:text-5xl col-span-12 md:col-span-6 mb-8">{parse(studio.studioACF.sectionApproach.title)}</div>
                    }
                    {
                      studio.studioACF.sectionApproach.content &&
                      <div tw="text-lg col-span-12 md:col-span-6 md:col-start-7">{parse(studio.studioACF.sectionApproach.content)}</div>
                    }
                  </div>
                </section>
              }
              {
                studio && studio.studioACF && studio.studioACF.image2 &&
                <figure className="cover-image cover-image-fullscreen" tw="my-8">
                  {
                    studio.studioACF.image2.imageFile ?
                    <Img
                        tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                        fixed={studio.studioACF.image2.imageFile.childImageSharp.fixed}

                    /> :
                    <img
                      src={studio.studioACF.image2.sourceUrl}
                      alt={studio.studioACF.image2.altText}
                      tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                    />
                  }
                </figure>
              }
              {
                studio && studio.studioACF &&
                <section tw="my-10 md:my-16 xl:my-48">
                  <div tw="grid grid-cols-12">
                    {
                      studio.studioACF.sectionEnd.title &&
                      <div tw="text-3xl md:text-5xl col-span-12 md:col-span-6 mb-8">{parse(studio.studioACF.sectionEnd.title)}</div>
                    }
                    {
                      studio.studioACF.sectionEnd.content &&
                      <div tw="text-lg col-span-12 md:col-span-6 md:col-start-7">{parse(studio.studioACF.sectionEnd.content)}</div>
                    }
                  </div>
                </section>
              }
            </GridMaxWidthContainer>
          </div>
        </StyledStudioPage>
     </Layout>
    )
}

export default StudioPageLayout
