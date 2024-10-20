import React from 'react'
import Container from '../../Components/layers/Container'
import Image from '../layers/Image'
import logo from '../../../public/logo.png'
import Li from '../layers/Li'
import line from '../../../public/line.png'
import phone from '../../../public/phone.png'

const Navbar = () => {
  return (
    <nav>
      <Container className='pt-10 flex items-center'>
        <Image href={'/'} src={logo} alt={logo} />

        <ul className='flex items-center'>
          <Li LiContent={'Our Services'} className='ml-[65px] mr-[135px]' />
          <div className='flex items-center gap-[33px]'>
            <Li LiContent={'About'} href={'/about'} />
            <Li LiContent={'Blog&News'} href={'/blog&news'} />
            <Li LiContent={'Contact'} href={'/contact'} />
          </div>
          <Li LiContent={'Account'} className='ml-[198px] mr-[31px]' />
        </ul>
        <Image src={line} alt={line} />
        <Image className='ml-[30px] mr-[6px]' src={phone} alt={phone} />
        <p className='font-semibold text-[16px] font-poppins'>+2349067322844</p>
      </Container>
    </nav>
  )
}

export default Navbar
