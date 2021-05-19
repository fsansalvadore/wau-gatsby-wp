import React from "react";
import WauCampContactForm from "../components/elements/WauCamp/WauCampContactForm";

const WauCampItaFormTest = () => {
  return (
    <>
      <WauCampContactForm lang="it" />
      <form
        name="waucamp"
        method="POST"
        type="hidden"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="text" name="nome" required />
        <input type="text" name="cognome" required />
        <input type="email" name="email" required />
        <input type="text" name="nascita" />
        <textarea name="messaggio" required />
        <button type="submit">Invia</button>
      </form>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default WauCampItaFormTest;
