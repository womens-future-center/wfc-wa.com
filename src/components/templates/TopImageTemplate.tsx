import TopImage from '../organisms/TopImage'

import type { ImageProps } from '../../types/types'

const images: ImageProps[] = [
  {
    className: 'lg:w-[3%] lg:h-[3%] w-[6%] h-[6%] left-[45%] md:top-[15%] top-[15%]',
    path: '/top_image/circle1.png',
    alt: 'circle1',
  },
  {
    className: 'lg:w-[2%] lg:h-[2%] w-[4%] h-[4%] left-[45%] md:bottom-[20%] bottom-[35%]',
    path: '/top_image/circle2.png',
    alt: 'circle2',
  },
  {
    className: 'lg:w-[2%] lg:h-[2%] w-[4%] h-[4%] left-[35%] top-[25%]',
    path: '/top_image/star1.png',
    alt: 'star1',
  },
  {
    className: 'lg:w-[20%] lg:h-[20%] w-[30%] h-[30%] left-[12%] top-[0%]',
    path: '/top_image/cloud.png',
    alt: 'cloud',
  },
  {
    className: 'lg:w-[15%] lg:h-[15%] w-[20%] h-[20%] right-[15%] top-[5%]',
    path: '/top_image/cloud2.png',
    alt: 'cloud2',
  },
  {
    className: 'lg:w-[14%] lg:h-[14%] w-[20%] h-[20%] right-[15%] bottom-[25%]',
    path: '/top_image/cloud3.png',
    alt: 'cloud3',
  },
  {
    className: 'lg:w-[2%] lg:h-[2%] w-[4%] h-[4%] left-[20%] md:bottom-[45%] bottom-[65%]',
    path: '/top_image/star2.png',
    alt: 'star2',
  },
  {
    className: 'lg:w-[2%] lg:h-[2%] w-[4%] h-[4%] right-[30%] bottom-[50%]',
    path: '/top_image/star3.png',
    alt: 'star3',
  },
  {
    className: 'lg:w-[30%] lg:h-[30%] w-[45%] h-[45%] right-[10%] top-[18%]',
    path: '/top_image/woman.png',
    alt: 'woman',
  },
  {
    className: 'lg:w-[40%] lg:h-[40%] w-[50%] h-[50%] left-[10%] top-[30%]',
    path: '/top_image/man.png',
    alt: 'man',
  },
]

const TopImageTemplate = () => {
  return (
    <>
      {images.map((v, k) => {
        return <TopImage key={k} className={v.className} path={v.path} alt={v.alt} />
      })}
      <h1 className='xl:text-4xl md:text-3xl text-base absolute left-1/2 bottom-1/3'>
        誰もが自由な働き方ができる社会へ
      </h1>
    </>
  )
}

export default TopImageTemplate
