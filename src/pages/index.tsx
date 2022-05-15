import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Card from '../components/molecules/Card'
import VerticalCard from '../components/molecules/VeriticalCard'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import { useWindowSize } from '../hooks/useWindowSize'
import { BusinessLists, Reviews } from '../temp/temp'
import { TAILWIND_LG } from '../types/types'

const Index: NextPage = () => {
  return (
    <div className='bg-background'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const Body = () => {
  const { width } = useWindowSize()
  return (
    <>
      {/* Topの画像部 */}
      <div className='flex justify-center items-center'>
        <Image src='/topImage.jpg' alt='Top image' width='600' height='600' />
        <h1 className='md:text-4xl text-xs'>誰もが自由な働き方ができる社会へ</h1>
      </div>
      {/* 中段の指針部 */}
      <div className='h-3/5 flex justify-center items-center bg-bggray p-10 relative'>
        <Image src='/Vector 2.png' alt='Shape' width='500' height='400' className='absolute' />
        <div className='2xl:w-5/12 w-11/12 absolute'>
          <p className='font-medium lg:text-xl text-xs'>
            Women&apos;s Future
            Centerは、2014年6月に創業し、「女性が活躍できる環境と仕組みをつくる」という理念のもと、フリーランス女性のネットワークを築き、地域企業と女性を結び仕事の創出を行ってきました。
          </p>
          <br />
          <p className='font-medium lg:text-xl text-xs'>
            2020年から地域に根ざした個人事業や企業の規模にあったシステムを構築し、運用までをサポートする中で、スモールビジネスの経営者の方の柔軟な考え方、チャレンジする精神にスモールビジネスの飛躍こそが地域の希望になると考えるようになりました。
          </p>
          <br />
          <p className='font-medium lg:text-xl text-xs'>
            奈良には、素晴らしい企業がたくさんあり、魅力的な経営者の方がたくさんいます。私たちは、創業当初からの「働きたいと思った時に働ける環境と仕組みを作る」ことは変わらず、ジェンダーレスで誰もが輝く環境と仕組みをつくることに挑戦していきます。
          </p>
          <br />
          <p className='font-medium lg:text-xl text-xs'>代表取締役社長　栗本恭子</p>
        </div>
      </div>
      {/* 事業内容部 */}
      <div className='flex flex-col justify-center items-center sm:p-10 p-3'>
        <div className='sm:my-10 mt-4'>
          <h1 className='text-4xl font-medium subpixel-antialiased'>事業内容</h1>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          {BusinessLists.map((b, i) => {
            return (
              <div key={i} className='lg:p-16 p-8 xl:basis-5/12'>
                <Card imagePath={b.imagePath} alt={b.title} title={b.title} content={b.content} />
              </div>
            )
          })}
        </div>
      </div>
      {/* お客様の声部 */}
      <div className='flex flex-col justify-center items-center sm:px-10 px-3'>
        <div className='lg:pb-16 pb-8 sm:my-10 mt-4'>
          <h1 className='text-4xl font-medium subpixel-antialiased'>お客様の声</h1>
        </div>
        <div className='carousel w-full'>
          {Reviews.slice(0, 5).map((o, i) => {
            return (
              <div key={i} id={'item' + String(i + 1)} className='carousel-item w-full h-[70vh]'>
                {width > TAILWIND_LG ? (
                  <Card imagePath={o.imagePath} alt={o.title} title={o.title} content={o.content} />
                ) : (
                  <VerticalCard
                    imagePath={o.imagePath}
                    alt={o.title}
                    title={o.title}
                    content={o.content}
                  />
                )}
              </div>
            )
          })}
        </div>
        <div className='flex justify-center w-full my-4 gap-2'>
          {Reviews.slice(0, 5).map((_, i) => {
            return (
              <Link key={i} href={'#item' + String(i + 1)} passHref={true}>
                <a className='btn btn-xs'>{i + 1}</a>
              </Link>
            )
          })}
        </div>
        {Reviews.length > 5 && (
          <div>
            <button className='btn btn-ghost'>もっと見る</button>
          </div>
        )}
      </div>
      {/* お問い合わせ部 */}
      <div className='flex flex-col justify-center items-center sm:px-10 px-3 sm:mb-20 mb-10'>
        <div className='lg:pb-16 pb-8 sm:my-10 mt-4'>
          <h1 className='text-4xl font-medium subpixel-antialiased'>お問い合わせ</h1>
        </div>
        <iframe src={process.env.INQUIRY_LINK} className='w-full' width={1000} height={1000}>
          読み込んでいます…
        </iframe>
      </div>
    </>
  )
}

export default Index
