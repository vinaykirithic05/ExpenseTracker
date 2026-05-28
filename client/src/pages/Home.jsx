import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Showcase from '../components/Showcase'
import Testimonials from '../components/Testimonials'
import PricePlan from '../components/PricePlan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div  className='w-full'>
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <Showcase />
        <Testimonials />
        <PricePlan />
        <Footer />
    </div>
  )
}

export default Home