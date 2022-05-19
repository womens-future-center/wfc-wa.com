import { createClient } from 'microcms-js-sdk'
import { ImageLoaderProps } from 'next/image'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN!,
  apiKey: process.env.X_MICROCMS_API_KEY!,
})

export const microCMSLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?auto=format&fit=max&w=${width}`
}
