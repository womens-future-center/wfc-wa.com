import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Button from '../atoms/Button'

import styles from './styles/HamburgerButton.module.css'

type Props = {
  onClick: () => void
}

const HamburgerButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <label htmlFor='my-drawer-4' className='drawer-button'>
        <div className={styles.hamburgerbutton}>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </div>
      </label>
    </Button>
  )
}

export default HamburgerButton
