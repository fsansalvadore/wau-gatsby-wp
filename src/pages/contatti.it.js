import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const ContattiPage = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Contatti</title>
      </Helmet>
      <div>
        <h1>Contatti ITA</h1>
      </div>
    </Layout>
  )
}

export default ContattiPage
