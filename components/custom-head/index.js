import { NextSeo } from 'next-seo'
import NextHead from 'next/head'

export function CustomHead({ title = '', description, image, keywords }) {
  return (
    <>
      <NextHead>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta httpEquiv="Window-Target" content="_value" />
        <title>{title}</title>
        <meta
          name="robots"
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />
        <meta
          name="googlebot"
          content={
            process.env.NODE_ENV !== 'development'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />

        <meta
          name="keywords"
          content={keywords && keywords.length ? keywords.join(',') : keywords}
        />
        <meta name="author" content="Studio Freight" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        {/* START FAVICON */}
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#eb5e28" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        {/* END FAVICON */}
      </NextHead>
    </>
  )
}
