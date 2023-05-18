import React, { useState, useEffect } from 'react'
import styles from './style'
import { Footer, Home, Navbar, Dashbord } from './components'



const Layout = () => {

 
  // const [isConnected, setisConnected] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3000/isConnected", {
  //       method: "GET",
  //     }).then(response => response.json())
  //       .then((json) => {
  //         setisConnected(json.isConnected);
  //         console.log(json.isConnected);
  //       })
  // }, []);

  // fetch("http://localhost:3000/isConnected", {
  //   method: "GET",
  // }).then(response => response.json())
  //   .then((json) => {
  //     setisConnected(json.isConnected);
  //   })

  return (
    <div className=" bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* {!isConnected && <Home />}
      {isConnected && <Dashbord />} */}
      <Home/>

      <div className={`${styles.paddingX}  w-full overflow-hidden`}>
        <Footer />
      </div>
    </div>


  )
}


export default Layout