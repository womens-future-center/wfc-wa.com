import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Pagination from '../../../../components/molecules/Pagination'
import VerticalCard from '../../../../components/molecules/VeriticalCard'
import ProfileTemplate from '../../../../components/templates/ProfileTemplate'
import UpMotionTemplate from '../../../../components/templates/motions/UpMotionTemplate'
import { cms } from '../../../../libs/microCMS'
import { achievement } from '../../../../types/cms-types'

const PER_PAGE = 5

export const getStaticPaths = async () => {
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = new Array<string>()
  const data = await cms.gets('achievement')
  const tags = new Set(data?.contents.map((o) => o.tag))
  for (let t of tags!) {
    const categolizedData = await cms.gets('achievement', {
      orders: '-createdAt',
      filters: `tag[equals]${t}`,
    })
    const { totalCount } = categolizedData!
    const p = range(1, Math.ceil(totalCount / PER_PAGE)).map(
      (repo) => `/achievements/category/${encodeURIComponent(t)}/${repo}`
    )
    p.forEach((v) => paths.push(v))
  }
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const category = String(context.params!.slug)
  const id = Number(context.params!.id)
  const data = await cms.gets('achievement', {
    offset: (id - 1) * 5,
    limit: 5,
    orders: '-createdAt',
    filters: `tag[equals]${category}`,
  })
  const { totalCount, contents } = data!
  return {
    props: {
      contents: contents,
      totalCount: totalCount,
    },
  }
}

const CategolizedAchievements: NextPage<MicroCMSListResponse<achievement>> = ({
  contents,
  totalCount,
}) => {
  const router = useRouter()
  const slug = String(router.query.slug)
  const id = Number(router.query.id)
  const previous = id - 1 > 0 && `/achievements/category/${encodeURIComponent(slug)}/${id - 1}`
  const next =
    totalCount > id * PER_PAGE && `/achievements/category/${encodeURIComponent(slug)}/${id + 1}`
  return (
    <>
      <Head>
        <title>
          {slug}の実績一覧 - {id} | 株式会社Women&apos;s Future Center
        </title>
      </Head>
      <ProfileTemplate title='実績一覧'>
        <div className='flex flex-col justify-center items-center sm:px-10 px-3 mb-10'>
          <div className='lg:m-5 m-2'>
            <button
              onClick={() => router.back()}
              className='btn text-xl md:text-base text-gray-600 font-bold no-underline hover:underline'
            >
              <p className='text-xl md:text-base text-offwhite font-bold'>&lt; BACK</p>
            </button>
          </div>
          <div className='w-full flex flex-row flex-wrap justify-center'>
            <UpMotionTemplate>
              {contents.map((o, i) => {
                return (
                  <div key={o.id} className='p-4 sm:basis-1/2 basis-full'>
                    <VerticalCard
                      isHtml
                      imagePath={o.image.url}
                      alt={o.title}
                      title={o.title}
                      content={o.context.length > 300 ? o.context.slice(0, 300) + '...' : o.context}
                      tag={o.tag}
                      more={
                        <Link href={'/achievements/' + o.id} passHref={true}>
                          <a className='w-full h-full'>
                            <button className='btn w-full'>もっと見る</button>
                          </a>
                        </Link>
                      }
                    />
                  </div>
                )
              })}
            </UpMotionTemplate>
          </div>
          <div className='flex flex-col items-center'>
            <Pagination previous={previous} next={next} />
          </div>
        </div>
      </ProfileTemplate>
    </>
  )
}

export default CategolizedAchievements
