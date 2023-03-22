import React, { useEffect } from 'react'
import { Button } from '../Button/Button'
import { Product } from '../Product'
import '../Profile/styles.css'
import './styles.css'

export const Featured = () => {
    // useEffect(useGetPokemonByNameQuery(), [])

  return (
    <div className='border rounded-[10px] p-4 mt-[24px] proBackground'>
        <div className='py-6 flex items-center justify-between border-b'>
            <p className='text-[18px] medium'>Featured Items</p>
            <Button type={'outline'} text={'View Auction'} />
        </div>

        <div className='mt-[24px] gap-[20px] productGrid'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}
