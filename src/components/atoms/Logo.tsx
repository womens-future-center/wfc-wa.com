import Image from 'next/image'
import React from 'react'

import LOGO from '../../../public/logo.png'

type Props = {
  width: number
  height: number
}

const Logo = ({ width, height }: Props) => {
  return (
    <Image src={LOGO} title='WFCロゴ' alt='WFCロゴ' layout='fixed' width={width} height={height} />
  )
}

export default Logo
