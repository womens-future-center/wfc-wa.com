import { NextPage } from 'next'

import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

import DrawerProvider from './DrawerProvider'

const PageTemplate: NextPage = ({ children }) => {
  return (
    <div className='bg-background'>
      <DrawerProvider>
        <Header />
        {children}
        <Footer />
      </DrawerProvider>
    </div>
  )
}

export default PageTemplate
