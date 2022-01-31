import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Button from '../atoms/Button'

const HamburgerButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  )
}

export default HamburgerButton
