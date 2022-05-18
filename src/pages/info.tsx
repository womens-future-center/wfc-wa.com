import { NextPage } from 'next'
import Head from 'next/head'

import CardNoImage from '../components/molecules/CardNoImage'
import PageTemplate from '../components/templates/PageTemplate'
import UpMotionTemplate from '../components/templates/motions/UpMotionTemplate'

const Info: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          女性起業支援のWomen&apos;s Future Center(ウィメンズフューチャーセンター) –
          女性の起業支援を行うWomen&apos;s Future
          Center。400名以上の女性ネットワーク会員が自主企画講座を開催!
          在宅ワーカー支援事業も行っております｡
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
            企業概要
          </h1>
        </div>
        <UpMotionTemplate>
          <CardNoImage>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                経営理念
              </h1>
              <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                誰もが自由な働き方ができる社会へ
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                経営方針
              </h1>
              <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                スモールビジネスの躍進にシステムの構築と運用で貢献し、地域の個人事業主、中小企業とともに多様な働き方を実現する
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                沿革
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2014年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          創業 コワーキングスペース運営
                          フリーランス女性のネットワーク構築400名以上のメンバーが登録
                          ライター事業・イベント企画運営を行う。
                        </p>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          KDDI公認JimdoCafe奈良オーナーとなり、女性起業家、個人事業主、小規模事業者の起業支援を行う
                          ホームページ製作事業、JimdoCafe奈良企画運営を行う
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2015年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          ミラサポ専門家として個人・小規模事業者のアドバイザーとして活動開始
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2016年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          経済産業省近畿経済産業局LED関西ファイナリスト
                        </p>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          働くを学ぶ「コミカレ」を開講。
                        </p>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          フリーランス女性のメディア「Bloom」を立ち上げる
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2017年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          行政からの委託を受けて女性支援事業を実施
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2018年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          情報発信代行事業をスタート
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2019年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          バックオフィスの代行事業をスタート
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2020年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          事務所移転にともないコワーキングスペース事業から撤退
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2021年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          在宅ワークを専門とした有料職業紹介事業スタート。
                        </p>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          小さな会社に寄り添ったシステム開発事業をスタート・中小企業119番専門家に任命。
                        </p>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          一般社団法人王寺まちづくり理事立ち上げ。
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2022年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          システム開発を伴うバックオフィスサポート事業、ブランディングデザイン事業、在宅ワーカーのためのオンラインスクール事業を行う。
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                会社概要
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          会社名
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          株式会社 Women&apos;s Future Center（ウィメンズフューチャーセンター）
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
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          奈良県奈良市三条町600番5号
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          営業時間
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          月曜日〜金曜日 9:00-17:00 祝日・土曜日・日曜日・夜間・年末年始は休み
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          代表
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>栗本恭子</p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          事業内容
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          アプリ・システム開発、バックオフィス支援、ホームページ制作、デザイン全般、情報発信代行、ブランディングデザイン、起業支援、在宅ワーカー活用コンサルティング、Jimdo奈良オーナー
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          取引金融機関
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          日本政策金融公庫・南都銀行・大和信用金庫・奈良信用金庫・ゆうちょ銀行
                        </p>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                代表者略歴
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          1990年
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          大阪樟蔭女子短期大学日本文学科卒業
                        </p>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          大手生命保険会社・データーサービス、メーカー事務を経験後結婚、出産し、専業主婦
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2003年〜
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          なら子育てネットワークを友人とたちあげ、スタッフ・代表を務める
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2005年3月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          奈良市内の子育て情報を掲載したフリーペーパー「ぷらんぷらん」（M&apos;sネット発行）の創刊に編集部員として携わる。その後編集長に任命
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2007年1月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          ぱーぷる外部ライターとして活動
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2008年3月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>長女出産</p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2008年10月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          「Y&apos;SSTAFF」のメンバーとして採用され企業ブログの執筆、社内メールマガジンの編集を担当
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2010年4月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          Winスクール入学 7月Winスクール卒業 ウェブクリエーター認定試験上級合格
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2011年2月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          株式会社ウェルコンサル ホームページ担当部門にパートで入社
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2013年5月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          円満退社後独立
                          ナラマーシカで飲食店の季節メニューデザインやホームページディレクション、三条通り商店街新聞プロジェクトリーダー兼ライター・デザイナー担当として関わる
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2014年6月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          株式会社Women&apos;s Future Centerを起ち上げる
                        </p>
                      </dd>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2014年8月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          KDDIウェブコミュニケーションズ認定Jimdo café奈良を運営
                        </p>
                      </dd>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='flex justify-center items-center'>
                        <p className='xl:text-2xl sm:text-lg text-base font-normal text-gray-500 text-center'>
                          2014年12月
                        </p>
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <p className='p-2 xl:text-2xl sm:text-lg text-base font-normal'>
                          野村恭彦氏率いるフューチャーセッションズ主催「イノベーションファシリテーター講座」受講
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
