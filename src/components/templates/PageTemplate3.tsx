import { NextPage } from 'next'

import CoupleCard from '../molecules/CoupleCard'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const PageTemplate3: NextPage = () => {
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
        <CoupleCard />
      </div>
    </>
  )
}

export default PageTemplate3
