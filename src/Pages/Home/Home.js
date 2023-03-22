import { Container } from '@mui/material'
import React from 'react'
import { Featured } from '../../Components/Featured'
import { Header } from '../../Components/header'
import { Profile } from '../../Components/Profile'

export const Home = () => {
  return (
    <Container maxWidth='xl' className='bg-[#FCFCFD]'>
        <Header />
        <Profile />
        <Featured />
    </Container>
  )
}
