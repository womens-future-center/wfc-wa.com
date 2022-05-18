import { config } from '@fortawesome/fontawesome-svg-core'

import type { AppProps } from 'next/app'

import '../styles/reset.css'
import '../styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
