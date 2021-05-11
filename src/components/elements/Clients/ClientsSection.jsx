import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw, { styled, css } from "twin.macro";
import Img from "gatsby-image";

// eslint-disable-next-line import/no-default-export
export default ({ ...otherProps }) => {
  const data = useStaticQuery(graphql`
    query ClientsQuery {
      wordpress {
        clients(first: 100, where: { status: PUBLISH }) {
          nodes {
            title
            featuredImage {
              node {
                altText
                link
                sourceUrl
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
  `);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    if (data.wordpress.clients) {
      setClients(data.wordpress.clients.nodes);
    }
  }, [data]);

  return (
    <StyledClientsSection {...otherProps}>
      <h3 tw="text-4xl">Chi si è affidato a noi</h3>
      <ul tw="flex justify-around xl:justify-between flex-wrap my-16 mx-auto max-width[1440px]">
        {!!clients &&
          clients.map((client) => (
            <li tw="flex-basis[200px] xl:max-width[220px]">
              {!!client.featuredImage &&
                (client.featuredImage.node.imageFile ? (
                  <Img
                    tw="relative max-width[220px] w-full h-64"
                    fixed={
                      client.featuredImage.node.imageFile.childImageSharp.fixed
                    }
                    alt={client.title}
                  />
                ) : (
                  <img
                    src={client.featuredImage.node.sourceUrl}
                    alt={client.title}
                    tw="relative max-width[210px] w-full h-64"
                  />
                ))}
            </li>
          ))}
      </ul>
    </StyledClientsSection>
  );
};

const StyledClientsSection = styled.section(() => [
  css`
    ${tw`p-8 py-16 md:py-32 text-center background-image[linear-gradient(#FCFCFC 0%, #fff 20%)]`}

    ul li {
      flex: 1;
      flex-basis: 200px;
      ${tw`p-4 m-4`}

      .gatsby-image-wrapper,
      img, picture {
        width: 100%;
        max-width: 260px;
        max-height: 160px;
        height: auto;
      }
    }
  `,
]);
