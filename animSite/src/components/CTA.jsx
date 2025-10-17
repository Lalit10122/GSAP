import React, { useRef } from 'react'
import GredientButton from './GredientButton'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/SplitText'

const CTA = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  const ctaRef = useRef(null)

  useGSAP(()=>{
    gsap.from(ctaRef.current,{
      backgroundColor:'white',
      color:'black',
      scrollTrigger:{
        trigger:ctaRef.current,
        start:"center bottom",
        end:"60% bottom",
        scrub:1
      }
    })
  })
  return (
    <>
      <div className="" ref={ctaRef}>
        <div className="mainContainer py-20 lg:py28 h-full flex flex-col gap-8 justify-center items-center">
          <h4 className='max-w-6xl text-2xl lg:text-5xl text-center leading-[1]'>Freelance projects , collaboration and full time opportunities. Let's get acquainted</h4>
          <GredientButton text="Book a Call" />
        </div>
      </div>
    </>
  )
}

export default CTA
