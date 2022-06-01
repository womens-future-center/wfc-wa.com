import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { microCMSLoader } from '../../libs/microCMS/loader'

import type { ImageProps } from '../../types/types'

const TopImage = ({ className, path, alt }: ImageProps) => {
  const durationTime = Math.random()
  const startPoint = Math.random() * 20 * durationTime
  return (
    <motion.div
      animate={{
        y: [startPoint, -startPoint, startPoint],
      }}
      transition={{ repeat: Infinity, duration: durationTime * 5 }}
      className={`absolute ${className}`}
    >
      <Image
        loader={microCMSLoader}
        src={path}
        alt={alt}
        layout='responsive'
        width={1}
        height={1}
        priority
      />
    </motion.div>
  )
}

export default TopImage
