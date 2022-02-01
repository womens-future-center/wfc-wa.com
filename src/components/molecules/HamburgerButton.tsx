import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Button from '../atoms/Button'

import styles from './styles/HamburgerButton.module.css'

type Props = {
  onClick: () => void
}

const HamburgerButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <div className={styles.hamburgerbutton}>
        <FontAwesomeIcon icon={faBars} size='2x' />
      </div>
    </Button>
  )
}

export default HamburgerButton
