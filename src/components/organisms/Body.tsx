import Image from 'next/image'
import React from 'react'

const Body = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <Image src='/topImage.jpg' alt='Top image' width='600' height='600' />
        <h1 className='text-2xl'>誰もが自由な働き方ができる社会へ</h1>
      </div>
      <div className='flex justify-center items-center bg-slate-300'>
        <div className='w-2/5'>
          <p className='text-base bg-slate-300'>
            Women&apos;s Future
            Centerは、2014年6月に創業し、「女性が活躍できる環境と仕組みをつくる」という理念のもと、フリーランス女性のネットワークを築き、地域企業と女性を結び仕事の創出を行ってきました。
            <br />
            <br />
            2020年から地域に根ざした個人事業や企業の規模にあったシステムを構築し、運用までをサポートする中で、スモールビジネスの経営者の方の柔軟な考え方、チャレンジする精神にスモールビジネスの飛躍こそが地域の希望になると考えるようになりました。
            <br />
            <br />
            奈良には、素晴らしい企業がたくさんあり、魅力的な経営者の方がたくさんいます。私たちは、創業当初からの「働きたいと思った時に働ける環境と仕組みを作る」ことは変わらず、ジェンダーレスで誰もが輝く環境と仕組みをつくることに挑戦していきます。
            <br />
            <br />
            代表取締役社長　栗本恭子
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl'>実績</h1>
      </div>
      <div className='flex justify-evenly items-center'>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image src='/testMockImg.jpg' alt='Shoes' width='400' height='200' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image src='/testMockImg.jpg' alt='Shoes' width='400' height='200' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly items-center'>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image src='/testMockImg.jpg' alt='Shoes' width='400' height='200' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image src='/testMockImg.jpg' alt='Shoes' width='400' height='200' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly items-center'>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image src='/testMockImg.jpg' alt='Shoes' width='400' height='200' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image src='/testMockImg.jpg' alt='Shoes' width='400' height='200' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
