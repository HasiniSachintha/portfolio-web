import React from 'react'
import ProjectSection from './components/ProjectSection'
import Footer from './layouts/footer'
import IntroSection from './components/IntroSection'

export default function App() {
  return (
    <div className='max-w-screen-2xl mx-auto w-full bg-black'>
  <IntroSection/>
  {/* <ProjectSection/> */}
  <Footer/>
    </div>
  )
}