import { config } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head'

import type { AppProps } from 'next/app'

import '../styles/reset.css'
import '../styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
