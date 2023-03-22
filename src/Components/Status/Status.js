import React from 'react'
import './styles.css'

export const Status = ({ status }) => {
    return (
        <div className='w-max px-[15px] flex items-center justify-center rounded-full bg-[#FFFAEB]'>
            <p className='text-[#B54708] text-[14px] medium'>
                <ul>
                    <li className='status'>{status}</li>
                </ul>
            </p>
        </div>
    )
}
