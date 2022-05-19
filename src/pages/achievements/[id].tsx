import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Card from '../../components/molecules/Card'
import VerticalCard from '../../components/molecules/VeriticalCard'
import PageTemplate from '../../components/templates/PageTemplate'
import UpMotionTemplate from '../../components/templates/motions/UpMotionTemplate'
import { useWindowSize } from '../../hooks/useWindowSize'
import { cms } from '../../libs/microCMS'
import { achievement } from '../../types/cms-types'
import { TAILWIND_LG } from '../../types/types'

export const getStaticPaths = async () => {
  const data = await cms.gets('achievement', {
    orders: '-createdAt',
  })
  const paths = data?.contents.map((content) => `/achievements/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = String(context.params!.id!)
  const data = await cms.get2('achievement', id)
  return {
    props: {
      post: data?.body,
    },
  }
}

const achievementsDetail = ({ post }: { post: achievement }) => {
  return (
    <PageTemplate>
      <Body post={post} />
    </PageTemplate>
  )
}

export default achievementsDetail

const Body = ({ post }: { post: achievement }) => {
  const { width } = useWindowSize()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{post.title} | 株式会社Women&apos;s Future Center</title>
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
          {width > TAILWIND_LG ? (
            <Card
              isHtml={true}
              imagePath={post.image.url}
              alt={post.title}
              title={post.title}
              content={post.context}
              tag={post.tag}
            />
          ) : (
            <VerticalCard
              isHtml={true}
              imagePath={post.image.url}
              alt={post.title}
              title={post.title}
              content={post.context}
              tag={post.tag}
            />
          )}
        </UpMotionTemplate>
      </div>
    </>
  )
}
