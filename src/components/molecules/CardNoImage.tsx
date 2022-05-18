import React, { ReactNode } from 'react'

const CardNoImage = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <div className='card lg:p-10 p-3 w-full h-full bg-offwhite'>
        <div className='lg:p-5 p-2 flex flex-col justify-center align-center'>{children}</div>
      </div>
    </>
  )
}

export default CardNoImage
