import React from "react"
import { StaticQuery, Link } from "gatsby"
import Heading from '../elements/Heading/Heading'
import Layout from "../layout"
import Img from 'gatsby-image'
import tw from 'twin.macro'
import GridMaxWidthContainer from "../elements/Atoms/GridMaxWidthContainer"

const ArticleShowPage = props => {
  const {
    content,
    title,
    lang,
    featuredImage,
  } = props.pageContext;

  return (
    <StaticQuery
      query={graphql`
        query ArticlesMediaQuery {
          wordpress {
            articles(first: 100, where: { status: PUBLISH }) {
              nodes {
                featuredImage {
                  node {
                    sourceUrl(size: LARGE)
                    imageFile {
                      childImageSharp {
                        fixed(width: 1500, quality: 90) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <div tw="w-full flex justify-center">
            <GridMaxWidthContainer className="container-max-1200" tw="w-full grid grid-cols-12">
              <Heading tw="col-span-12">
                <p className="breadcrumbs mono">
                  <Link to={lang.code === "EN" ? "/en/news/" : "/notizie/"}>
                    {lang.code === "EN" ? "News" : "Notizie"}</Link> /
                </p>
                <h1>{title}</h1>
              </Heading>
              {
                  featuredImage &&
                    <figure className="cover-image cover-image-fullscreen" tw="col-span-12 mb-10 md:mb-16 xl:mb-32">
                      {
                        featuredImage.node.imageFile ?
                        <Img
                            tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                            fixed={featuredImage.node.imageFile.childImageSharp.fixed}
                        /> :
                        <img
                          src={featuredImage.node.sourceUrl}
                          alt={featuredImage.node.altText}
                          tw="relative w-full h-64 top-0 right-0 bottom-0 left-0"
                        />
                      }
                    </figure>
                }
              <article dangerouslySetInnerHTML={{ __html: content }}/>
              <Link to="/">Go to Home Page</Link>
            </GridMaxWidthContainer>
          </div>
        </Layout>
      )}
    />
  )
}

export default ArticleShowPage