import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Layout from "../layout"
// import ComponentParser from '../ComponentParser'
import Heading from '../elements/Heading/Heading'
import tw, { css } from 'twin.macro'

const ProjectPage = (props) => {
  const {
    slug,
    blocks,
    index,
    title,
    featuredImage,
    lang,
    seo,
    tags,
    project
  } = props.pageContext;
  const {data} = props;
  
  return (
    <Layout>
      <Heading>
        <div tw="w-1/4">
          <p className="breadcrumbs mono" >
            <Link to={lang.code === "EN" ? "/en/projects/" : "/progetti/"}>{lang.code === "EN" ? "Projects" : "Progetti"}</Link> /
          </p>
          <h1>{title}</h1>
        </div>
      </Heading>
    </Layout>
  )
}

export const query = graphql`
  query PrevNextQuery {
    wordpress {
      projects(first: 100, where: { status: PUBLISH }) {
        nodes {
          id
          title
          date
          slug
          language {
            code
          }
        }
      }
    }
  }
`

export default ProjectPage