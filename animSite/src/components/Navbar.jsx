import React, { useRef, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const navBarRef = useRef(null)

  const [menu , setMenu] = useState(false)


  useGSAP(()=>{
    gsap.from(navBarRef.current,{
      opacity:0,
      y:-100,
      duration:0.6
    })
  })
  return (
    <>
      <nav ref={navBarRef} className='fixed top-0 w-full mix-blend-difference z-30'>
        <div className='mainContainer py-6 flex justify-between items-center'>
          <img src={Logo} alt="logo" className='h-10 w-auto cursor-pointer' />
          <div className='flex flex-col gap-1.5 cursor-pointer' onClick={()=>{
            setMenu(!menu)
          }}>
            <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 ${menu?"rotate-45 translate-y-[4px]":''}`}></span>
            <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 ${menu?"-rotate-45 -translate-y-[4px]":''}`}></span>
            <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white  ${menu?" opacity-0":''}`}></span>
          </div>
        </div>
      </nav>

      {/* full screen menu */}
      <div className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center text-3xl gap-8 transition-transform duration-300 ${menu?"translate-y-0":"-translate-y-full"} `} onClick={()=>setMenu(false)}>
        <Link to="/"  className='text-[10vw] lg:text-[6vw] font-heading font-medium uppercase lg:opacity-60 hover:opacity-100'>Home</Link>
        <Link to="/projects" className='text-[10vw] lg:text-[6vw] font-heading font-medium uppercase lg:opacity-60 hover:opacity-100'>Projects</Link>
        <a href='mailto:lalit@gmail.com' className='text-[10vw] lg:text-[6vw] font-heading font-medium uppercase lg:opacity-60 hover:opacity-100'>Contact</a>
      </div>
    </>
  )
}

export default Navbar
