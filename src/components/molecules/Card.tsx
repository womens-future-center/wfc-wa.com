import Image from 'next/image'
import React from 'react'

import { CardProps } from '../../types/types'

const Card = ({ imagePath, alt, title, content, isHtml, tag }: CardProps) => {
  const text =
    typeof content === 'string' && isHtml ? (
      <div
        className='prose lg:text-lg text-xs text-left break-all line-climp-1'
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    ) : (
      <p className='lg:text-lg text-xs text-left break-all'>{content}</p>
    )
  return (
    <>
      <div className='card lg:p-10 p-3 w-full h-full flex flex-row bg-offwhite'>
        <div className='basis-1/3 relative justify-center align-center'>
          <Image
            className='rounded-xl'
            src={imagePath}
            alt={alt}
            layout='fill'
            objectFit='contain'
            priority={true}
          />
        </div>
        <div className='basis-2/3 lg:p-5 p-2 flex flex-col align-center'>
          {tag && (
            <div className='flex justify-end'>
              <div className='badge badge-lg'>{tag}</div>
            </div>
          )}
          <div>
            {typeof title === 'string' ? (
              <h1 className='lg:text-2xl text-lg text-center'>{title}</h1>
            ) : (
              title
            )}
          </div>
          <div className='mt-3'>{typeof content === 'string' ? text : content}</div>
        </div>
      </div>
    </>
  )
}

export default Card
