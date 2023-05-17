import Sidebar from '../Sidebar'
import './index.scss'
import React from 'react'
import About from './about'
import Ready from './Ready'

const Layout = () => {
    return(
       <><Sidebar />
        <Ready />
        <About />
       </>
    )
}

export default Layout