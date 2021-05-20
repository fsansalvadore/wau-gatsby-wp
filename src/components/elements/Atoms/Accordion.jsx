import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw, { css } from "twin.macro";
import { Collapse } from "antd";
import { Link } from "gatsby";
import Button from "./Button";

const { Panel } = Collapse;

// eslint-disable-next-line import/no-default-export
export default ({ list = [], ...otherProps }) => {
  let location;
  const [lang, setLang] = useState("it");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      location = window.location.href;
      if (
        location.includes("00/en") ||
        location.includes("app/en") ||
        location.includes("com/en")
      ) {
        setLang("en");
      }
    }
  }, [lang]);

  return (
    <StyledAccordion {...otherProps}>
      {list && list.length > 0 && (
        <Collapse accordion>
          {list.map((item, index) => (
            <Panel
              header={item.title}
              key={index}
              // showArrow={false}
              tw="border-0 border-t border-solid border-white border-opacity-20 py-4 text-2xl md:text-3xl font-bold cursor-pointer opacity-60 hover:opacity-100"
            >
              <div tw="py-4 text-lg">
                <p tw="mb-8">{item.expertiseACF.anteprima}</p>
                <Button
                  as={Link}
                  to={
                    lang === "it"
                      ? `/expertise/${item.slug}`
                      : `/en/expertise/${item.slug}`
                  }
                >
                  {lang === "it" ? "Approfondisci" : "Explore"}
                </Button>
              </div>
            </Panel>
          ))}
        </Collapse>
      )}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div(() => [
  css`
    ${tw``}
    * {
      outline: none !important;
      box-shadow: none !important;
    }

    .ant-collapse-header {
      position: relative !important;
      ${tw`pr-6`}
    }
    .ant-collapse-item:last-of-type {
      ${tw`border-b`}
    }

    .anticon {
      position: absolute !important;
      right: 0 !important;
    }
    // Antd accordion css
    .ant-motion-collapse-legacy {
      overflow: hidden;
    }
    .ant-motion-collapse-legacy-active {
      -webkit-transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
      transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    }
    .ant-motion-collapse {
      overflow: hidden;
      -webkit-transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
      transition: height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    }
    .ant-alert.ant-alert-motion-leave {
      overflow: hidden;
      opacity: 1;
      -webkit-transition: max-height 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        padding-top 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        padding-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        margin-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      transition: max-height 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        padding-top 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        padding-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86),
        margin-bottom 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
    .ant-alert.ant-alert-motion-leave-active {
      max-height: 0;
      margin-bottom: 0 !important;
      padding-top: 0;
      padding-bottom: 0;
      opacity: 0;
    }
    .ant-select-arrow .anticon {
      vertical-align: top;
      -webkit-transition: -webkit-transform 0.3s;
      transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      transition: transform 0.3s, -webkit-transform 0.3s;
    }
    .ant-collapse-content-hidden {
      display: none;
    }
  `,
]);
