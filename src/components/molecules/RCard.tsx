import Image from 'next/image'
import React from 'react'

import { microCMSLoader } from '../../libs/microCMS'
import { CardProps } from '../../types/types'

const RCard = ({ imagePath, alt, title, content, isHtml, tag }: CardProps) => {
  const text =
    typeof content === 'string' && isHtml ? (
      <div
        className='prose lg:text-lg text-xs text-left break-all'
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
        {tag && (
          <div className='flex justify-end'>
            <div className='badge badge-lg'>{tag}</div>
          </div>
        )}
        <div className='basis-2/3 lg:p-5 p-2 flex flex-col align-center'>
          <div>
            {typeof title === 'string' ? (
              <h1 className='lg:text-2xl text-xs text-center'>{title}</h1>
            ) : (
              title
            )}
          </div>
          <div className='mt-3'>{typeof content === 'string' ? text : content}</div>
        </div>
        <div className='lg:m-5 m-2 basis-1/3 relative justify-center align-center'>
          <Image
            loader={microCMSLoader}
            className='rounded-xl'
            src={imagePath}
            alt={alt}
            layout='fill'
            objectFit='contain'
            priority={true}
          />
        </div>
      </div>
    </>
  )
}

export default RCard
