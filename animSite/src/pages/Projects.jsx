import React from 'react'

import ProjectsData from '../components/ProjectData'
const Projects = () => {
  return (
   <>
    <div className="bg-white text-black">
      <div className="mainContainer py-28">
        <h2 className='text-6xl lg:text-[8vw] font-heading font-bold leading=[1] tracking-tight text-center'>Projects</h2>
          <div className='grid md:grid-cols-2  gap-8 mt-8 lg:mt-16'>
            {ProjectsData.map(({id,name ,image, link})=>(
              <a key={id} href={link} className='overflow-hidden flex flex-col'>
               <div className='overflow-hidden group rounded-2xl h-full'>
                 <img src={image} alt={name} className='h-full w-full object-cover transitioin-transform duration-300 group-hover:scale-105' />
               </div>
               <span className='uppercase leading-[1.4] lg:text-2xl font-heading mt-4'>{name}</span>
              </a>
            ))}
          </div>
      </div>
    </div>
  </>
  )
}

export default Projects
