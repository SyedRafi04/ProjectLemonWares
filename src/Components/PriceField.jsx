import React from 'react'
import Button from './layers/Button'
import Li2 from './layers/Li2'


const PriceField = ({ Price, header}) => {
    return (
        <div className='w-1/3 rounded-[11px] border-[1px] border-[#C4C4C4] px-[35px] pt-[34px] pb-[48px] font-poppins'>
            <h1 className='font-semibold text-[28px] leading-[25px]'>{header}</h1>
            <p className='text-[12px] leading-[18px] mt-[11px]'>with all your customers via all<br />conversation channels in one central<br />dashboard.</p>
            <p className='font-semibold text-[42px] leading-[32px] mt-[28px]'>{Price}</p>
            <p className='text-sm font-light leading-[14px] mt-[11px]'>Per month</p>
            <Button className='font-semibold text-sm w-full mt-[35px] mb-[35px]' ButtonContent={'Choose this Plan'} />
            <ul>
                <Li2 ListItem={'2GB SSD'} />
                <Li2 ListItem={'10GB Bandwidth'} />
                <Li2 ListItem={'15 Email Accounts'} />
                <Li2 ListItem={'Unlimited Database'} />
                <Li2 ListItem={'4 Subdomains'} />
                <Li2 ListItem={'1 Parked Domain'} />
                <Li2 ListItem={'2 Websites'} />
                <Li2 ListItem={'Free SSL'} />
                <Li2 ListItem={'Softaculous'} />
            </ul>
        </div>
    )
}

export default PriceField
