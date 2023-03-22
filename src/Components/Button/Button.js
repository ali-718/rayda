import React from 'react'

export const Button = ({ type, icon, text }) => {
    const outline = 'border rounded-[10px] bg-white' 
    const buttonType = type === 'outline' ? outline : ''

  return (
    <div role={'button'} className={`px-[14px] py-[8px] items-center justify-center flex ${buttonType}`}>
        {icon && icon} 
        <p className={'text-[14px] medium' + icon && ' ml-2'}>{text}</p>
    </div>
  )
}
