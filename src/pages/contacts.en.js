import React from "react"
import Layout from "../components/LayoutComponent"
import { Helmet } from 'react-helmet'
import Heading from "../components/elements/Heading/Heading"
import tw from 'twin.macro'

// import loadable from '@loadable/component'

// const VideoSection = loadable(() => import('../components/organisms/video-section/video-section.component'))

const ContactsPage = () => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Contacts</title>
      </Helmet>
      <div>
        <Heading>
          <p className="breadcrumbs mono">Contacts</p>
          <h1>Contacts ENG</h1>
        </Heading>
      </div>
    </Layout>
  )
}

export default ContactsPage
