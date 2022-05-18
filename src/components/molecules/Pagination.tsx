import { faArrowLeft, faL } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Pagination = ({ previous, next }: { previous?: string | false; next?: string | false }) => {
  const grid = [previous, next].filter((n) => n !== false).length
  return (
    <div className={`btn-group grid grid-cols-` + String(grid)}>
      {previous && (
        <Link href={previous} passHref={true}>
          <a>
            <button className='btn btn-outline'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </a>
        </Link>
      )}
      {next && (
        <Link href={next} passHref={true}>
          <a>
            <button className='btn btn-outline'>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
        </Link>
      )}
    </div>
  )
}

export default Pagination
