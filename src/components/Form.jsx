import React from 'react'
import styles from '../style'
import {Footer, FormCard, Navbar} from './index'

const Form = () => {
  return (
    <div className=" bg-primary w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />

      </div>
    </div>
    
    <FormCard/>
    

<div className={`${styles.paddingX}  w-full overflow-hidden`}>
<Footer />
</div>
</div>
  )
}

export default Form