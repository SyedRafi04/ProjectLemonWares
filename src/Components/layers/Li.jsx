import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({LiContent, href, className}) => {
  return (
    <Link to={href}>
      <li className={`font-semibold text-[15px] font-poppins text-black hover:text-[16px] hover:text-gray-800 transition-all duration-300 ${className}`}>
        {LiContent}
      </li>
    </Link>
  )
}

export default Li
