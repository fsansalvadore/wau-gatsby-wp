import React from "react"
import { Link } from "gatsby"
import tw from 'twin.macro'
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import Heading from "../../elements/Heading/Heading"
import SocialIcons from "../SocialIcons/SocialIcons"
import ContactForm from "./Form/ContactForm"
import parse from 'html-react-parser'

const ContactsPageLayout = ({data, socials, lang}) => {
  return (
    <Layout hasNoContactsCta>
      <Helmet>
        <title>{data.title ? `${data.title}` : "Contacts"} · WAU Architetti</title>
      </Helmet>
      <div>
        <Heading tw="md:flex">
            <div tw="w-full md:w-2/3 mb-8 flex flex-col justify-between" >
                <div tw="mb-16">
                    {
                        data.pagesACF.titoletto &&
                        <p className="breadcrumbs mono">{data.pagesACF.titoletto}</p>
                    }
                    {
                        data.pagesACF.title &&
                        <h1 tw="w-full md:w-3/4">{data.pagesACF.title}</h1>
                    }
                </div>
                <div>
                    {
                        <SocialIcons menu={socials} isDark />
                    }
                </div>
            </div>
            <div tw="w-full md:w-1/3 mb-4 md:mb-8">
                {
                    data.contactsACF && data.contactsACF.emails &&
                    Object.entries(data.contactsACF.emails).map((item) =>
                        <div className="contacts-email" tw="mb-4 md:mb-8 lg:mb-12" key={`email-${Math.floor(Math.random() * (100 - 999) + 100)}00`}>
                            <p tw="text-sm opacity-60">{item[1]["etichetta"]}</p>
                            <a tw="font-bold text-lg mt-2" href={`mailto:${item[1]["email"]}`}>{item[1]["email"]}</a>
                        </div>
                    )
                }
            </div>
        </Heading>
        <section id="map" tw="h-screen " className="gradientBg">
            map
        </section>
        <section id="contact-form" tw="p-8 py-28 md:p-16 md:py-40 md:flex" >
            {
                data.contactsACF.form &&
                <div tw="w-full md:w-1/2 mb-8">
                    {
                        data.contactsACF.form.titolo &&
                        <h2 tw="w-full lg:w-3/5 text-3xl md:text-4xl mb-4 md:mb-8">{data.contactsACF.form.titolo}</h2>
                    }
                    {
                        data.contactsACF.form.sottotitolo &&
                        <p tw="w-full md:w-3/4">{parse(data.contactsACF.form.sottotitolo)}</p>
                    }
                </div>
            }
            <div tw="w-full md:w-1/2 lg:w-1/3">
                <ContactForm lang={lang} />
            </div>
        </section>
      </div>
    </Layout>
  )
}

export default ContactsPageLayout