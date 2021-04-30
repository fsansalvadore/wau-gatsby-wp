import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
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

  return (
    <>
      <GenericMetadata lang={lang} />
      <MainNav lang={lang} isMenuLight={isMenuLight} />
      {children}
      {!hasNoContactsCta && <CtaSection lang={lang} />}
      <Footer lang={lang} />
      <script
        type="text/javascript"
        charSet="UTF-8"
        src="//cdn.cookie-script.com/s/b6c4a2730d62e6c3c995c08302b9a5c3.js"
      />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Layout;
