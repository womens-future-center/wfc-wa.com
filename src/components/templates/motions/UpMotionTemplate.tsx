import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const UpMotionTemplate: NextPage<{ className?: string }> = ({ className, children }) => {
  const control = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })
  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        y: [60, 0],
      })
    }
  }, [control, inView])
  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={control}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  )
}

export default UpMotionTemplate
