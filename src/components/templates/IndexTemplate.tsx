import { NextPage } from 'next'

import Body from '../organisms/Body'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const IndexTemplate: NextPage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default IndexTemplate
