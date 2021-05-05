import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import tw, { styled, css } from "twin.macro";
import Layout from "../../LayoutComponent";
import Heading from "../Heading/Heading";
import HeadingIntroHalf from "../Heading/HeadingIntroHalf";
import GridMaxWidthContainer from "../Atoms/GridMaxWidthContainer";
import Button from "../Atoms/Button";
import ClientsSection from "../Clients/ClientsSection";

const ThumbImage = styled.div`
  ${tw`relative z-0 padding-bottom[60%] w-full bg-cover bg-center opacity-90 hover:opacity-100 transition-opacity`}
  ${({ $image }) =>
    !!$image &&
    css`
      background-image: url(${$image});
    `}
`;

const ContentWrapper = styled.div`
  ${tw`col-start-1 lg:(col-start-2 flex flex-col justify-center)`}
`;

const Title = styled.h3`
  ${tw`text-3xl lg:text-4xl`}
`;

const Paragraph = styled.p`
  ${tw`text-lg`}
`;

const ExpertiseWrapper = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2 column-gap[40px] row-gap[30px] border-0 border-b border-solid border-black py-12`}
`;

const ListWrapper = styled.div`
  ${tw`col-span-12 pb-8 md:pb-16`}

  ${ExpertiseWrapper}:first-child {
    ${Paragraph} {
      ${tw`text-xl`}
    }
    ${Title} {
      ${tw`text-4xl lg:text-6xl`}
    }
  }
`;

const ExpertisePageLayout = ({ data, lang }) => {
  const [page, setPage] = useState(null);
  const [expertises, setExpertises] = useState(null);

  useEffect(() => {
    if (data.wordpress.expertises) {
      setExpertises(data.wordpress.expertises.nodes);
    }
  }, [setExpertises, data.wordpress.expertises]);

  useEffect(() => {
    if (data.wordpress.pages) {
      setPage(data.wordpress.pages.nodes[0]);
    }
  }, [setPage, data.wordpress.pages]);

  return (
    <Layout>
      <Helmet>
        <title>WAU Architetti • Expertise</title>
      </Helmet>
      <div>
        <Heading>
          <HeadingIntroHalf
            breadcrumb={page ? page.title : "Expertise"}
            heading={page ? page.pagesACF.title : ""}
            subheading={page ? page.pagesACF.introduzione : ""}
          />
        </Heading>
        <section tw="w-full flex justify-center">
          <GridMaxWidthContainer>
            <hr tw="col-span-12" />
            <ListWrapper>
              {expertises && expertises.length > 0 ? (
                expertises.map((expertise, i) => (
                  <ExpertiseWrapper key={`exp-${i}`}>
                    {!!expertise.featuredImage && (
                      <ThumbImage
                        $image={expertise.featuredImage.node.sourceUrl}
                      />
                    )}
                    <ContentWrapper>
                      <Title>{expertise.title}</Title>
                      <div tw="w-full mt-8">
                        {expertise.expertiseACF &&
                          expertise.expertiseACF.anteprima && (
                            <Paragraph>
                              {expertise.expertiseACF.anteprima}
                            </Paragraph>
                          )}
                        <div tw="mt-8">
                          <Button
                            as={Link}
                            to={
                              lang === "it"
                                ? `/expertise/${expertise.slug}`
                                : `/en/expertise/${expertise.slug}`
                            }
                            isWhite
                          >
                            Approfondisci
                          </Button>
                        </div>
                      </div>
                    </ContentWrapper>
                  </ExpertiseWrapper>
                ))
              ) : (
                <li>
                  <p className="not-found">Nessuna expertise trovata</p>
                </li>
              )}
            </ListWrapper>
          </GridMaxWidthContainer>
        </section>
      </div>
      <ClientsSection />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default ExpertisePageLayout;
