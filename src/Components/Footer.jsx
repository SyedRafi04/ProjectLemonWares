import React from 'react'
import Container from './layers/Container'
import logo2 from '../../public/logo2.png'
import Image from './layers/Image'
import Li from './layers/Li'
import Li3 from './layers/Li3'
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#B00000] w-screen pt-[64px]'>
      <Container className='flex gap-4'>
        <div className='w-[400px] font-inter text-[16px] mb-20'>
          <Image className='mb-4' src={logo2} alt={logo2}/>
          <p className='text-[#E6E6E6]'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit ut aliquam,<br/>purus sit amet luctus venenatis, lectus<br/>magna fringilla urna, porttitor rhoncus<br/>dolor purus non enim praesent elem</p>
          <div className='flex items-center gap-1 text-white mt-[108px] text-nowrap'> 
            <p>Built by Jeremiah with</p>
            <FaHeart />
            <p>in Lagos. Copyright 2021</p>
          </div>  
        </div>  

        <div className=' w-full ml-[60px]'>
          <ul className='flex gap-[120px]'>
            <div className='flex flex-col gap-6 text-nowrap'>
              <Li className='text-white font-bold' LiContent='Service'/>
              <Li3 LiContent='Domain'/>
              <Li3 LiContent='Shared Hosting'/>
              <Li3 LiContent='Cloud Hosting'/>
              <Li3 LiContent='Private Hosting'/>
            </div>
            <div className='flex flex-col gap-6 text-nowrap'>
              <Li className='text-white font-bold' LiContent='Hosting'/>
              <Li3 LiContent='Cheap Hosting'/>
              <Li3 LiContent='Hosting Wordpress'/>
              <Li3 LiContent='Email Hosting'/>
              <Li3 LiContent='Hosting Unlimited'/>
            </div>
            <div className='flex flex-col gap-6 text-nowrap'>
              <Li className='text-white font-bold' LiContent='Company'/>
              <Li3 LiContent='About'/>
              <Li3 LiContent='Career'/>
              <Li3 LiContent='Contact Us'/>
              
            </div>
            <div className='flex flex-col gap-6 text-nowrap'>
              <Li className='text-white font-bold' LiContent='Help'/>
              <Li3 LiContent='FAQ'/>
              <Li3 LiContent='Help Supprt'/>
            </div>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Footer
