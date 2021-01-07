import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import LanguageSelector from "../components/elements/LanguageSelector"

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const IndexPage = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Home Page</title>
      </Helmet>
      <div>
        <h1>WAU ARCHITETTI ITA</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
