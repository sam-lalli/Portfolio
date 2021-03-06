import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.scss'

export default function Layout({ siteConfig, pageTitle, children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#FFFFFF"/>
        <meta name="msapplication-TileImage" content="/favicon.png"/>
        <meta name="theme-color" content="#FFFFFF"/>
        {siteConfig.description && <meta
          name="description"
          content={siteConfig.description}
        />}
        {siteConfig.thumbnail_image && <meta
          property="og:image"
          content={siteConfig.thumbnail_image}
        />}
        <meta name="og:title" content={siteConfig.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{pageTitle ? `${pageTitle} | ${siteConfig.title}` : siteConfig.title}</title>
      </Head>

      <Header siteTitle={siteConfig.title} {...siteConfig.header} />
      <main className={styles.content}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      <Footer layout siteTitle={siteConfig.title} {...siteConfig.footer} />
    </div>
  )
}