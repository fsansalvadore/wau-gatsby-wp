import React from "react"
import Layout from "../components/LayoutComponent"
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Heading from "../components/elements/Heading/Heading"
import tw from 'twin.macro'
import HeadingIntroHalf from "../components/elements/Heading/HeadingIntroHalf"
import GridMaxWidthContainer from "../components/elements/Atoms/GridMaxWidthContainer"
import ArticlePreviewCard from "../components/elements/Articles/ArticlePreviewCard"

const NewsPageIta = ({data}) => {
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Article</title>
      </Helmet>
      <div>
        <Heading >
          <HeadingIntroHalf
            breadcrumb="Notizie"
            heading="Duis aute irure dolor in reprehenderit."
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Heading>
        <section tw="w-full flex justify-center">
          <GridMaxWidthContainer>
            <hr tw="col-span-12"/>
            <StaticQuery
              query={graphql`
                query ArticlesItaQuery {
                  wordpress {
                    articles(first: 100, where: { status: PUBLISH, language: IT }) {
                      nodes {
                        date
                        content
                        slug
                        id
                        title
                        language {
                          code
                          locale
                          slug
                        }
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
                        categories {
                          nodes {
                            name
                            id
                          }
                        }
                        ArticleACF {
                          anteprima
                          introduzione
                        }
                      }
                    }
                  }
                }
              `}
              render={data => (
                <ul tw="col-span-12 lg:col-span-9 lg:col-start-4 pb-8 md:pb-16">
                {
                  data && data.wordpress.articles && data.wordpress.articles.nodes.length > 0 ?
                  data.wordpress.articles.nodes.map(article => (
                    <li key={`exp-${article.id}-${article.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}>
                      <ArticlePreviewCard article={article}/>
                    </li>
                  )) : (
                    <li>
                      <p className="not-found">Nessun articolo trovato.</p>
                    </li>
                  )
                }
              </ul>
              )}
            />
          </GridMaxWidthContainer>
        </section>
      </div>
    </Layout>
  )
}

export default NewsPageIta
