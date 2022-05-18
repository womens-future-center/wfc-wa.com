import { NextPage } from 'next'
import { ReactNode } from 'react'

import { CardProps } from '../../types/types'
import VerticalCard from '../molecules/VeriticalCard'

import PageTemplate from './PageTemplate'

type Props = {
  title: string | ReactNode
  subtitle?: string | ReactNode
  cards?: CardProps[]
}

const ProfileTemplate: NextPage<Props> = ({ title, subtitle, cards, children }) => {
  const titleWithComponent: ReactNode =
    typeof title === 'string' ? (
      <h1 className='xl:text-6xl sm:text-4xl text-2xl font-semibold text-center'>{title}</h1>
    ) : (
      title
    )
  const subtitleWithComponent: ReactNode =
    typeof subtitle === 'string' ? (
      <p className='xl:text-4xl sm:text-2xl text-xl font-medium text-center'>{subtitle}</p>
    ) : (
      subtitle
    )
  return (
    <PageTemplate>
      <div className='m-12 flex flex-col justify-center items-center'>
        <div className=''>{titleWithComponent}</div>
        {subtitle && <div className=''>{subtitleWithComponent}</div>}
      </div>
      {cards?.length && (
        <div className='md:m-10 m-4 md:px-10 p-2 flex flex-row flex-wrap justify-center'>
          {cards.map((o, k) => {
            return (
              <div className='p-4 flex xl:basis-1/4 sm:basis-1/2 basis-full' key={k}>
                <VerticalCard
                  isHtml={false}
                  imagePath={o.imagePath}
                  alt={o.alt}
                  title={o.title}
                  content={o.content}
                />
              </div>
            )
          })}
        </div>
      )}
      {children}
    </PageTemplate>
  )
}

export default ProfileTemplate
