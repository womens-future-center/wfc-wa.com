import { MicroCMSListResponse } from 'microcms-js-sdk'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Card from '../../components/molecules/Card'
import VerticalCard from '../../components/molecules/VeriticalCard'
import ProfileTemplate from '../../components/templates/ProfileTemplate'
import { useWindowSize } from '../../hooks/useWindowSize'
import { cms } from '../../libs/client'
import { achievement } from '../../types/cms-types'
import { TAILWIND_LG } from '../../types/types'
import { CardProps } from '../../types/types'

export const getStaticProps: GetStaticProps = async () => {
  const data = await cms.gets('achievement', {
    limit: 6,
    orders: '-createdAt',
    filters: 'tag[equals]ブランディングデザイン',
  })
  const { totalCount, contents } = data!
  return {
    props: {
      contents: contents,
      totalCount: totalCount,
    },
  }
}

const BrandingDesign: NextPage<MicroCMSListResponse<achievement>> = ({ contents, totalCount }) => {
  const router = useRouter()
  const { width } = useWindowSize()
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
      <ProfileTemplate
        title='ブランディングデザイン'
        subtitle={
          <div className='flex flex-col justify-center items-center'>
            <p className='p-2 lg:text-xl text-base text-center'>
              ご依頼者の抱えるミッションに対して、商品やサービスのさらなる価値を見出し、事業目的に寄り添ったブランディングデザインを提供いたします。
            </p>
            <p className='p-2 lg:text-xl text-base text-center'>
              また、提供のみならずその後の成果にもこだわることで、ミッションの達成度をより向上させます。
            </p>
          </div>
        }
        cards={Cards}
      >
        <div className='flex flex-col justify-center items-center sm:px-10 px-3'>
          <div className='lg:pb-16 pb-8 sm:my-10 mt-4'>
            <h1 className='text-5xl font-medium subpixel-antialiased'>実績</h1>
          </div>
          <div className='carousel w-full'>
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
          </div>
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
            <Link href='/achievements/category/ブランディングデザイン/1' passHref={true}>
              <a>
                <button className='btn btn-ghost'>もっと見る</button>
              </a>
            </Link>
          </div>
          <div className='lg:m-5 m-2'>
            <button
              onClick={() => router.back()}
              className='btn text-xl md:text-base text-gray-600 font-bold no-underline hover:underline'
            >
              <p className='text-xl md:text-base text-offwhite font-bold'>&lt; BACK</p>
            </button>
          </div>
          <div className='mb-4'></div>
        </div>
      </ProfileTemplate>
    </>
  )
}

export default BrandingDesign

const Cards: CardProps[] = [
  {
    isHtml: false,
    imagePath: '/blanding_design.png',
    alt: 'ミッション共有イメージ',
    title: 'ミッションを共有する',
    content: (
      <>
        <p>
          実績をあげているブランドには必ず事業活動の指針になるようなミッションが存在しています。
        </p>
        <p>人は企業や経営者から発信された想いや言葉に共感します。</p>
        <p>
          私たちは丁寧なヒアリングを通して、理念やミッションを伝わりやすいメッセージに落とし込み、経営者や社員、デザイナーなど関わるすべての人の推進力を作り出します。
        </p>
        <p>
          私たちのサービス｜・ヒアリング・理念の整理・ビジョン、ミッションの整理・共感づくりのメッセージの作成・トップメッセージの作成
        </p>
      </>
    ),
  },
  {
    isHtml: false,
    imagePath: '/blanding_design.png',
    alt: '商品・サービスの再定義イメージ',
    title: '商品・サービスの再定義をする',
    content: (
      <>
        <p>
          ビジョンとミッションが仕事につながっていると実感するインナーブランディングを行うことで、新しい商品やサービスをデザインしたりリブランディングに積極的に関わり、仕事の質をあげることにつながります。
        </p>
        <p>商品やサービスは「これだけやれば売れる」というものではありません。</p>
        <p>さまざまな複合的な施策が複雑に絡み合って熟成され、成果につながっていきます。</p>
        <p>そのためにチームワークで取り組む必要があります。</p>
        <p>
          私たちのサービス｜・商品、サービスのヒアリング・事業ドメインの再定義・ポジショニングマップの作成・商品、サービスのデザイン
        </p>
      </>
    ),
  },
  {
    isHtml: false,
    imagePath: '/blanding_design.png',
    alt: 'デザイン設計書作成イメージ',
    title: 'デザインの設計書をつくる',
    content: (
      <>
        <p>
          商品やサービスをお客さまやチームに届ける際に核となる部分のデザインがバラバラでは強いブランドをつくることは難しいといえます。
        </p>
        <p>
          デザインの設計書を作成し、今後制作していくあらゆる制作物のトーンや世界観を統一することで、ブランドとしてのメッセージを伝えていきます。
        </p>
        <p>
          私たちのサービス｜・デザインの設計書の作成・言葉の言い回しの設計・ロゴデザイン・フォントの設計・カラーの設計
        </p>
      </>
    ),
  },
  {
    isHtml: false,
    imagePath: '/blanding_design.png',
    alt: '世界観イメージ',
    title: '世界観を届ける',
    content: (
      <>
        <p>
          デザインの設計書をベースにして、それぞれの制作物を統一されたトーンでつくっていきます。
        </p>
        <p>
          同じ世界観を守りながらぶれないメッセージを届けることで、ブランドとしての期待される約束事を守っていくことで、ブランドイメージが形作られ、共感されるブランドが生まれると考えています。
        </p>
        <p>
          私たちのサービス｜・クレド・ブランドブック・名刺・パンフレット・封筒・WEBサイト・紙袋・コンセプトムービー
        </p>
      </>
    ),
  },
  {
    isHtml: false,
    imagePath: '/blanding_design.png',
    alt: '継続イメージ',
    title: '継続して続ける',
    content: (
      <>
        <p>
          ブランドメッセージの基準をつくることで、同じメッセージを統一された世界観で何度も伝えることで、チームの文化になっていきます。
        </p>
        <p>
          無理なく持続可能な視点で商品やサービスの先にあるお客さまと「共感」でつながり、応援されるブランドを作っていきます。
        </p>
        <p>
          強い共感をつくりコアなファンに喜んでもらうことは、社員やチームのモチベーションにつながり、さらに喜んでもらえる商品やサービスを提供するというマネジメントサイクルの構築を目指します。
        </p>
      </>
    ),
  },
]
