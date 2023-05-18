import styles from '../style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from './index'


import React from 'react'

const Home = () => {
  return (
    <>
     <div className={`${styles.flexCenter} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>



    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        
      </div>
    </div>
    </>
  )
}

export default Home