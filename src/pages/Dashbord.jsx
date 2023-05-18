import React from 'react'
import styles from '../style'
import { Navbar,Cards,DahboardCard } from '../components/index'
import { root } from "../main";
import Login from './login';


const Dashbord = () => {

  return (
    <div className=" bg-primary w-full overflow-hidden ">
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />

      </div>
    </div> */}
    <Cards />
    
    <DahboardCard/>
    
</div>
  )
}

export default Dashbord