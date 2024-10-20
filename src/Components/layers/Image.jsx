import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({className, src, alt, href}) => {
  return (
    <Link to={href}>
      <picture>
        <img className={`block ${className}`} src={src} alt={alt} />
      </picture>
    </Link>
  )
}

export default Image
