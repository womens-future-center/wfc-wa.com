import { ReactNode } from 'react'

export type BusinessList = {
  imgPath: string
  title: string
  content: string
}

export type CardProps = {
  imagePath: string
  alt: string
  title: string | ReactNode
  content: string | ReactNode
  imageWidth?: number
  imageHeight?: number
}
