import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import Heading from "../components/elements/Heading/Heading"
import HeadingIntroHalf from "../components/elements/Heading/HeadingIntroHalf"
import tw from 'twin.macro'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const TeamPageIta = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Team</title>
      </Helmet>
      <div>
        <Heading>
          <HeadingIntroHalf
            breadcrumb="Team ita"
            heading="Duis aute irure dolor in reprehenderit."
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Heading>
      </div>
    </Layout>
  )
}

export default TeamPageIta
