import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import CardNoImage from '../../components/molecules/CardNoImage'
import PageTemplate from '../../components/templates/PageTemplate'
import UpMotionTemplate from '../../components/templates/motions/UpMotionTemplate'
import { microCMSLoader } from '../../libs/microCMS/loader'

const Info: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          WFCworks | 株式会社Women&apos;s Future Center | 在宅ワーク支援 システム開発
          ブランディングデザイン
        </title>
      </Head>
      <PageTemplate>
        <Body />
      </PageTemplate>
    </>
  )
}

export default Info

const Body = () => {
  return (
    <>
      <div className='lg:p-10 p-4 flex flex-col justify-center items-center'>
        <div className='mb-8'>
          <h1 className='xl:text-6xl sm:text-4xl text-2xl font-semibold text-center text-center'>
            WFC works
          </h1>
        </div>
        <UpMotionTemplate>
          <CardNoImage>
            <div className='flex flex-col justify-center items-center'>
              <p className='lg:w-[75%] w-full xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                WFCworksは、在宅ワークで働きたい人と在宅ワークで仕事を依頼したい企業や個人事業主とのマッチングや在宅ワーカーとしてスキルアップするためのオンラインスクールを提供しております。
              </p>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center'>
              <div className='w-full md:basis-1/2'>
                <Image
                  loader={microCMSLoader}
                  src='/wfc_works.png'
                  alt='WFC worksイメージ'
                  layout='responsive'
                  width={1000}
                  height={1000}
                  priority={true}
                />
              </div>
              <div className='md:basis-1/2 flex flex-col justify-center items-center'>
                <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                  【お仕事をするまでの流れ】
                </h1>
                <ul className='list-decimal list-inside'>
                  <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    メンバー登録
                  </li>
                  <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    プロフィールの記載
                  </li>
                  <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    お仕事情報を確認
                  </li>
                  <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    申込
                  </li>
                  <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    面談・スキルチェック
                  </li>
                  <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    合格の方はプロジェクトに参加
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-3xl sm:text-xl text-md font-semibold text-center'>
                はじめはフリーランスとしてプロジェクトに参加していただきます。まずはご登録ください。
              </h1>
              <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                  <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    会員登録をする
                  </p>
                  <Link href='https://works.wfc-wa.com/register' passHref={true}>
                    <a>
                      <button className='btn btn-lg btn-outline'>新規会員登録</button>
                    </a>
                  </Link>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                    登録済みの方はこちら
                  </p>
                  <Link href='https://works.wfc-wa.com/login' passHref={true}>
                    <a>
                      <button className='btn btn-lg btn-outline'>ログイン</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:mt-8 mt-4 flex flex-col justify-center items-center'>
              <div className='md:w-[60%] w-full bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          有料職業紹介所
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                          WFCworks
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          所在地
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                          奈良県奈良市三条町600番地5号
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          有料職業紹介所
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                          29-ユ-300158
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          個人情報の取り扱い
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                          <Link href='/wfc-works/privacy' passHref>
                            プライバシーポリシー
                          </Link>
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </CardNoImage>
        </UpMotionTemplate>
      </div>
    </>
  )
}
