import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw, { styled, css } from "twin.macro";
import Img from "gatsby-image";

const ClientLink = styled.a`
  ${tw`block flex-basis[200px] xl:max-width[220px] p-4 m-4 flex-1`}

  ${({ $hasLink }) => !$hasLink && tw`pointer-events-none`}
`;

// eslint-disable-next-line import/no-default-export
export default ({ lang, ...otherProps }) => {
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
                    fixed(width: 500, quality: 90) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            clientACF {
              link
            }
          }
        }
      }
    }
  `);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    if (!!data && !!data.wordpress.clients) {
      setClients(data.wordpress.clients.nodes);
    }
  }, [data]);

  return (
    <StyledClientsSection {...otherProps}>
      <h3 tw="text-4xl">
        {lang === "it" ? "Chi si è affidato a noi" : "Who has relied on us"}
      </h3>
      <div tw="flex justify-around xl:justify-between flex-wrap my-16 mx-auto max-width[1440px]">
        {!!clients &&
          clients.map((client, i) => (
            <ClientLink
              href={!!client.clientACF.link ? client.clientACF.link : "#"}
              target={!!client.clientACF.link ? "_blank" : "_self"}
              rel="noreferrer"
              $hasLink={!!client.clientACF.link}
              key={i}
            >
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
                    tw="relative max-width[220px] w-full h-64"
                  />
                ))}
            </ClientLink>
          ))}
      </div>
    </StyledClientsSection>
  );
};

const StyledClientsSection = styled.section(() => [
  css`
    ${tw`p-8 py-16 md:py-32 text-center background-image[linear-gradient(#FCFCFC 0%, #fff 20%)]`}

    .gatsby-image-wrapper,
    img,
    picture {
      object-fit: contain;
      width: 100%;
      max-width: 260px;
      max-height: 160px;
      height: auto;
    }
  `,
]);
