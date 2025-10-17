import React from 'react'

const Services = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="mainContainer pb-8 lg:pb-12">
            <h3>Services in Detail</h3>
        </div>
      </div>

      <div className='relative'>

        {/* 1st */}
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4 ">
          <div className='mainContainer grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center'>
            {/* left side */}
            <div className=' flex gap-6 lg:gap-8'>
              <span className='text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>01</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold  leading-[1]'>Web Design <br />& UI/UX</h2>
            </div>
            {/* right side */}
            <div className="flex items-center">
              <p className='text-lg lf:text-xl leading-relaxed'>
                Creative and detail-oriented web designer with expertise in crafting responsive, visually stunning, and user-focused websites. Skilled in modern design tools, UX/UI principles, and delivering digital experiences that enhance brand identity and engagement.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="bg-[#e9e9f0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className='mainContainer grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center'>
            {/* left side */}
            <div className=' flex gap-6 lg:gap-8'>
              <span className='text-grey-900 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>02</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold  leading-[1]'>Full Stack Development <br />SaaS</h2>
            </div>
            {/* right side */}
            <div className="flex items-center">
              <p className='text-lg lf:text-xl leading-relaxed'>
               Experienced in full stack SaaS development, building scalable, secure, and high-performing web applications. Skilled in front-end and back-end technologies, cloud integration, and database management to deliver seamless, reliable, and efficient software solutions that drive business growth and user engagement.
              </p>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="bg-white text-black py-16 lg:py-20  sticky top-2/3">
          <div className='mainContainer grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center'>
            {/* left side */}
            <div className=' flex gap-6 lg:gap-8'>
              <span className='text-gray-900 text-lg lg:text-2xl font-heading tracking-wide block mb-4'>03</span>
              <h2 className='text-[8vw] md:text-6xl font-heading font-bold  leading-[1]'>Mobile App Development</h2>
            </div>
            {/* right side */}
            <div className="flex items-center">
              <p className='text-lg lf:text-xl leading-relaxed'>
                Experienced in mobile app development, creating responsive, high-performance, and user-friendly applications for Android and iOS. Skilled in cross-platform frameworks like React Native and Flutter, focusing on seamless functionality, intuitive UI/UX, and optimized performance for engaging, scalable digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
