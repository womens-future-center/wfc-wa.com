import { ImageLoaderProps } from 'next/image'

export const microCMSLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?auto=format&fit=max&w=${width}`
}
