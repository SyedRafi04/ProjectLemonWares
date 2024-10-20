import Container from '../layers/Container'
import Button from '../layers/Button'
import Image from '../layers/Image'
import BannerImg from '../../../public/BannerImg.png'
import Triangle1 from '../../../public/Triangle1.png'
import Triangle2 from '../../../public/Triangle2.png'
import Triangle3 from '../../../public/Triangle3.png'
import L1 from '../../../public/L1.png'
import L2 from '../../../public/L2.png'
import L3 from '../../../public/L3.png'
import L4 from '../../../public/L4.png'
import L5 from '../../../public/L5.png'
import L6 from '../../../public/L6.png'
import Elements from '../layers/Elements'
import Element1 from '../../../public/Element1.png'
import Element2 from '../../../public/Element2.png'
import Element3 from '../../../public/Element3.png'
import QuoteMark from '../../../public/QuoteMark.png'
import { PiToggleLeftFill } from "react-icons/pi"
import PriceField from '../PriceField'
import CLI from '../../../public/CLI.png'
import colon from '../../../public/colon.png'
import JPNL from '../../../public/JPNL.png'
import Leeve from '../../../public/Leeve.png'
import Korane from '../../../public/Korane.png'
import Nadine from '../../../public/Nadine.png'
import Jrango from '../../../public/Jrango.png'
import whatsapp from '../../../public/whatsapp.png'
import BannerTabs from '../BannerTabs'
import Footer from '../Footer'



