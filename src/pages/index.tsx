import { motion } from 'framer-motion'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Card from '../components/molecules/Card'
import VerticalCard from '../components/molecules/VeriticalCard'
import PageTemplate from '../components/templates/PageTemplate'
import UpMotionTemplate from '../components/templates/motions/UpMotionTemplate'
import { useWindowSize } from '../hooks/useWindowSize'
import { microCMSLoader } from '../libs/microCMS'
import { cms } from '../libs/microCMS'
import { achievement } from '../types/cms-types'
import { TAILWIND_LG } from '../types/types'

export const getStaticProps: GetStaticProps = async () => {
  const data = await cms.gets('achievement', {
    limit: 6,
    orders: '-createdAt',
  })
  const { totalCount, contents } = data!
  return {
    props: {
      contents: contents,
      totalCount: totalCount,
    },
  }
}

const Index: NextPage<MicroCMSListResponse<achievement>> = ({ contents, totalCount }) => {
  return (
    <>
      <Head>
        <title>株式会社Women&apos;s Future Center</title>
      </Head>
      <PageTemplate>
        <Body contents={contents} totalCount={totalCount} />
      </PageTemplate>
    </>
  )
}

export default Index

const Body = ({ contents, totalCount }: { contents: achievement[]; totalCount: number }) => {
  const { width } = useWindowSize()
  return (
    <>
      {/* Topの画像部 */}
      <motion.div
        className='relative'
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [-300, 30, 0],
          y: [10, 0],
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Image
          loader={microCMSLoader}
          className='absolute'
          src='/top_image.png'
          alt='Top image'
          layout='intrinsic'
          objectFit='contain'
          width={600}
          height={600}
        />
        <h1 className='xl:text-4xl md:text-3xl text-base absolute left-1/2 bottom-1/3'>
          誰もが自由な働き方ができる社会へ
        </h1>
      </motion.div>
      {/* 中段の指針部 */}
      <UpMotionTemplate>
        <div className='flex justify-center items-center bg-bggray p-10 relative'>
          <Image
            loader={microCMSLoader}
            src='/vector.png'
            alt='Shape'
            width='500'
            height='400'
            className='absolute'
          />
          <div className='2xl:w-1/2 lg:p-8 p-2 absolute'>
            <p className='xl:p-4 p-2 font-medium md:text-xl text-xs'>
              Women&apos;s Future
              Centerは、2014年6月に創業し、「女性が活躍できる環境と仕組みをつくる」という理念のもと、フリーランス女性のネットワークを築き、地域企業と女性を結び仕事の創出を行ってきました。
            </p>
            <p className='xl:p-4 p-2 font-medium md:text-xl text-xs'>
              2020年から地域に根ざした個人事業や企業の規模にあったシステムを構築し、運用までをサポートする中で、スモールビジネスの経営者の方の柔軟な考え方、チャレンジする精神にスモールビジネスの飛躍こそが地域の希望になると考えるようになりました。
            </p>
            <p className='xl:p-4 p-2 font-medium md:text-xl text-xs'>
              奈良には、素晴らしい企業がたくさんあり、魅力的な経営者の方がたくさんいます。私たちは、創業当初からの「働きたいと思った時に働ける環境と仕組みを作る」ことは変わらず、ジェンダーレスで誰もが輝く環境と仕組みをつくることに挑戦していきます。
            </p>
            <p className='xl:p-4 p-2 font-medium md:text-xl text-xs'>代表取締役社長 栗本恭子</p>
          </div>
        </div>
      </UpMotionTemplate>
      {/* 事業内容部 */}
      <div className='flex flex-col justify-center items-center sm:p-10 p-3'>
        <div className='sm:my-10 my-4'>
          <h1 className='text-4xl font-medium subpixel-antialiased'>事業内容</h1>
        </div>
        <UpMotionTemplate>
          <div className='flex flex-row flex-wrap justify-center'>
            <div className='p-2 md:basis-6/12'>
              <Link href='/businesses/system_development' passHref={true}>
                <a>
                  <Card
                    isHtml={false}
                    imagePath='/system_development.png'
                    alt='システム開発イメージ'
                    title='システム開発・運用サポート'
                    content={
                      <div className='flex flex-col justify-center items-center'>
                        <p className='p-2 lg:text-xl text-base'>
                          WFCシステムサービスは事業に沿った独自のシステムを構築し、運用までをサポートします。
                        </p>
                        <p className='p-2 lg:text-xl text-base'>
                          事務処理をシステムで最適化し、在宅ワーカーを入れて仕組み化するサービスです。
                        </p>
                        <p className='p-2 lg:text-xl text-base'>
                          IT知識がない方でも簡単に導入でき、売上アップに貢献します。
                        </p>
                      </div>
                    }
                  />
                </a>
              </Link>
            </div>
            <div className='p-2 md:basis-6/12'>
              <Link href='/businesses/blanding_design' passHref={true}>
                <a>
                  <Card
                    isHtml={false}
                    imagePath='/blanding_design.png'
                    alt='ブランディングデザインイメージ'
                    title='ブランディングデザイン'
                    content={
                      <div className='flex flex-col justify-center items-center'>
                        <p className='p-2 lg:text-xl text-base'>
                          ご依頼者の抱えるミッションに対して、商品やサービスのさらなる価値を見出し、事業目的に寄り添ったブランディングデザインを提供いたします。
                        </p>
                        <p className='p-2 lg:text-xl text-base'>
                          また、提供のみならずその後の成果にもこだわることで、ミッションの達成度をより向上させます。
                        </p>
                      </div>
                    }
                  />
                </a>
              </Link>
            </div>
            {/* <div className='p-2 md:basis-6/12'>
            <Link href='/businesses/online_school' passHref={true}>
            <a>
                <Card
                  isHtml={false}
                  imagePath='/top_image.png'
                  alt='オンラインスクールイメージ'
                  title='オンラインスクール事業'
                  content={
                    <div className='flex flex-col justify-center items-center'>
                      <p className='p-2 lg:text-xl text-base'>
                        在宅ワーカーが知っておきたい仕事の知識を詰め込んだ無料で学べるスクールです。
                      </p>
                    </div>
                  }
                />
              </a>
            </Link>
          </div> */}
          </div>
        </UpMotionTemplate>
      </div>
      {/* お客様の声部 */}
      <div className='flex flex-col justify-center items-center sm:px-10 px-3'>
        <div className='lg:pb-16 pb-8 sm:my-10 mt-4'>
          <h1 className='text-4xl font-medium subpixel-antialiased'>お客様の声</h1>
        </div>
        <UpMotionTemplate className='carousel w-full'>
          {contents.map((o, i) => {
            return (
              <div key={o.id} id={'item' + String(i + 1)} className='carousel-item w-full'>
                <Link href={'/achievements/' + o.id} passHref={true}>
                  <a className='w-full h-full'>
                    {width > TAILWIND_LG ? (
                      <Card
                        isHtml
                        imagePath={o.image.url}
                        alt={o.title}
                        title={o.title}
                        content={
                          o.context.length > 300 ? o.context.slice(0, 300) + '...' : o.context
                        }
                        tag={o.tag}
                      />
                    ) : (
                      <VerticalCard
                        isHtml
                        imagePath={o.image.url}
                        alt={o.title}
                        title={o.title}
                        content={
                          o.context.length > 300 ? o.context.slice(0, 300) + '...' : o.context
                        }
                        tag={o.tag}
                      />
                    )}
                  </a>
                </Link>
              </div>
            )
          })}
        </UpMotionTemplate>
        <UpMotionTemplate>
          <div className='flex justify-center w-full my-4 gap-2'>
            {[...Array(totalCount > 5 ? 5 : totalCount)].map((_, i) => {
              return (
                <Link key={i} href={'#item' + String(i + 1)} passHref={true}>
                  <a className='btn btn-xs'>{i + 1}</a>
                </Link>
              )
            })}
          </div>
          <div>
            <Link href='/achievements/page/1' passHref={true}>
              <a>
                <button className='btn btn-ghost'>もっと見る</button>
              </a>
            </Link>
          </div>
        </UpMotionTemplate>
      </div>
      {/* お問い合わせ部 */}
      <div className='flex flex-col justify-center items-center sm:px-10 px-3 sm:mb-20 mb-10'>
        <div className='lg:pb-16 pb-8 sm:my-10 mt-4'>
          <h1 className='text-4xl font-medium subpixel-antialiased'>お問い合わせ</h1>
        </div>
        <UpMotionTemplate className='w-full'>
          <iframe src={process.env.INQUIRY_LINK} className='w-full' width={1000} height={1000}>
            読み込んでいます…
          </iframe>
        </UpMotionTemplate>
      </div>
    </>
  )
}
