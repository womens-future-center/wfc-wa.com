import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Card from '../../components/molecules/Card'
import VerticalCard from '../../components/molecules/VeriticalCard'
import ProfileTemplate from '../../components/templates/ProfileTemplate'
import UpMotionTemplate from '../../components/templates/motions/UpMotionTemplate'
import { useWindowSize } from '../../hooks/useWindowSize'
import { cms } from '../../libs/microCMS'
import { achievement } from '../../types/cms-types'
import { TAILWIND_LG } from '../../types/types'
import { CardProps } from '../../types/types'

export const getStaticProps: GetStaticProps = async () => {
  const data = await cms.gets('achievement', {
    limit: 6,
    orders: '-createdAt',
    filters: 'tag[equals]システム開発',
  })
  const { totalCount, contents } = data!
  return {
    props: {
      contents: contents,
      totalCount: totalCount,
    },
  }
}

const SystemDevelopment: NextPage<MicroCMSListResponse<achievement>> = ({
  contents,
  totalCount,
}) => {
  const router = useRouter()
  const { width } = useWindowSize()
  return (
    <>
      <Head>
        <title>システム開発 | 株式会社Women&apos;s Future Center</title>
      </Head>
      <ProfileTemplate
        title='システム開発・運用サポート'
        subtitle={
          <div className='flex flex-col justify-center items-center'>
            <p className='p-2 lg:text-xl text-base text-center'>
              WFCシステムサービスは事業に沿った独自のシステムを構築し、運用までをサポートします。
            </p>
            <p className='p-2 lg:text-xl text-base text-center'>
              事務処理をシステムで最適化し、在宅ワーカーを入れて仕組み化するサービスです。
            </p>
            <p className='p-2 lg:text-xl text-base text-center'>
              IT知識がない方でも簡単に導入でき、売上アップに貢献します。
            </p>
          </div>
        }
        cards={Cards}
      >
        <div className='flex flex-col justify-center items-center sm:px-10 px-3'>
          <div className='lg:pb-16 pb-8 sm:my-10 mt-4'>
            <h1 className='text-5xl font-medium subpixel-antialiased'>実績</h1>
          </div>
          <UpMotionTemplate className='arousel w-full'>
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
            <Link href='/achievements/category/システム開発/1' passHref={true}>
              <a>
                <button className='btn btn-ghost'>もっと見る</button>
              </a>
            </Link>
          </div>
          <div className='lg:m-5 m-2'>
            <button
              onClick={() => router.back()}
              className='btn text-xl md:text-base text-gray-600 font-bold no-underline hover:underline'
            >
              <p className='text-xl md:text-base text-offwhite font-bold'>&lt; BACK</p>
            </button>
          </div>
          <div className='mb-4'></div>
        </div>
      </ProfileTemplate>
    </>
  )
}

export default SystemDevelopment

const Cards: CardProps[] = [
  {
    isHtml: false,
    imagePath: '/system_development.png',
    alt: 'alt',
    title: '',
    content: 'システム構築から運用まで貫通サポート',
  },
  {
    isHtml: false,
    imagePath: '/system_development.png',
    alt: 'alt',
    title: '',
    content: 'システムを構築し、仕組み化',
  },
  {
    isHtml: false,
    imagePath: '/system_development.png',
    alt: 'alt',
    title: '',
    content: '在宅ワーカーにレクチャー',
  },
  {
    isHtml: false,
    imagePath: '/system_development.png',
    alt: 'alt',
    title: '',
    content: '運用をスタート',
  },
]
