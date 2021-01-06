import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const NewsPageEng = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • News</title>
      </Helmet>
      <div>
        <h1>News ENG</h1>
      </div>
    </Layout>
  )
}

export default NewsPageEng
