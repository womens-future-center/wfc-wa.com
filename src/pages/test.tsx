import { NextPage } from 'next'

import Card from '../components/molecules/Card'
import CoupleCard from '../components/molecules/CoupleCard'
import RCard from '../components/molecules/RCard'
import PageTemplate from '../components/templates/PageTemplate'
import ProfileTemplate from '../components/templates/ProfileTemplate'
import { CardProps } from '../types/types'

const test: NextPage = () => {
  return (
    <>
      <ProfileTemplate
        title='小さな会社のシステム開発'
        subtitle='グーグルスプレッドシートやエクセルで管理しているものをアプリ化したり、経理などのソフトと連動したりと、その事業主様に沿ったシステムの開発と運用サポートを行います。'
        cards={testCards}
      >
        <h1>uuuu</h1>
      </ProfileTemplate>
      <PageTemplate>
        <Body1 />
        <Body2 />
        <Body3 />
      </PageTemplate>
    </>
  )
}

export default test

const testCards: CardProps[] = [
  {
    imagePath: '/topImage.jpg',
    alt: 'alt',
    title: '',
    content:
      '商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品',
    imageHeight: 100,
  },
  {
    imagePath: '/topImage.jpg',
    alt: 'aaa',
    title: 'fff',
    content:
      '商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品',
    imageHeight: 100,
  },
  {
    imagePath: '/topImage.jpg',
    alt: 'alt',
    title: '',
    content:
      '商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品',
    imageHeight: 100,
  },
  {
    imagePath: '/topImage.jpg',
    alt: 'aaa',
    title: 'fff',
    content:
      '商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品',
    imageHeight: 100,
  },
  {
    imagePath: '/topImage.jpg',
    alt: 'aaa',
    title: 'fff',
    content:
      '商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品',
    imageHeight: 100,
  },
]

const Body1 = () => {
  return (
    <>
      <div className='p-20'>
        <Card
          imagePath='/topImage.jpg'
          alt='a'
          title={<h1 className='lg:text-4xl text-xs text-center'>事業内容</h1>}
          content={
            <div>
              <p className='lg:text-lg text-xs text-left break-all'>
                Women&apos;s Future
                Centerは、2014年6月に創業し、「女性が活躍できる環境と仕組みをつくる」という理念のもと、フリーランス女性のネットワークを築き、地域企業と女性を結び仕事の創出を行ってきました。
              </p>
              <br />
              <p className='lg:text-lg text-xs text-left break-all'>
                2020年から地域に根ざした個人事業や企業の規模にあったシステムを構築し、運用までをサポートする中で、スモールビジネスの経営者の方の柔軟な考え方、チャレンジする精神にスモールビジネスの飛躍こそが地域の希望になると考えるようになりました。
              </p>
              <br />
              <p className='lg:text-lg text-xs text-left break-all'>
                奈良には、素晴らしい企業がたくさんあり、魅力的な経営者の方がたくさんいます。私たちは、創業当初からの「働きたいと思った時に働ける環境と仕組みを作る」ことは変わらず、ジェンダーレスで誰もが輝く環境と仕組みをつくることに挑戦していきます。
              </p>
              <br />
              <p className='lg:text-lg text-xs text-left break-all'>代表取締役社長　栗本恭子</p>
            </div>
          }
          imageHeight={800}
        />
      </div>
    </>
  )
}

const Body2 = () => {
  return (
    <>
      <div className='p-20'>
        <RCard
          imagePath='/topImage.jpg'
          alt='a'
          title={<h1 className='lg:text-4xl text-xs text-center'>事業内容</h1>}
          content={
            <div>
              <p className='lg:text-lg text-xs text-left break-all'>
                Women&apos;s Future
                Centerは、2014年6月に創業し、「女性が活躍できる環境と仕組みをつくる」という理念のもと、フリーランス女性のネットワークを築き、地域企業と女性を結び仕事の創出を行ってきました。
              </p>
              <br />
              <p className='lg:text-lg text-xs text-left break-all'>
                2020年から地域に根ざした個人事業や企業の規模にあったシステムを構築し、運用までをサポートする中で、スモールビジネスの経営者の方の柔軟な考え方、チャレンジする精神にスモールビジネスの飛躍こそが地域の希望になると考えるようになりました。
              </p>
              <br />
              <p className='lg:text-lg text-xs text-left break-all'>
                奈良には、素晴らしい企業がたくさんあり、魅力的な経営者の方がたくさんいます。私たちは、創業当初からの「働きたいと思った時に働ける環境と仕組みを作る」ことは変わらず、ジェンダーレスで誰もが輝く環境と仕組みをつくることに挑戦していきます。
              </p>
              <br />
              <p className='lg:text-lg text-xs text-left break-all'>代表取締役社長　栗本恭子</p>
            </div>
          }
          imageHeight={800}
        />
      </div>
    </>
  )
}

const Body3 = () => {
  return (
    <>
      <div className='p-20'>
        <CoupleCard />
      </div>
    </>
  )
}
