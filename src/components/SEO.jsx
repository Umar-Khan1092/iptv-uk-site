import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    const siteTitle = 'IPTV UK | #1 Premium UK IPTV Service Provider';
    const siteDescription = 'Access 28,000+ Channels, 150,000+ VOD in 4K & 8K. Get your 24hr Free Trial now. Crystal clear quality and zero buffering guaranteed.';
    const siteUrl = 'https://iptvuk.sbs';

    const finalTitle = title ? `${title} | IPTV UK` : siteTitle;
    const finalDescription = description || siteDescription;
    const finalUrl = url ? url : siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={keywords || "IPTV UK, Best IPTV Service, UK IPTV Provider, Smart TV IPTV, Firestick IPTV, IPTV Subscription"} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content="https://iptvuk.sbs/used images/hero_section_image.jpeg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={finalUrl} />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={finalDescription} />
            <meta property="twitter:image" content="https://iptvuk.sbs/used images/hero_section_image.jpeg" />
        </Helmet>
    );
};

export default SEO;
