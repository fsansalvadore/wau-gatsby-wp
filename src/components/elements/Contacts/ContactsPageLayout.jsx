import React from "react"
import { Link } from "gatsby"
import tw, { css } from 'twin.macro'
import Layout from "../../LayoutComponent"
import { Helmet } from 'react-helmet'
import Heading from "../../elements/Heading/Heading"
import SocialIcons from "../SocialIcons/SocialIcons"
import ContactForm from "./Form/ContactForm"
import parse from 'html-react-parser'
import map from '../../../assets/wau-map.jpg'
import styled from 'styled-components'

const StyledContactsPageLayout = styled.div(() => [
    css`
        #map {
            background-image: url(${map});
            background-size: cover;
            background-position: center;

        }

        .map-info-card {
            background: var(--purple);
            color: var(--white);
        }
    `
])

const ContactsPageLayout = ({data, socials, lang}) => {
  return (
    <Layout hasNoContactsCta>
      <Helmet>
        <title>{data.title ? `${data.title}` : "Contacts"} · WAU Architetti</title>
      </Helmet>
      <StyledContactsPageLayout>
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
                    {
                        data.pagesACF.introduzione &&
                        <p tw="w-full md:w-3/4">{data.pagesACF.introduzione}</p>
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
        <section id="map" tw="relative h-screen flex items-center">
            <div tw="absolute w-full top-0 lg:top-auto lg:w-1/4 lg:left-32 p-8" className="map-info-card">
                <h5 tw="text-lg mb-4">WAU ARCHITETTI</h5>
                <p>
                    <a
                        href="https://www.google.com/maps/place/Via+Po,+1,+10124+Torino+TO/@45.0702929,7.6850724,17z/data=!3m1!4b1!4m5!3m4!1s0x47886d7075788f65:0xfbab35a5fc5276c2!8m2!3d45.0702929!4d7.6872611"
                        target="_blank"
                        tw="block mb-2"
                    >
                        Via Po, 1<br/>
                        10124 Torino, Italia
                    </a>
                    <a href="tel:+390118127237" tw="block">
                        T +39 011 812 7237
                    </a>
                </p>
            </div>
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
      </StyledContactsPageLayout>
    </Layout>
  )
}

export default ContactsPageLayout