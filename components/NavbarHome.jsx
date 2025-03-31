'use client'

import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import LinkHover from './LinkHover'
import ThemeToggle from './Theme-toggle'

const NavbarHome = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-8rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? " bg-transparent backdrop-blur-lg shadow-sm" : ""}`}>
        <a href='#top'>
          <Image src={isDarkMode ? "/image/Ittiphol-d.png" : "/image/Ittiphol-w.png"} width={100} height={100} 
          className='w-28 cursor-pointer mr-14  rounded-full' alt=''/>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        ${isScroll ? "" : " shadow-sm bg-gray-30 dark:border dark:border-white/50 dark:bg-transparent"} `}>
          <li><a className='font-Ovo'  href="#top"><LinkHover text="Home" /></a></li>
          <li><a className='font-Ovo'  href="#about"><LinkHover text="About&nbsp;Me" /></a></li>
          <li><a className='font-Ovo'  href="#services"><LinkHover text="Services" /></a></li>
          <li><a className='font-Ovo'  href="#projects"><LinkHover text="Projects" /></a></li>
          <li><a className='font-Ovo'  href="#contact"><LinkHover text="Contact" /></a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={()=> setIsDarkMode(prev => !prev)}>
            <ThemeToggle />
          </button>

          <a  href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
          rounded-full ml-4 font-Ovo dark:border-white/50 '>
            <LinkHover text="Contact"/>
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt=''/>
          </a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
            </button>
          
        </div>

        {/* -- ----- mobile menu ----- -- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50
        h-screen bg-rose-50 transition duration-500 dark:bg-black dark:text-white'>

          <div className='absolute left-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top"><LinkHover text="Home" /></a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about"><LinkHover text="About&nbsp;ME" /></a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services"><LinkHover text="Services" /></a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work"><LinkHover text="Projects" /></a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact"><LinkHover text="Contact" /></a></li>
        </ul>

      </nav>
    </>
  )
}

export default NavbarHome