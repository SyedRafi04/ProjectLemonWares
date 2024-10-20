import React from 'react'
import { Link } from 'react-router-dom'

const L3 = ({LiContent, href, className}) => {
  return (
    <Link to={href}>
      <li className={`text-[16px] font-inter text-[#E6E6E6] ${className}`}>
        {LiContent}
      </li>
    </Link>
  )
}

export default L3