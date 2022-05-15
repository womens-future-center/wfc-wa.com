import { NextPage } from 'next'

import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const PageTemplate: NextPage = ({ children }) => {
  return (
    <div className='bg-background'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageTemplate
