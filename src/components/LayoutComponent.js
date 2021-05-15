import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import { graphql, useStaticQuery } from "gatsby";
import GenericMetadata from "./GenericMetadata";
import MainNav from "./elements/MainNav/MainNav";
import "../styles/global.css";
import Footer from "./elements/Atoms/Footer";

const CtaSection = loadable(() =>
  import("./elements/Contacts/ContactsCtaSection")
);

const Layout = ({ isMenuLight, hasNoContactsCta, children }) => {
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

  const data = useStaticQuery(graphql`
    query ContactsCtaQuery {
      wordpress {
        pages(where: { title: "HOME PAGE" }) {
          nodes {
            language {
              name
              code
            }
            homePageACF {
              sezioneContatti {
                paragrafo
                tasto {
                  link
                  testo
                }
                titolo
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <GenericMetadata lang={lang} />
      <MainNav lang={lang} isMenuLight={isMenuLight} />
      {children}
      {!hasNoContactsCta && <CtaSection lang={lang} data={data} />}
      <Footer lang={lang} />
      <script
        type="text/javascript"
        charSet="UTF-8"
        src="//cdn.cookie-script.com/s/7991ee83e5ce42619638cf7bb4398e2e.js"
      />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Layout;
