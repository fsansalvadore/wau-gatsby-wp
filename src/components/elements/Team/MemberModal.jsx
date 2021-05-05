import React, { useEffect, useState, useRef } from "react";
import tw, { styled, css } from "twin.macro";
import parse from "html-react-parser";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Img from "gatsby-image";

const Wrapper = styled.div(({ isOpen }) => [
  tw`fixed z-index[9990] top-0 lg:bottom-0 right-0 left-0 w-screen h-screen transform translate-y-3 invisible opacity-0 bg-white`,
  isOpen &&
    css`
      ${tw`visible translate-y-0 opacity-100`}
      transition: opacity 0.5s ease, transform 0.5s ease, visibility 0.5s ease;
    `,
]);
const WrapperContent = tw.div`relative h-screen w-full overflow-y-scroll lg:overflow-hidden`;
const WrapperScroll = tw.div`relative h-auto flex flex-col lg:h-screen lg:items-center lg:flex-row`;
const CloseIcon = styled.div`
  ${tw`right-0 flex items-center justify-center rounded-full border-2 border-white`}
  width: 50px;
  height: 50px;

  span {
    ${tw`bg-black absolute`}
    width: 18px;
    height: 2px;

    &:first-of-type {
      transform: rotate(45deg);
    }
    &:last-of-type {
      transform: rotate(-45deg);
    }
  }
`;
const CloseButton = styled.button`
  ${tw`fixed z-index[9999] right[30px] opacity-80 top[30px] appearance-none rounded-full border-2 border-black bg-transparent transform transition-transform inline-flex items-center justify-center hover:(cursor-pointer opacity-100 rotate-90)`}
  width: 50px;
  height: 50px;
  opacity: 0.8;
`;
const ModalImageContainer = tw.div`relative w-full h-1/2 min-height[400px] md:min-height[400px] overflow-hidden lg:w-2/5 lg:h-full xl:w-1/2`;
const ModalImage = tw(Img)`absolute! w-full! -top-40 lg:-top-10 right-0 left-0`;
const ModalContentContainer = styled.div`
  ${tw`relative w-full h-auto lg:h-screen flex items-start justify-center overflow-y-scroll px-3 md:px-10 lg:w-3/5 xl:(w-1/2 justify-start px-24)`}

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
`;
const ModalScrollContainer = styled.div`
  ${tw`max-width[500px] w-full h-auto min-height[400px] lg:h-full pt-8 pb-16 md:pt-16 lg:pt-40 lg:overflow-y-scroll scrollbar-color[transparent] scrollbar-width[0]`}

  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
`;
const ModalHeading = tw.div`pb-8 border-0 border-b border-solid border-gray-300 mb-8`;
const ModalName = tw.div`text-3xl font-bold md:text-4xl lg:text-5xl mb-2`;
const ModalRole = tw.div``;
const ModalParagraph = styled.div`
  ${tw`mb-8 text-base lg:text-lg`}

  p {
    ${tw`mb-4`}
  }
`;
const ModalEmail = tw.a`hover:underline`;

export const MemberModal = ({ isOpen, setModalIsOpen, activeMember }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (typeof document !== `undefined`) {
  //     if (isOpen) disableBodyScroll(modalRef.current);
  //     else enableBodyScroll(modalRef.current);
  //   }
  // }, [isOpen, modalRef]);

  useEffect(() => {
    console.log("activeMember", activeMember);
    if (!!activeMember) {
      setLoading(false);
    }
  }, [activeMember]);

  return (
    <Wrapper isOpen={isOpen} ref={modalRef}>
      <CloseButton onClick={() => setModalIsOpen(false)}>
        <CloseIcon>
          <span />
          <span />
        </CloseIcon>
      </CloseButton>
      <WrapperContent>
        <WrapperScroll>
          {!loading && (
            <>
              <ModalImageContainer>
                {activeMember.featuredImage ? (
                  <ModalImage
                    fixed={
                      activeMember.featuredImage.node.imageFile.childImageSharp
                        .fixed
                    }
                    alt={
                      activeMember.featuredImage.node.altText
                        ? activeMember.featuredImage.node.altText
                        : "WAU team member"
                    }
                  />
                ) : (
                  <img
                    tw="absolute! w-full! top-0 right-0 left-0"
                    src=""
                    alt="WAU team member"
                  />
                )}
              </ModalImageContainer>
              <ModalContentContainer>
                <ModalScrollContainer>
                  <ModalHeading>
                    <ModalName>{activeMember.title}</ModalName>
                    <ModalRole>{activeMember.teamMemberAFC.ruolo}</ModalRole>
                  </ModalHeading>
                  <ModalParagraph>
                    {parse(activeMember.teamMemberAFC.descrizione)}
                  </ModalParagraph>
                  <ModalEmail
                    href={`mailto:${activeMember.teamMemberAFC.email}`}
                  >
                    {activeMember.teamMemberAFC.email}
                  </ModalEmail>
                </ModalScrollContainer>
              </ModalContentContainer>
            </>
          )}
        </WrapperScroll>
      </WrapperContent>
    </Wrapper>
  );
};
