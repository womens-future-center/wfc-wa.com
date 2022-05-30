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
      <div className='relative'>
        <motion.div
          animate={{
            y: [20, -20, 20],
          }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className='relative'
        >
          <div className='left-1/2 bottom-1/3'>
            <Image
              loader={microCMSLoader}
              src='/top_image/man.png'
              alt='Top image'
              width={100}
              height={100}
            />
          </div>
        </motion.div>
        <h1 className='xl:text-4xl md:text-3xl text-base absolute left-1/2 bottom-1/3'>
          誰もが自由な働き方ができる社会へ
        </h1>
      </div>
    </>
  )
}
