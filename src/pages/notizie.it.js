import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const NotiziePageIta = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Notizie</title>
      </Helmet>
      <div>
        <h1>Notizie ITA</h1>
      </div>
    </Layout>
  )
}

export default NotiziePageIta
