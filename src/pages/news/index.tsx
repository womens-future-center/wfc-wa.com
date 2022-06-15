import dayjs from 'dayjs'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ProfileTemplate from '../../components/templates/ProfileTemplate'
import UpMotionTemplate from '../../components/templates/motions/UpMotionTemplate'
import { client } from '../../libs/microCMS/client'
import { news } from '../../types/cms-types'

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await client.get({
    endpoint: 'news',
    queries: {
      limit: 50,
      orders: '-createdAt',
    },
  })
  const { totalCount, contents } = data!
  return {
    props: {
      contents: contents,
      totalCount: totalCount,
    },
  }
}

const Achievements: NextPage<MicroCMSListResponse<news>> = ({ contents, totalCount }) => {
  const router = useRouter()
  const id = Number(router.query.id)
  return (
    <>
      <Head>
        <title>
          実績一覧 - {id} | 株式会社Women&apos;s Future Center | 在宅ワーク支援 システム開発
          ブランディングデザイン
        </title>
      </Head>
      <ProfileTemplate title='お知らせ一覧'>
        <div className='lg:m-5 m-2'>
          <button
            onClick={() => router.back()}
            className='text-xl md:text-base text-gray-600 font-bold no-underline hover:underline'
          >
            <p className='text-xl md:text-base text-gray-600 font-bold'>&lt; BACK</p>
          </button>
        </div>
        <div className='min-h-[50vh]'>
          <UpMotionTemplate>
            <div className='m-10 bg-offwhite overflow-hidden sm:rounded-xl'>
              <ul className='divide-y divide-gray-200'>
                {contents.map((o, i) => {
                  return (
                    <li key={i}>
                      <Link href={'/news/' + o.id} passHref={true}>
                        <a className='block hover:bg-gray-100'>
                          <div className='px-4 py-4 sm:px-6'>
                            <div className='flex items-center justify-between'>
                              <p className='text-sm font-light text-gray-700 truncate'>
                                <time>{dayjs(o.createdAt).format('YYYY-MM-DD')}</time>
                              </p>
                              <div className='ml-2 flex-shrink-0 flex'>
                                <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                                  お知らせ
                                </p>
                              </div>
                            </div>
                            <div className='mt-2 sm:flex sm:justify-between'>
                              <div className='sm:flex'>
                                <p className='flex items-center text-sm font-medium'>{o.title}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </UpMotionTemplate>
        </div>
      </ProfileTemplate>
    </>
  )
}

export default Achievements
