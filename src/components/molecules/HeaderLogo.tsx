import Link from 'next/link'
import React from 'react'

import Logo from '../atoms/Logo'

import styles from './styles/HeaderLogo.module.css'

const HeaderLogo = () => {
  return (
    <Link href='/'>
      <a>
        <div className={styles.headerlogo}>
          <Logo width={50} height={50} />
        </div>
      </a>
    </Link>
  )
}

export default HeaderLogo
