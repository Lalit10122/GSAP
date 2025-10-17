import React, { useRef } from 'react'
import GredientButton from '../components/GredientButton'
import star from '../assets/images/star.svg'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/SplitText'




const Hero = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
  const heroRef = useRef(null)

  // pin hero section
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1
    })
    // gsap.to(heroRef.current,{
    //   scrollTrigger:{
    //     trigger:heroRef.current,
    //     start: "top top",
    //   end: "bottom top",
    //   pin: true,
    //   pinSpacing: false,
    //   scrub: 1
    //   }
    // })
  })


  // text animatioin

  useGSAP(function () {
    gsap.from(".text-anim", {
      y: 100,
      opacity: 0,
      delay:0.2,
      stagger: 0.3,
      // scale:0
    })
  })

  // SplitText.create("h1", {
  //   type: "line words",
  //   mask: "lines",
  //   autoSplit: true,
  //   onSplit(self) {
  //     gsap.from(self.words, {
  //       y: 100,
  //       opacity: 0,
  //       stagger: 0.2
  //     })
  //   }
  // })

  // SplitText.create("h2", {
  //   type: "line words",
  //   mask: "lines",
  //   autoSplit: true,
  //   onSplit(self) {
  //     gsap.from(self.words, {
  //       y: 100,
  //       opacity: 0,
  //       stagger: 0.2,
  //       delay: 0.5
  //     })
  //   }
  // })

  useGSAP(() => {
    gsap.from(".gredient-btn", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.25,

    })
  })
  // star animation
  useGSAP(() => {
    gsap.from(".star ", {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transformOrigin: "center center",
      duration: 4,
      ease: "back.out(1.7)",
      repeat: -1,

    })
  })



  return (
    <>
      <div className='relative overflow-hidden -z-20 ' ref={heroRef} >
        <div className="mainContainer h-screen  flex flex-col lg:justify-center items-start lg:py-12  max-lg:pt-40 text-anim ">
          <h1 className='text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold'>Lalit Patharia </h1>
          <h2 className='text-6xl lg:text-[8vw] font-heading font-bold leading-[1 ]tracking-tight mt-3 mb6`'>Web Developer  <br /> & <span className='text-stroke'>Designer</span></h2>
          <GredientButton text="Let's Talk" link="mailto:lalitpatharia090@gmail.com" className='gredient-btn' /*className="btn-light"*/ />
        </div>

        <div className="star absolute -z-10 top-32 right-[-12%]">
          <img src={star} alt="star" className='h-[80vh] star' />
        </div>
      </div>
    </>
  )
}

export default Hero
