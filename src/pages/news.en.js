import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "twin.macro";
import ArticlesPageLayout from "../components/elements/Articles/ArticlesPageLayout";

const NewsPageEng = () => {
  const data = useStaticQuery(graphql`
    query ArticlesEngQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: EN, title: "News" }) {
          nodes {
            slug
            title
            pagesACF {
              titoletto
              title
              introduzione
            }
          }
        }
        articles(first: 100, where: { status: PUBLISH, language: EN }) {
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
                    fixed(width: 1200, quality: 90) {
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
  `);

  return <ArticlesPageLayout data={data} lang="en" />;
};

// eslint-disable-next-line import/no-default-export
export default NewsPageEng;
