import Link from 'next/link'
import React from 'react'

import HamburgerButton from '../molecules/HamburgerButton'
import HeaderLogo from '../molecules/HeaderLogo'

import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' passHref={true}>
        <a>
          <HeaderLogo />
        </a>
      </Link>
      <HamburgerButton
        onClick={() => {
          console.log('click!')
        }}
      />
    </header>
  )
}

export default Header
