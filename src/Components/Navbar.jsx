import React from 'react'
import { navItems } from '../Data'

const Navbar = ({activePage, handleNavClick, isNavBarOpen, toggleNavBar}) => {
  return (
    <>
      <div className={`2xl:w-80 xl:w-52 w-48 h-full bg-[#f8f8f8] flex flex-col justify-between pt-5 pl-6 pb-14 mb:pb-0 absolute md:relative z-10 ${isNavBarOpen ? 'translate-x-0' : '-translate-x-110 md:-translate-x-0'} transition-transform duration-300 ease-in-out`}>
      <a href="#" className='2xl:text-2xl xl:text-xl font-light text-red-500 mb-14 tracking-wider'>
        Apple Products
      </a>

      <div className='flex flex-col flex-grow'>
        {navItems.map((item, index) => (
        <a key= {index} 
             href="#" 
             className='xl:w-36 lg:w-32 flex items-center justify-between my-3.5 mr-4 text-left cursor-pointer'
             onClick={() => handleNavClick(index)}>
            <i className={`${item.icon} text-xl text-pink-400`}></i>
            <span className='text-sm text-gray-500 mr-auto mx-2.5 tracking-wider'>{item.label}</span>
            <i className={`${activePage === index ? item.activeIcon : item.inactiveIcon} text-lg text-yellow-400`}></i>
        </a>
        ))}
       
      </div>

      <div className='flex justify-between pr-6 pt-25'>
        <a href="#">
          <i className='bx bxl-instagram text-2xl text-red-600'></i>
        </a>

        <a href="#">
          <i className='bx bxl-twitter text-2xl text-red-600'></i>
        </a>

        <a href="#">
          <i className='bx bxl-facebook text-2xl text-red-600'></i>
        </a>

        <a href="#">
          <i className='bx bxl-youtube text-2xl text-red-600'></i>
        </a>
      </div>
    </div>
    <button onClick={toggleNavBar} className='fixed md:hidden bottom-4 left-4 p-2 text-4 text-blue-400'>
      {isNavBarOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
    </button>
    </>
    
  )
}

export default Navbar
