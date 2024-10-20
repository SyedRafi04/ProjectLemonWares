import React from 'react'
import Image from './Image'


const Elements = ({src, alt, header}) => {
  return (
    <div className='w-[262px] h-[212px] flex flex-col items-center'>
      <Image src={src} alt={alt}/>
      <h1 className='mt-[17px] font-poppins font-bold text-[20px] '>{header}</h1>
      <p className='w-[252px] mt-1 text-center'>We Keep Your Web build Online 24x7x365.
      Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
    </div>
  )
}

export default Elements
