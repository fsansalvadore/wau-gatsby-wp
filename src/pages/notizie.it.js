import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Heading from "../components/elements/Heading/Heading"
import tw from 'twin.macro'
import HeadingIntroHalf from "../components/elements/Heading/HeadingIntroHalf"

const NewsPageIta = ({data}) => {
  const [articles, setArticle] = useState(null)
  const [term, setTerm] = useState("")

  useEffect(() => {
    if(data.wordpress.articles) {
      setArticle(data.wordpress.articles.nodes)
    }
  }, [setArticle, term, data.wordpress.articles])
  
  return(
    <Layout>
      <Helmet>
        <title>WAU Architetti • Article</title>
      </Helmet>
      <div>
        <Heading>
          <HeadingIntroHalf
            breadcrumb="Notizie"
            heading="Duis aute irure dolor in reprehenderit."
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Heading>
        <ul >
          {
            articles && articles.length > 0 ?
            articles.map(article => (
              <li
                key={`${article.id}-${article.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}
              >
                <Link
                  to={`/notizie/${article.slug}`}
                  >
                    <h3>{article.title}</h3>
                </Link>
              </li>
            )) : (
              <li>
                <p className="not-found">No article found</p>
              </li>
            )
          }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ArticlesItaQuery {
    wordpress {
      articles(first: 100, where: { status: PUBLISH, language: IT }) {
        nodes {
          date
          status
          slug
          id
          title
          language {
            code
            locale
            slug
          }
        }
      }
    }
  }
`

export default NewsPageIta
