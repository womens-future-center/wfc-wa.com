import Image from 'next/image'
import React from 'react'

import LOGO from '../../../public/logo.png'
import { microCMSLoader } from '../../libs/microCMS'

type Props = {
  width: number
  height: number
}

const Logo = ({ width, height }: Props) => {
  return (
    <Image
      loader={microCMSLoader}
      src={LOGO}
      title='WFCロゴ'
      alt='WFCロゴ'
      layout='fixed'
      width={width}
      height={height}
    />
  )
}

export default Logo
