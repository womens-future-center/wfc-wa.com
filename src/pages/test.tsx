import { motion } from 'framer-motion'
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import PageTemplate from '../components/templates/PageTemplate'
import { microCMSLoader } from '../libs/microCMS/loader'
import { achievement } from '../types/cms-types'

const Test: NextPage<MicroCMSListResponse<achievement>> = () => {
  return (
    <>
      <Head>
        <title>
          株式会社Women&apos;s Future Center | 在宅ワーク支援 システム開発 ブランディングデザイン
        </title>
      </Head>
      <PageTemplate>
        <Body />
      </PageTemplate>
    </>
  )
}

export default Test

const Body = () => {
  return (
    <>
      <div className='relative md:h-1/2 h-2/3'>
        <motion.div
          animate={{
            y: [10, -5, 10],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className='absolute w-5/6 h-5/6 md:left-1/4 left-[5%]'
        >
          <Image loader={microCMSLoader} src='/top_image/man.png' alt='Top image' layout='fill' />
        </motion.div>
        <h1 className='xl:text-4xl md:text-3xl text-base absolute left-1/2 bottom-1/3'>
          誰もが自由な働き方ができる社会へ
        </h1>
      </div>
    </>
  )
}
