import React from 'react'
import { SvgIcon } from '@mui/material';
import Bell from '../../Assets/images/bell.png'
import './styles.css'

export const Header = () => {
  return (
    <div className='flex py-6 justify-between border-b'>
        <div>
            <p className='text-red-600 text-3xl semibold text-black'>Welcome</p>
            <p className='light text-[16px] mt-2'>Your current sales auction and activity.</p>
        </div>

        <div className='relative'>
            <img src={Bell} className='w-[17px] h-[20px]' />
            <div className='w-[22px] h-[22px] flex items-center justify-center bg-red-600 rounded-full ml-[5px] mt-[-10px] absolute'>
                <p className='text-white text-[12px] regular'>2</p>
            </div>
        </div>
    </div>
  )
}
