import React from 'react'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import Homeheader from './HomeHeader'
import UserCards from './UserCards'
import Mission from './Mission'
import Partners from './Partners'
import HomeAbout from './HomeAbout'
import Donations from './Donations'

const Homepage = () => {
    return (
      <div>
        <Header />
        <Homeheader />
        <HomeAbout />
        <UserCards />
        <Mission />
        <Donations />
        <Partners />
        <Footer />
      </div>
    );
}

export default Homepage
