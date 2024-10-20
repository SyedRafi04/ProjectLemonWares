import React from 'react'
import { GrCheckmark } from "react-icons/gr";

const Li2 = ({ ListItem }) => {
    return (
        <li className='flex gap-6 items-center font-inter'>
            <GrCheckmark />
            <p className='text-[#808080] font-bold text-[16px]'>{ListItem}</p>
        </li>

    )
}

export default Li2
