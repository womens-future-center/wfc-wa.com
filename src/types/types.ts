import { ReactNode } from 'react'

export const TAILWIND_SM = 640
export const TAILWIND_MD = 768
export const TAILWIND_LG = 1024
export const TAILWIND_XL = 1280
export const TAILWIND_2XL = 1536

export type CardContent = Omit<CardProps, 'title' | 'alt' | 'imageWidth' | 'imageHeight'> & {
  title: string
}

export type CardProps = {
  imagePath: string
  alt: string
  title: string | ReactNode
  content: string | ReactNode
  isHtml: boolean
  className?: string
  tag?: string
  more?: boolean | ReactNode
  onClick?: () => void
}
