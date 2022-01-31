import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Button = ({ children }: Props) => {
  return <button type='button'>{children}</button>
}

export default Button
