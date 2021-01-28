import React, { useEffect, useState } from 'react'
import tw, { css } from 'twin.macro'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload';
import { transition } from '../../../helpers/framer-defaults'
// import { WPImage } from '../../WPImage/WPImage'
import Img from 'gatsby-image'
import WAUFallback from '../../../assets/WAUFallback.svg'

const MotionLink = motion.custom(Link)

const ArticlePreviewCard = ({
    article,
    ...otherProps
}) => {
    const months = {
        ita: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        eng: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
    const [date, setDate] = useState(new Date(article.date))
    const [articleDate, setArticleDate] = useState(null)

    useEffect(() => {
        if(date) {
            if (article.language.code === "EN") {
                setArticleDate(`${months.eng[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`)
            } else {
                setArticleDate(`${date.getDay()} ${months.ita[date.getMonth()]} ${date.getFullYear()}`)
            }
        }
    }, [setArticleDate, article])

    return (
        <div tw="opacity-70 hover:opacity-100 transition-opacity duration-150 ease-in-out border-0 border-b border-solid border-gray-500 py-4 md:py-8">
                <LazyLoad>
            <StyledArticlePreviewCard
                to={article.language.code === "EN" ? `/article/${article.slug}` : `/notizie/${article.slug}`}
                tw="w-full grid grid-cols-9 row-gap-4"
                {...otherProps}
            >
                <div className="article-preview-image" tw="relative flex items-center justify-center col-span-9 md:col-span-3 w-full overflow-hidden">
                    {
                        article.featuredImage && article.featuredImage.node.imageFile ?
                        <Img
                            fixed={article.featuredImage.node.imageFile.childImageSharp.fixed}
                            // fluid={article.featuredImage.node.imageFile.childImageSharp.fluid}
                            tw=" top-0 right-0 bottom-0 left-0"
                            alt={ article.imgAlt ? article.imgAlt : "Image" }
                        />
                        :
                        <img
                            tw=" top-0 right-0 bottom-0 left-0"
                            src={article.featuredImage ? article.featuredImage.node.sourceUrl : WAUFallback}
                            alt={article.imgAlt ? article.imgAlt : "Image"}
                            />
                    }
                </div>
                <div tw="col-span-9 md:col-start-4 md:col-span-6 pl-0 md:pl-8">
                    <h3 tw="text-4xl">{article.title}</h3>
                    <p tw="mt-2 font-mono text-sm">
                        <span tw="font-bold">{articleDate && articleDate}</span>
                        {
                            article.categories.nodes.length > 0 &&
                            <ul tw="block md:inline ml-0 md:ml-4">
                                
                                {
                                    article.categories.nodes.map(category => (
                                        <li key={`art-cat-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="inline mr-2">
                                            / {category.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </p>
                    <div tw="w-full mt-4">
                        {
                        article.ArticleACF && article.ArticleACF.anteprima &&
                        <p>{article.ArticleACF.anteprima}</p>
                        }
                    </div>
                    <p tw="font-bold mt-4">{article.language.code === "EN" ? "Read the article" : "Leggi l'articolo"}</p>
                </div>
            </StyledArticlePreviewCard>
                </LazyLoad>
        </div>
    )
}

const StyledArticlePreviewCard = styled(MotionLink)(() => [
    css`
        color: var(--black);

        .article-preview-image {
            // padding-bottom: 65%;
            
            .gatsby-image-wrapper {
                position: absolute !important;
                width: 100% !important;
                height: 100% !important;
            }
        }
    `
])

export default ArticlePreviewCard