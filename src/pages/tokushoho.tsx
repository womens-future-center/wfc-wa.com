import { NextPage } from 'next'

import CardNoImage from '../components/molecules/CardNoImage'
import PageTemplate from '../components/templates/PageTemplate'

const Privacy: NextPage = () => {
  return (
    <PageTemplate>
      <Body />
    </PageTemplate>
  )
}

export default Privacy

const Body = () => {
  return (
    <>
      <div className='lg:p-10 p-4 flex flex-col justify-center items-center'>
        <div className='mb-8'>
          <h1 className='xl:text-6xl sm:text-4xl text-2xl font-semibold text-center text-center'>
            特定商取引法による表示
          </h1>
        </div>
        <CardNoImage>
          <div className='flex flex-col'>
            <div className='border-t border-gray-200'>
              <dl>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      販売事業者名（会社名）
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      株式会社Women&apos;s Future Center
                    </p>
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      代表者名
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      栗本恭子
                    </p>
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      所在地
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      〒630-8244 奈良県奈良市三条町600番5号
                    </p>
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      お問い合わせ
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      こちら（info@wfc-wa.com）からお問い合わせください。
                    </p>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      ※弊社電話番号はお客様からのご要望に基づき遅滞なく電子メールにて通知いたします。弊社電話番号が必要なお客様は上記メールよりお申し出ください。
                    </p>
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      販売価格
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      購入手続きの際に画面に表示されます。 消費税は内税として表示しております。
                    </p>
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      販売価格以外でお客様に発生する金銭
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      当サイトのページの閲覧、コンテンツ購入、ソフトウェアのダウンロード等に必要となるインターネット接続料金、通信料金は、お客様のご負担となります。
                    </p>
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      お支払方法
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      以下のいずれかのお支払方法をご利用いただけます。
                      <ul className='list-disc list-inside'>
                        <li className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                          各種クレジットカード
                        </li>
                        <li className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                          携帯電話の料金回収サービス
                        </li>
                        <li className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                          その他、購入にかかる決済を代行する会社が提供するお支払方法
                        </li>
                      </ul>
                    </p>
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      商品購入方法
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      該当する商品ページより購入手続きを進めてください。
                    </p>
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      デジタルアイテム等の利用が可能となる時期
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      特別な定めを置いている場合を除き、お支払い手続き完了後直ちにご利用いただけます。
                    </p>
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='flex justify-center items-center'>
                    <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                      動作環境
                    </p>
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                      お使いのデバイス、WIFIなどの利用環境・対応機種により表示のされ方が変更されます。動作に不安のある方は担当者に連絡をお願いします。
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </CardNoImage>
      </div>
    </>
  )
}
