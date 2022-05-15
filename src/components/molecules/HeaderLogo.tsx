import React from 'react'

import Logo from '../atoms/Logo'

import styles from './styles/HeaderLogo.module.css'

const HeaderLogo = () => {
  return (
    <div className={styles.headerlogo}>
      <Logo width={50} height={50} />
    </div>
  )
}

export default HeaderLogo
