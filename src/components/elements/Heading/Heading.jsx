import styled from "styled-components";
import tw from "twin.macro";

const Heading = styled.div`
  width: 100%;
  ${tw`p-8 pt-28 md:p-16 md:pt-40`}

  h1 {
    ${tw`text-3xl letter-spacing[-0.05rem] md:(text-5xl letter-spacing[-0.01rem])`}
  }

  .breadcrumbs,
  h1 {
    ${tw`mb-3 md:mb-8`}
  }

  .intro {
    ${tw`text-xl letter-spacing[-0.02rem] md:(letter-spacing[-0.01rem])`}

    > p {
      ${tw`mb-4`}
    }

    a {
      ${tw`underline`}
    }
  }
`;

// eslint-disable-next-line import/no-default-export
export default Heading;
