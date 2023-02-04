import React from 'react'
import {Footer, Header, Navbar} from "@/components";


const Layout = (props) => {
  return (
    <>

        <Header/>
        <Navbar/>
        {props.children}
        <Footer/>


    </>
  )
}

export default Layout