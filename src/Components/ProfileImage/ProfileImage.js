import React from 'react'
import './styles.css'

export const ProfileImage = ({ image }) => {
  return (
    <div className='profile bg-white rounded-full w-[140px] h-[140px] flex items-center justify-center'>
        <img src={image} className='w-[132px] h-[132px] rounded-full object-cover' />
    </div>
  )
}
