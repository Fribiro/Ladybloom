import React from 'react'
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import Homeheader from './HomeHeader'
import UserCards from './UserCards'
import Mission from './Mission'
import Partners from './Partners'

const Homepage = () => {
    return (
        <div>
            <Header />
            <Homeheader />
            <Mission />
            <UserCards />
            <Partners />
            <Footer />
        </div>
    )
}

export default Homepage
