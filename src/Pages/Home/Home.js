import { Container } from '@mui/material'
import React from 'react'
import { Header } from '../../Components/header'
import { Profile } from '../../Components/Profile'

export const Home = () => {
  return (
    <Container>
        <Header />
        <Profile />
    </Container>
  )
}
