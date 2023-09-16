import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
        <Navbar 
            home = '/'
            page = 'HOME'
            page2 = 'SCHOOL'
            school = '/school'
            page3= "HOSPITAL"
            hospital = '/hospital'
        />
        HOME
    </>
  )
}

export default Home
