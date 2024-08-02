import React from 'react'
import Body from './screens/Body'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Login from './screens/Login'
// import Model from "react-modal"


function Home() {
  return (
    <>
        <div className="">
        {/* <Model
            isOpen={true}
            style={{
              // overlay: {
              //   background:'rgb(0, 0, 0, 0.6)',
              //   backgroundBlendMode:"darken",
              //   margin: "auto",
              //   zIndex:"2",
              //   width:"70%"

              // },
            }}
          > 
            <Login />
          </Model>*/}
        <div>
        <div><Navbar/></div>
        <div> <Body /></div>
        <div><Footer/></div>


        </div>

        </div>
       
    </>
  )
}

export default Home
