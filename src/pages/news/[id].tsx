import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import CardNoImage from '../../components/molecules/CardNoImage'
import PageTemplate from '../../components/templates/PageTemplate'
import UpMotionTemplate from '../../components/templates/motions/UpMotionTemplate'
import { client } from '../../libs/microCMS/client'
import { news } from '../../types/cms-types'

export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'news',
    queries: { orders: '-createdAt' },
  })
  const paths = data!.contents.map((content: news) => `/news/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = String(context.params!.id)
  const data = await client.get({
    endpoint: 'news',
    contentId: id,
  })
  return {
    props: {
      post: data!,
    },
  }
}

const achievementsDetail = ({ post }: { post: news }) => {
  return (
    <PageTemplate>
      <Body post={post} />
    </PageTemplate>
  )
}

export default achievementsDetail

const Body = ({ post }: { post: news }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>
          {post.title} | 株式会社Women&apos;s Future Center | 在宅ワーク支援 システム開発
          ブランディングデザイン
        </title>
      </Head>
      <div className='lg:p-20 p-8'>
        <UpMotionTemplate>
          <div className='lg:m-5 m-2'>
            <button
              onClick={() => router.back()}
              className='text-xl md:text-base text-gray-600 font-bold no-underline hover:underline'
            >
              <p className='text-xl md:text-base text-gray-600 font-bold'>&lt; BACK</p>
            </button>
          </div>
          <CardNoImage>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                {post.title}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.body }}
                className='prose lg:text-lg text-xs text-left break-all line-climp-1'
              />
            </div>
          </CardNoImage>
        </UpMotionTemplate>
      </div>
    </>
  )
}
