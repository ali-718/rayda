import React from 'react'
import Cover from '../../Assets/images/cover.png'
import Like from '../../Assets/images/like.png'
import { Button } from '../Button/Button'
import { ProfileImage } from '../ProfileImage'
import { Status } from '../Status'
import './styles.css'

export const Profile = () => {
    return (
        <div className='border rounded-[10px] p-[20px] mt-[70px] bg-white proBackground'>
            <img src={Cover} className='w-full h-[160px] rounded' />
            <div className='mx-[30px] flex items-center justify-between'>
                <div className='flex'>
                    <div className='mt-[-60px]'>
                        <ProfileImage image={'https://cdn.pixabay.com/photo/2023/02/10/17/33/portrait-7781375_1280.jpg'} />
                    </div>

                    <div className='ml-[24px] mt-[10px]'>
                        <p className='text-[24px] medium'>Starts in: 3 days : 2 hours : 24 minutes </p>
                        <div className='flex items-center mt-2'>
                        <Status status={'Not Live'} />
                        <p className='ml-2 light'>Layers Auction</p>
                    </div>
                    </div>
                </div>

                <div>
                    <Button icon={<img src={Like} className='w-[16px] h-[16px]' />} type={'outline'} text={'Accept Invite'} />
                </div>
            </div>
        </div>
    )
}
