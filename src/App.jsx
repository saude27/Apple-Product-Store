import React, { useState } from 'react'
import Controls from './Components/Controls'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Iphone from './Components/Iphone'
import Macbook from './Components/Macbook'
import Watch from './Components/Watch'
import IMac from './Components/IMac'
import PageTransition from './Components/PageTransition'

const App = () => {

  const [frameZoom, setFrameZoom] = useState(false)
  const [activePage, setActivePage] = useState(0)
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  function toggleZoom() {
    setFrameZoom(!frameZoom);
  }

  function handleNavClick(pageIndex) {
    setActivePage(pageIndex);

  }
  function toggleNavBar() {
    setIsNavBarOpen(!isNavBarOpen);
  }

  function resetPage() {
    setActivePage(0);
  }
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className={`${frameZoom && 'min-w-[97vw] min-h-[97vh] '} flex w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100`}>
        <Navbar activePage={activePage} handleNavClick={handleNavClick} isNavBarOpen={isNavBarOpen} toggleNavBar={toggleNavBar} />
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} resetPage={resetPage} activePage={activePage}/>
        <div className='flex-grow'>
        
          <PageTransition activePage={activePage}>
           <Home onNavigate={handleNavClick} />
           <Iphone />
           <Macbook />
           <Watch />
           <IMac />
          </PageTransition>
        
        </div>
       </div>
      
    </div>
  )
}

export default App
