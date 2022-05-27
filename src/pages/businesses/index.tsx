import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Card from '../../components/molecules/Card'
import CardNoImage from '../../components/molecules/CardNoImage'
import RCard from '../../components/molecules/RCard'
import VerticalCard from '../../components/molecules/VeriticalCard'
import PageTemplate from '../../components/templates/PageTemplate'
import UpMotionTemplate from '../../components/templates/motions/UpMotionTemplate'
import { useWindowSize } from '../../hooks/useWindowSize'
import { client } from '../../libs/microCMS/client'
import { achievement } from '../../types/cms-types'
import { TAILWIND_LG } from '../../types/types'

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'achievement',
    queries: { limit: 6, orders: '-createdAt' },
  })
  const { totalCount, contents } = data!
  return {
    props: {
      contents: contents,
      totalCount: totalCount,
    },
  }
}

const Info: NextPage<MicroCMSListResponse<achievement>> = ({ totalCount, contents }) => {
  return (
    <>
      <Head>
        <title>
          事業概要 | 株式会社Women&apos;s Future Center | 在宅ワーク支援 システム開発
          ブランディングデザイン
        </title>
      </Head>
      <PageTemplate>
        <Body contents={contents} totalCount={totalCount} />
      </PageTemplate>
    </>
  )
}

export default Info

