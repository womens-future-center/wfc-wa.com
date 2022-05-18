import Image from 'next/image'
import React from 'react'

import { CardProps } from '../../types/types'

const VerticalCard = ({
  imagePath,
  alt,
  title,
  content,
  isHtml,
  tag,
  more,
  onClick,
}: CardProps) => {
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
      <div className='card lg:p-4 p-2 w-full flex flex-col bg-offwhite'>
        <div className='p-2'>
          <Image
            className='rounded-xl'
            src={imagePath}
            alt={alt}
            width={3}
            height={2}
            layout='responsive'
            objectFit='cover'
            priority={true}
          />
        </div>
        <div className='basis-2/3 flex flex-col justify-start'>
          {tag && (
            <div className='flex justify-center mb-2'>
              <div className='badge badge-sm'>{tag}</div>
            </div>
          )}
          <div>
            {typeof title === 'string' ? (
              <h1 className='p-2 lg:text-2xl text-base text-center break-all'>{title}</h1>
            ) : (
              title
            )}
          </div>
          <div className='p-2 mt-3'>{typeof content === 'string' ? text : content}</div>
          {typeof more === 'boolean' ? (
            <button onClick={onClick} className='btn'>
              もっと見る
            </button>
          ) : (
            more
          )}
        </div>
      </div>
    </>
  )
}

export default VerticalCard
