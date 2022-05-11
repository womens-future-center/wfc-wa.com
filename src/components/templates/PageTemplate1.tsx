import { NextPage } from 'next'

import Card from '../molecules/Card'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const PageTemplate1: NextPage = () => {
  return (
    <div className='bg-background'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const Body = () => {
  return (
    <>
      <div className='p-20'>
        <Card
          imagePath='/topImage.jpg'
          alt='a'
          header={<h1 className='lg:text-4xl text-xs text-center'>事業内容</h1>}
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

export default PageTemplate1
