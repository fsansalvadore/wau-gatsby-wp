import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const StudioPageEng = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Studio</title>
      </Helmet>
      <div>
        <h1>Studio ENG</h1>
      </div>
    </Layout>
  )
}

export default StudioPageEng
