import { createClient } from 'microcms-js-sdk'
import { MicroCMS } from 'microcms-lib'
import { ImageLoaderProps } from 'next/image'

import { EndPoints } from '../types/cms-types'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.X_MICROCMS_API_KEY!,
})

export const cms = new MicroCMS<EndPoints>({
  service: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.X_MICROCMS_API_KEY!,
})

export const microCMSLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?auto=format&fit=max&w=${width}`
}
