import React, { useEffect, useState } from "react"
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import Heading from "../../elements/Heading/Heading"
import tw from 'twin.macro'
import HeadingIntroHalf from "../../elements/Heading/HeadingIntroHalf"
import GridMaxWidthContainer from "../../elements/Atoms/GridMaxWidthContainer"
import ArticlePreviewCard from "../../elements/Articles/ArticlePreviewCard"

const ArticlesPageLayout = ({ data, lang }) => {
    const [page, setPage] = useState(null)

    useEffect(() => {
      if(data) {
        setPage(data.wordpress.pages.nodes[0])
      }
    }, [data, setPage])

  return(
    <Layout>
      <Helmet>
        <title>{lang === "it" ? "Notizie" : "News"} • WAU Architetti</title>
      </Helmet>
      <div>
        <Heading >
          <HeadingIntroHalf
            breadcrumb={page && page.pagesACF && page.pagesACF.titoletto}
            heading={page && page.pagesACF && page.pagesACF.title}
            subheading={page && page.pagesACF && page.pagesACF.introduzione}
          />
        </Heading>
        <section tw="w-full flex justify-center">
          <GridMaxWidthContainer>
            <hr tw="col-span-12"/>
            {
              data &&
              <ul tw="col-span-12 lg:col-span-9 lg:col-start-4 pb-8 md:pb-16">
                {
                  data.wordpress.articles && data.wordpress.articles.nodes.length > 0 ?
                  data.wordpress.articles.nodes.map(article => (
                    <li key={`exp-${article.id}-${article.slug}-${Math.floor(Math.random() * (100 - 999) + 100)}`}>
                      <ArticlePreviewCard article={article}/>
                    </li>
                  )) : (
                    <li>
                      <p className="not-found">{lang === "it" ? "Nessun articolo trovato." : "No article found."}</p>
                    </li>
                  )
                }
              </ul>
            }
          </GridMaxWidthContainer>
        </section>
      </div>
    </Layout>
  )
}

export default ArticlesPageLayout