const Body = ({ contents, totalCount }: { contents: achievement[]; totalCount: number }) => {
  const router = useRouter()
  const { width } = useWindowSize()
  return (
    <>
      <div className='lg:p-10 p-4 flex flex-col justify-center items-center'>
        <UpMotionTemplate>
          <div className='mb-8'>
            <h1 className='xl:text-6xl sm:text-4xl text-2xl font-semibold text-center text-center'>
              事業概要
            </h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
              事業内容
            </h1>
            <ul className='list-disc list-inside'>
              <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                スモールビジネスに寄り添ったシステムの開発と運用サポート
              </li>
              <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                ライティングを中心としたブランディングデザイン
              </li>
              <li className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                多様な働き方を応援するオンラインスクールの運営
              </li>
            </ul>
          </div>
        </UpMotionTemplate>
        <UpMotionTemplate className='h-full w-full mb-4'>
          <Card
            isHtml={false}
            imagePath='/system_development.png'
            alt='システム開発イメージ'
            title='システム開発と運用サポート'
            content={
              <>
                <div className='flex flex-col justify-center items-center'>
                  <div className='mb-4'>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      御社独自のシステムを構築+在宅ワーカーの活用「WFCシステム」
                    </p>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      WFCシステムサービスとはブランドをつくって展開する個人事業主・企業向けのサービスです。
                    </p>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      その会社に沿ったシステムを構築し、運用までサポートします。
                    </p>
                    <ul className='list-decimal list-inside'>
                      <li className='lg:text-lg text-xs text-left break-all'>
                        システム構築から運用まで一貫サポート
                      </li>
                      <li className='lg:text-lg text-xs text-left break-all'>
                        システムを構築し、仕組み化
                      </li>
                      <li className='lg:text-lg text-xs text-left break-all'>
                        ご依頼者や在宅ワーカーにレクチャー
                      </li>
                      <li className='lg:text-lg text-xs text-left break-all'>運用をスタート</li>
                    </ul>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      事務処理をシステムで最適化し、在宅ワーカーを入れて仕組み化するサービスです。
                    </p>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      IT知識がない方でも簡単に導入でき、売上アップに貢献します。
                    </p>
                  </div>
                  <Link href='/businesses/system_development' passHref={true}>
                    <a>
                      <button className='btn btn-primary'>詳細を見る</button>
                    </a>
                  </Link>
                </div>
              </>
            }
          />
        </UpMotionTemplate>
        <UpMotionTemplate className='h-full w-full mb-4'>
          <RCard
            isHtml={false}
            imagePath='/branding_design.png'
            alt='ブランディングデザインイメージ'
            title='ブランディングデザイン'
            content={
              <>
                <div className='flex flex-col justify-center items-center'>
                  <div className='w-2/3 mb-4'>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      私たちは、ご依頼いただく個人や企業が提供する商品やサービスのその先のお客さまの感動や幸せを一緒に考えてつくります。
                    </p>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      チラシをつくる、ホームページをつくる前に大事なことがあります。
                    </p>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      お客さまのミッションに立ち返り、商品・サービスの価値を再定義し、
                      事業目的に寄り添ったブランディングデザインを提供しております。
                    </p>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      提供して終わりではなく、その後の成果も共有させていただくことで、より目的の成果を一緒に考えていきます。
                    </p>
                    <p className='lg:text-lg text-xs text-left break-all'>
                      私たいが大切にしているのは、次の5つです｡
                    </p>
                    <ul className='list-decimal list-inside'>
                      <li className='lg:text-lg text-xs text-left break-all'>
                        ミッションを共有する
                      </li>
                      <li className='lg:text-lg text-xs text-left break-all'>
                        商品・サービスを再定義をする
                      </li>
                      <li className='lg:text-lg text-xs text-left break-all'>
                        デザインの設計書をつくる
                      </li>
                      <li className='lg:text-lg text-xs text-left break-all'>世界観を届ける</li>
                      <li className='lg:text-lg text-xs text-left break-all'>継続して発信をする</li>
                    </ul>
                  </div>
                  <Link href='/businesses/branding_design' passHref={true}>
                    <a>
                      <button className='btn btn-primary'>詳細を見る</button>
                    </a>
                  </Link>
                </div>
              </>
            }
          />
        </UpMotionTemplate>
        <UpMotionTemplate className='w-full h-full'>
          <CardNoImage>
            <UpMotionTemplate className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                主な取引先
              </h1>
              <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                奈良県の個人事業主・企業様を中心にお取引をしております。
              </p>
              <p className='xl:p-4 p-2 xl:text-2xl sm:text-lg text-base font-normal text-center'>
                ※2014年より弊社とお取引のあった個人事業主様、企業様。
              </p>
            </UpMotionTemplate>
            <UpMotionTemplate className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                【行政関係】
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.pref.nara.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            奈良県
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.city.yao.osaka.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            大阪府八尾市
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.town.oji.nara.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            王寺町
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.city.nara.lg.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            奈良市
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.city.tenri.nara.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            天理市
                          </p>
                        </a>
                      </Link>
                      <Link href='http://www.town.takatori.nara.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            高取町
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.city.joyo.kyoto.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            城陽市
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.shokoren-nara.or.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            奈良県商工会連合会
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='http://www.yamato-koriyama.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            大和郡山市商工会
                          </p>
                        </a>
                      </Link>
                      <Link href='http://www.sakuraishoko.org/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            桜井市商工会
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.jfc.go.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            株式会社日本政策金融公庫
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.obda.or.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            公益財団法人大阪産業局（旧大阪市都市型産業振興センター）
                          </p>
                        </a>
                      </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </UpMotionTemplate>
            <UpMotionTemplate className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                【建築関係】
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://8-nakamura.co.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            中村建設株式会社
                          </p>
                        </a>
                      </Link>
                      <Link href='https://mgsnsg.co.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            村島硝子商事株式会社
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='http://www.arc-craft.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            有限会社アーキクラフト
                          </p>
                        </a>
                      </Link>
                      <Link href='https://shimadakogyou.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            島田工業株式会社
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.yamatonomaki.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            山本造園土木
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.kaedekoumuten.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            株式会社楓工務店
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://akiyaconcierge.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            NPO法人空き家コンシェルジュ
                          </p>
                        </a>
                      </Link>
                      <Link href='https://r.goope.jp/sr-29-292061sb961/about' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            ハーモニーサンワ
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='http://kurashito.nara.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            設計施工舎kurashito
                          </p>
                        </a>
                      </Link>
                      <Link href='https://fluorocable.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            有限会社フロロケーブル
                          </p>
                        </a>
                      </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </UpMotionTemplate>
            <UpMotionTemplate className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                【アパレル・ファッション関係】
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.takaiknit.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            髙井ニット株式会社
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.valleymode.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            株式会社Valley
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='http://monpeya.net/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            もんぺや
                          </p>
                        </a>
                      </Link>
                      <Link href='https://minne.com/@yamato-oine' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            井上ふとん店（大和おいね）
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.ikedakobo.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            奈良べっ甲池田工房
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.hep-sandal.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            HEP 川東履き物商店
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='http://www.taenaka.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            妙中パイル織物株式会社
                          </p>
                        </a>
                      </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </UpMotionTemplate>
            <UpMotionTemplate className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                【教育・会計・介護関係】
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='http://www.nara-wu.ac.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            奈良女子大学
                          </p>
                        </a>
                      </Link>
                      <Link href='https://mindworkof-j.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            一般社団法人マインドワーク協会
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.morita-tax.or.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            税理士法人森田会計事務所
                          </p>
                        </a>
                      </Link>
                      <Link href='https://www.rirestage.co.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            式会社リールステージ
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://naragayoi.com/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            有限会社ならがよい
                          </p>
                        </a>
                      </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </UpMotionTemplate>
            <UpMotionTemplate className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                【製造・保険関係】
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='http://www.matsui-nouen.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            株式会社松井農園
                          </p>
                        </a>
                      </Link>
                      <Link href='http://yaf-nara.com/index2.html' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            大和アグロファーム株式会社
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.clavel.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            株式会社クラベール
                          </p>
                        </a>
                      </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </UpMotionTemplate>
            <UpMotionTemplate className='flex flex-col justify-center items-center'>
              <h1 className='xl:p-4 p-2 xl:text-4xl sm:text-2xl text-lg font-semibold text-center'>
                【メディア関係】
              </h1>
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='border-t border-gray-200'>
                  <dl>
                    <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
                      <Link href='https://www.niplanning.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            株式会社エヌ・アイ・プランニング
                          </p>
                        </a>
                      </Link>
                      <Link href='https://nara-iff.jp/' passHref={true}>
                        <a>
                          <p className='p-2 xl:text-2xl sm:text-lg text-base text-center font-normal'>
                            NPO法人なら国際映画祭
                          </p>
                        </a>
                      </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </UpMotionTemplate>
          </CardNoImage>
        </UpMotionTemplate>
        <UpMotionTemplate className='flex flex-col justify-center items-center sm:px-10 px-3'>
          <div className='lg:pb-16 pb-8 sm:my-10 mt-4'>
            <h1 className='text-4xl font-medium subpixel-antialiased'>お客様の声</h1>
          </div>
          <UpMotionTemplate className='carousel w-full'>
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
          <UpMotionTemplate>
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
              <Link href='/achievements/page/1' passHref={true}>
                <a>
                  <button className='btn btn-ghost'>もっと見る</button>
                </a>
              </Link>
            </div>
          </UpMotionTemplate>
          <div className='lg:m-5 m-2'>
            <button
              onClick={() => router.back()}
              className='btn text-xl md:text-base text-gray-600 font-bold no-underline hover:underline'
            >
              <p className='text-xl md:text-base text-offwhite font-bold'>&lt; BACK</p>
            </button>
          </div>
        </UpMotionTemplate>
      </div>
    </>
  )
}
