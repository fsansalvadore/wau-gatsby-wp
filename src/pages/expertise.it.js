import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ExpertisesPageLayout from "../components/elements/Expertise/ExpertisePageLayout";

const ExpertisesPageIta = () => {
  const data = useStaticQuery(graphql`
    query ExpertisesItaQuery {
      wordpress {
        pages(where: { status: PUBLISH, language: IT, title: "Expertise" }) {
          nodes {
            slug
            title
            pagesACF {
              title
              introduzione
            }
          }
        }
        expertises(first: 100, where: { status: PUBLISH, language: IT }) {
          nodes {
            date
            status
            slug
            id
            title
            featuredImage {
              node {
                altText
                link
                sourceUrl
                imageFile {
                  childImageSharp {
                    fixed(width: 900, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            expertiseACF {
              anteprima
            }
            language {
              code
              locale
              slug
            }
          }
        }
      }
    }
  `);

  return <ExpertisesPageLayout data={data} lang="it" />;
};

// eslint-disable-next-line import/no-default-export
export default ExpertisesPageIta;
