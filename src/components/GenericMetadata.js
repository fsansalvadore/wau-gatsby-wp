import React from 'react'
import { Helmet } from 'react-helmet'

const GenericMetadata = ({lang}) => {
    return (
        <Helmet htmlAttributes={{ lang : lang }}>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <title>WAU Architetti</title>
            <meta name="description" content="WAU Architetti" />
            <meta name="keywords" content="WAU Architetti" />
            {/* <meta name="google-site-verification" content="uZDoijPmj5JG5xxfm_-uNAU9GJHOp6N5ImgbN_SODNY" /> */}
            <meta http-equiv="Cache-control" content="public" />
            <meta http-equiv="Cache-Control" content="max-age=1209600" />
            <meta itemprop="name" content="WAU Architetti" />
            <meta itemprop="description" content="WAU Architetti" />
            {/* <meta itemprop="image" content="./images/Saglietti_1200X623.png" /> */}
            <meta property="og:site_name" content="WAU Architetti" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.wauarchitetti.com/" />
            <meta property="og:title" content="WAU Architetti" />
            {/* <meta property="og:image" content="./images/Saglietti_1200X623.png" /> */}
            <meta property="og:description" content="WAU Architetti" />
            <meta property="og:locale" content="it_IT" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="https://www.wauarchitetti.com/" />
            <meta name="twitter:title" content="WAU Architetti" />
            <meta name="twitter:description" content="WAU Architetti" />
            <meta name="twitter:creator" content="@Francesco_Sansa" />
            {/* <meta name="twitter:image" content="./images/Saglietti_1200X623.png" /> */}
            <meta name="robots" content="NOODP" />
            <meta name="msnbot" content="NOODP" />
            <meta name="googlebot" content="NOODP" />
            <link rel="stylesheet" href="https://use.typekit.net/jcw6zqi.css" />
        </Helmet>
    )
}

export default GenericMetadata