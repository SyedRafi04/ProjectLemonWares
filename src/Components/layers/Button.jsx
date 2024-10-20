import React from 'react'
import Image from './Image'

const Button = ({ButtonContent, className, imgSrc}) => {
  return (
    <button className={`rounded-[8px] flex items-center gap-[9px] py-[12px] px-[16px] text-sm font-poppins border-[1px] border-black ${className}`}>
      {imgSrc && <img src={imgSrc} alt={imgSrc} className="w-4 h-4" />} 
      {ButtonContent}
    </button>
  )
}

export default Button
