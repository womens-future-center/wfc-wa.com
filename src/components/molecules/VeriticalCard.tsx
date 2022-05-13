import Image from 'next/image'
import React from 'react'

import { CardProps } from '../../types/types'

const DEFAULT_IMAGE_HEIGHT = 1000

const VerticalCard = ({ imagePath, alt, title, content, imageWidth, imageHeight }: CardProps) => {
  if (!imageWidth && !imageHeight) {
    imageHeight = DEFAULT_IMAGE_HEIGHT
    imageWidth = (imageHeight * 3) / 2
  } else {
    if (imageWidth) {
      imageHeight = (imageWidth * 2) / 3
    }
    if (imageHeight) {
      imageWidth = (imageHeight * 3) / 2
    }
  }
  const titleWithComponent =
    typeof title === 'string' ? (
      <h1 className='lg:text-2xl text-xs text-center break-all'>{title}</h1>
    ) : (
      title
    )
  const contentWithComponent =
    typeof content === 'string' ? (
      <p className='lg:text-lg text-xs text-left break-all'>{content}</p>
    ) : (
      content
    )
  return (
    <>
      <div className='card w-full h-full flex flex-col bg-offwhite'>
        <figure className='p-5'>
          <div className='flex-1 flex flex-row justify-center align-center'>
            <Image
              className='rounded-xl'
              src={imagePath}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              layout='fixed'
            />
          </div>
        </figure>
        <div className='p-5 flex-1 flex flex-col align-center'>
          <div>{titleWithComponent}</div>
          <div className='mt-3'>{contentWithComponent}</div>
        </div>
      </div>
    </>
  )
}

export default VerticalCard
