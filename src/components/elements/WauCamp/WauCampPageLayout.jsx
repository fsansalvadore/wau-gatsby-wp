import React, { useEffect, useState } from "react"
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import Heading from "../Heading/Heading"
import HeadingIntroHalf from "../Heading/HeadingIntroHalf"
import tw from 'twin.macro'
import Img from 'gatsby-image'
import GridMaxWidthContainer from "../Atoms/GridMaxWidthContainer"
import parse from 'html-react-parser'
import { motion } from 'framer-motion'
import StyledWAUCampPage from './WauCampPageLayout.styled'

const WauCampPageLayout = ({data}) => {
  const [page, setPage] = useState(null)

  useEffect(() => {
    if(data) {
      setPage(data.wordpress.pages.nodes[0])
    }
  }, [data, setPage])

  return (
    <Layout>
        <Helmet>
            <title>WAU Architetti • {page ? `${page.title}` : "page"}</title>
        </Helmet>
        <StyledWAUCampPage>
          <Heading>
            <HeadingIntroHalf
              breadcrumb={page ? page.title : "page"}
              heading={page ? page.pagesACF.title : ""}
              subheading={page ? page.pagesACF.introduzione : ""}
            />
          </Heading>
          <div className="page-content" tw="w-full flex justify-center">
            <GridMaxWidthContainer>
              
            </GridMaxWidthContainer>
          </div>
        </StyledWAUCampPage>
     </Layout>
    )
}

export default WauCampPageLayout
