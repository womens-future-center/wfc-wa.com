import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../libs/gtag'

export default function usePageView() {
  const router = useRouter()
  console.log(gtag.GA_ID)
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path: any, { shallow }: any) => {
      if (!shallow) {
        gtag.pageview(path)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
