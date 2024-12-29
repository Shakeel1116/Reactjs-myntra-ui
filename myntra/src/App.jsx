import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import {data} from './collect'
import Collections from './Collections'
import Footer from './Footer'

const App = () => {
   
  const [catergory,updatecategory]=useState(data)
   
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Collections catergory={catergory}/>
      <Footer/>
  
    </div>
  )
}

export default App
