import React from 'react'
import Head from 'next/head'

const AppHead = ({ headTitle, description}) => {
  return (
    <Head>
      <title>{headTitle ? headTitle : "PokeDex"}</title>
        <meta name="description" content={description ? description : "Awesome Pokedex App"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}

export default AppHead
