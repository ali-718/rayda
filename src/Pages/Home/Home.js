import { Container } from '@mui/material'
import React from 'react'
import { Featured } from '../../Components/Featured'
import { Header } from '../../Components/header'
import { Profile } from '../../Components/Profile'
import { useGetProductsQuery } from '../../Services/Product'

export const Home = () => {
    const { data: { data } = [], isLoading } = useGetProductsQuery();

  return (
    <Container maxWidth='xl' className='bg-[#FCFCFD]'>
        <Header />
        <Profile />
        <Featured list={data} isLoading={isLoading} />
    </Container>
  )
}
