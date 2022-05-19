import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const DrawerProvider: NextPage = ({ children }) => {
  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>{children}</div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {Links.map((v, i) => {
            return (
              <li key={i}>
                <Link href={v.linkTo} passHref={true}>
                  <a>{v.linkName}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default DrawerProvider

type Link = {
  linkTo: string
  linkName: string
}

const Links: Link[] = [
  { linkTo: '/', linkName: 'TOP' },
  { linkTo: '/businesses', linkName: '事業概要' },
  { linkTo: '/info', linkName: '企業概要' },
  { linkTo: '/achievements/page/1', linkName: '実績' },
]
