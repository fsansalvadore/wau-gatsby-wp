import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { css } from "twin.macro";
import SocialIcon from "./SocialIcon";

const SocialIconsContainer = styled.div((isDark) => [
  css`
    a {
      margin-right: 10px;
      transition: opacity 0.25s ease;
    }

    a.social-icon:hover {
      opacity: 1 !important;
    }
  `,
]);

const SocialIcons = ({ menu, isDark }) => {
  const socialIconsRef = useRef(null);

  useEffect(() => {
    const links = socialIconsRef.current.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        socialIconsRef.current
          .querySelectorAll("a")
          .forEach((l) => (l.style.opacity = "0.5"));
        link.style.opacity = "1";
      });
      link.addEventListener("mouseout", () => {
        socialIconsRef.current
          .querySelectorAll("a")
          .forEach((l) => (l.style.opacity = "1"));
      });
    });
  }, [socialIconsRef]);

  return (
    <SocialIconsContainer ref={socialIconsRef} isDark={isDark}>
      {menu &&
        menu.menuItems.nodes.map((social) => (
          <SocialIcon
            isDark={isDark}
            social={social}
            key={`icons-${social.id}`}
          />
        ))}
    </SocialIconsContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default SocialIcons;
