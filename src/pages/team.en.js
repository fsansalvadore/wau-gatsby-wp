import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const TeamPageEng = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Team</title>
      </Helmet>
      <div>
        <h1>Team ENG</h1>
      </div>
    </Layout>
  )
}

export default TeamPageEng
