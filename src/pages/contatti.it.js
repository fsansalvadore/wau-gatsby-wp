import React from "react"
import Layout from "../components/Layout"
import { Helmet } from 'react-helmet'
import Heading from "../components/elements/Heading/Heading"
import tw from 'twin.macro'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const ContattiPage = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Contatti</title>
      </Helmet>
      <div>
        <Heading>
          <p className="breadcrumbs mono">Contacts</p>
          <h1>Contacts ITA</h1>
        </Heading>
      </div>
    </Layout>
  )
}

export default ContattiPage
