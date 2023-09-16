import React from 'react'
import Navbar from '../components/Navbar'

function Hospital() {
  return (
    <div>
      <Navbar 
            home = '/'
            page = 'HOME'
            page2 = 'SCHOOL'
            school = '/school'
            page3= "HOSPITAL"
            hospital = '/hospital'
        />
        HOSPITAL
        <iframe width="500" height="300" src="https://api.maptiler.com/maps/fe2cb073-3aa4-42f1-bf30-2ed0448019ba/?key=ZQyqv6eWtI6zNE29SPDd#0.0/-24.21987/-139.30211"></iframe>
    </div>
  )
}

export default Hospital
