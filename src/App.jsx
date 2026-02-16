import { useState } from 'react'
import Mainbg from './images/6385146.jpg'
import { Navigation } from './Navigation'
import { HeroSection } from './HeroSection'
import { MainContentBody } from './MainContentBody'
import { Footer } from './Footer'
function App() {

  return (
    <>
      <div className='p-2'>
        <Navigation/>
        <HeroSection/>      
        <MainContentBody/>
        <Footer/>
      </div>
    </>
  )
}

export default App
