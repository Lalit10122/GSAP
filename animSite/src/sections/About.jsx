import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/SplitText'

const About = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
  const aboutRef = useRef(null)

  // text animation on words
  useGSAP(()=>{
    SplitText.create(".about-text",{
      type:"lines , chars",
      onSplit(self){
        gsap.set(self.chars,{
          opacity:0.25
        })
        gsap.to(self.chars,{
          opacity:1,
          stagger:0.05,
          scrollTrigger:{
            trigger:aboutRef.current,
            start:"top 70%",
            end:"center center",
            scrub:1
          }
        })
      }
    })
  })

  return (
    <>
      <div className=" z-10 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] ">
        <div className='about-text mainContainer py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl leading-[1.25] md:text-3xl xl:text-5xl ' ref={aboutRef}>
          Innovative and results-driven Web Developer and Designer with a strong passion for creating responsive, visually appealing, and user-centric digital experiences. Skilled in front-end technologies, modern design tools, and performance optimization. Combines technical expertise with creative vision to build websites that are not only functional but also align with brand identity and enhance user engagement.
        </div>
      </div>
    </>
  )
}

export default About
