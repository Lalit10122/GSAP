import React from 'react'
import star1 from '../assets/images/star1.svg'
const Marque = () => {
  return (
    <>
      <div className="bg-white text-black pb-28 lg:pb-44 overflow-hidden">
        {/* row1 */}
        <div className='whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>

          <span className='flex gap-4 lg:gap-8 mx-8'>
            CREATE <img src={star1} alt="" className='marquee-start1 w-[7vw]' />
            DESIGN  <img src={star1} alt="" className='marquee-start1 w-[7vw]' />
            INSPIRE <img src={star1} alt="" className='marquee-start1 w-[7vw]' />

            CREATE <img src={star1} alt="" className='marquee-start1 w-[7vw]' />
            DESIGN  <img src={star1} alt="" className='marquee-start1 w-[7vw]' />
            INSPIRE <img src={star1} alt="" className='marquee-start1 w-[7vw]' />
          </span>
        </div>

        {/*  row 2 */}
        <div className='whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>
          
          <span className='flex gap-4 lg:gap-8 mx-8'>
            CREATE <img src={star1} alt="" className='marquee-start2 w-[7vw]' />
            DESIGN  <img src={star1} alt="" className='marquee-start2 w-[7vw]' />
            INSPIRE <img src={star1} alt="" className='marquee-start2 w-[7vw]' />

            CREATE <img src={star1} alt="" className='marquee-start2 w-[7vw]' />
            DESIGN  <img src={star1} alt="" className='marquee-start2 w-[7vw]' />
            INSPIRE <img src={star1} alt="" className='marquee-start2 w-[7vw]' />
          </span>
        </div>

      </div>
    </>
  )
}

export default Marque