const Home = () => {


  return (
    <Container className='h-[521px] mt-20'>
      <div className='flex h-full mb-[72px] '>
        <div className='w-1/2 '>
          <div className='h-[27px]'>
            <BannerTabs/>
          </div>
          <p className='text-[16px] font-inter leading-[28px] text-[#808080] mt-[293px]'>Blazing fast web hosting for individuals and<br />businesses of all sizes backed by 24x7x365 Support.</p>
          <div className='gap-6 mt-[60px] flex'>
            <Button className='text-white bg-[#B00000] btn border-none' ButtonContent={'Create an Account'} />
            <Button className='text-black bg-transparent' ButtonContent={'Choose your plan'} />
          </div>
        </div>
        <div className='w-1/2 relative'>
          <Image className='absolute bottom-0 right-[25px]' src={BannerImg} alt={BannerImg} />
          <Image className='absolute right-0 top-20' src={Triangle1} alt={Triangle1} />
          <Image className='absolute bottom-40 left-16' src={Triangle2} alt={Triangle2} />
          <Image className='absolute right-0 bottom-10' src={Triangle3} alt={Triangle3} />
        </div>
      </div>

      <div className='h-[547px]'>
        <div className='h-1/2 flex gap-[77px]'>
          <div >
            <h1 className='font-inter font-extrabold text-[48px] text-[#18191F] leading-[64px]'>True Cloud Web  Hosting</h1>
            <p className='font-inter text-[18px] text-[#18191F] leading-[32px] mt-[25px]'>True Cloud Web Hosting All of the hosting packages we offer are<br />deployed instantly on our SSD powered cloud. We don’t use<br />dedicated servers that operate on single pieces of hardware.Our<br />entire infrastructure is built to be reliable, secure, and scalable.</p>
          </div>
          <div className=' py-10 flex flex-col gap-[55px] '>
            <div className="one flex gap-[85px] items-center">
              <Image src={L1} alt={L1} />
              <Image src={L2} alt={L2} />
              <Image src={L3} alt={L3} />
            </div>
            <div className="two flex gap-[48px] items-center">
              <Image src={L4} alt={L4} />
              <Image src={L5} alt={L5} />
              <Image src={L6} alt={L6} />
            </div>
          </div>

        </div>

        <div className='h-1/2 flex gap-[60px] mt-[123px]'>
          <Elements src={Element1} alt={Element1} header={'99.9% Uptime'} />
          <Elements src={Element2} alt={Element2} header={'Blazing Fast Web Hosting'} />
          <Elements src={Element3} alt={Element3} header={'Free SSL Certificates'} />
          <Elements src={Element3} alt={Element3} header={'24x7 Friendly Support'} />
        </div>

        <div className='flex flex-col items-center font-poppins mt-[133px] h-[1212px]'>
          <h1 className='font-semibold text-[50px] leading-[60px] text-center mt-[11px]'>Ready to get started with<br />
            Lemon Wares?</h1>
          <p className='text-[25px] leading-[25px] mt-[38px]'>Choose the package that suits you</p>
          <div className='flex gap-[31px] items-center mt-[57px]'>
            <p className='text-[25px] leading-[25px]'>Monthly</p>
            <PiToggleLeftFill className='text-[#B00000] text-7xl' />
            <p className='text-[25px] leading-[25px]'>Yearly</p>
            <div className='font-bold font-inter text-[10px] py-[7px] px-[12px] rounded-[8px] bg-[#FFE87A]'>20%  discount</div>
          </div>

          <div className='w-full flex gap-[100px] mt-[74px]'>
            <PriceField Price={'2.80'} header={'Starter'}/>
            <PriceField Price={'4.20'} header={'Standard'}/>
            <PriceField Price={'7.00'} header={'Suprem'}/>
          </div>

          <div className='mt-[94px] w-full relative flex font-inter'>
            <div className='w-1/2 h-full'>
              <Image className='absolute left-16' src={QuoteMark} alt={QuoteMark}/>
              <h1 className='font-inter font-extrabold text-[48px] leading-[64px] mt-[56px] ml-[149px] z-10'>Real Stories from<br/>Real Customers</h1>
              <p className='font-inter text-[18px] leading-[32px] text-[#18191F] mt-[8px] ml-[149px]'>Get inspired by these stories.</p>
              <div className='mt-[24px] ml-[254px] w-[350px] h-[458px] rounded-[8px] px-8 relative shadow-lg'>
                <Image src={CLI} alt={CLI}/>
                <Image className='absolute left-3' src={colon} alt={colon}/>
                <p className='text-[16px] leading-[32px]'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit ut<br/>aliquam, purus sit amet luctus<br/>venenatis, lectus magna fringilla<br/>urna, porttitor rhoncus dolor<br/>purus non enim praesent elem</p>
                <p className='text-[18px] font-bold mt-[24px]'>Floyd Miles</p>
                <p className='text-sm font-medium text-[#969BAB]'>Vice President, CLI</p>
              </div>
              <h1 className='font-extrabold text-[48px] leading-[64px] mt-[105px]'>We serve over 100
              Nigerian Websites</h1>
              <p className='text-[18px] text-[#18191F] mt-[8px]'>Connect LemonWares with your favourite tools that<br/>you use daily and keep things on track.</p>
            </div>
            <div className='w-1/2 h-full'>
              <div className='w-[445px] h-[350px] px-8 pt-[39px] pb-[14px] bg-white shadow-lg ml-[30px] mt-[105px] relative'>
                <Image src={JPNL} alt={JPNL}/>
                <Image className='absolute left-3 top-27' src={colon} alt={colon}/>
                <p className='mt-[15px] teaxt-[16px] leading-[32px]'>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit ut aliquam, purus sit amet<br/>luctus venenatis, lectus magna fringilla urna,<br/>porttitor rhoncus dolor purus non enim<br/>praesent elem</p>
                <p className='font-bold text-[18px] mt-[24px] text-0[#18191F]'>Jane Cooper</p>
                <p className='text-sm font-medium text-[#969BAB]'>CEO, JPNL</p>
              </div>
              <div className='w-[350px] h-[276px] bg-white px-8 pt-[41px] pb-8 ml-[30px] mt-[31px] shadow-lg relative'>
                <Image src={Leeve} alt={Leeve}/>
                <Image className='absolute left-3' src={colon} alt={colon}/>
                <p className='text-[18px] leading-[32px] text-[#LemonWares saved our time in Hosting my company page.]'>LemonWares saved our time in Hosting my company page.</p>
                <p className='text-[18px] font-bold mt-[24px]'>Kristin Watson</p>
                <p className='text-sm font-medium text-[#969BAB]'>Co-Founder, LeeveOn Branding</p>
              </div>

              <div className='w-full mt-[33px] ml-[30px]'>
                <div className='flex items-center gap-[65px]'>
                  <Image src={JPNL} alt={JPNL}/>
                  <Image src={Korane} alt={Korane}/>
                  <Image src={Nadine} alt={Nadine}/>
                </div>
                <div className='flex items-center gap-[45px]'>
                  <Image src={Leeve} alt={Leeve}/>
                  <Image src={Jrango} alt={Jrango}/>
                  <Image src={CLI} alt={CLI}/>
                </div>
              </div>

            </div>
          </div>

          <div className='w-full bg-[#F7FAFE] rounded-[16px] flex flex-col  items-center relative pb-[88px] mb-[110px] mt-[106px]'>
            <h1 className='font-semibold text-[64px] leading-[88px] text-center mt-20 mb-10'>We're here to make your<br/>website awesome.</h1>
            <Button imgSrc={whatsapp} ButtonContent={`Get  in touch with us`}  className='bg-[#B00000] text-white'/>
            <Image className='absolute top-0 left-[434px]' src={Triangle1} alt={Triangle1}/>
            <Image className='absolute bottom-[88px] right-[1200px]' src={Triangle2} alt={Triangle2}/>
            <Image className='absolute bottom-[40px] left-[1185px]' src={Triangle3} alt={Triangle3}/>
          </div>
          
          <Footer/>
        </div>

      </div>

    </Container>
  )
}

export default Home
