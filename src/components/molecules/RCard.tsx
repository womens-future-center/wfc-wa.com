import Image from 'next/image'
import React, { ReactNode } from 'react'

const DEFAULT_IMAGE_HEIGHT = 1000

type Props = {
  imagePath: string
  alt: string
  header: string | ReactNode
  content: string | ReactNode
  imageWidth?: number
  imageHeight?: number
}

const RCard = ({ imagePath, alt, header, content, imageWidth, imageHeight }: Props) => {
  if (imageWidth === undefined && imageHeight == undefined) {
    imageHeight = DEFAULT_IMAGE_HEIGHT
    imageWidth = (imageHeight * 25) / 32
  } else {
    if (imageWidth !== undefined) {
      imageHeight = (imageWidth * 32) / 25
    }
    if (imageHeight !== undefined) {
      imageWidth = (imageHeight * 25) / 32
    }
  }
  return (
    <>
      <div className='card w-full h-full flex flex-row bg-offwhite'>
        <div className='p-5 flex-1 flex flex-col align-center'>
          <div>
            {typeof header === 'string' ? (
              <h1 className='lg:text-2xl text-xs text-center'>{header}</h1>
            ) : (
              header
            )}
          </div>
          <div className='mt-3'>
            {typeof content === 'string' ? (
              <p className='lg:text-lg text-xs text-left break-all'>{content}</p>
            ) : (
              content
            )}
          </div>
        </div>
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
      </div>
    </>
  )
}

export default RCard
