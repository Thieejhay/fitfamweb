import React from 'react';
import { programData } from '../data/programData';
import rightArrow  from '../assets/rightArrow.png'

const Programs = () => {
  return (
    <div id='programs' className='flex flex-col gap-8 px-8'>
        <div className='flex lg:flex-row flex-col lg:gap-52 gap-4 lg:items-start items-center font-bold text-3xl justify-center text-white uppercase italic'>
            <span className='text-transparent text-stroke-white text-stroke-2'>Explore our</span>
            <span>Programs</span>
            <span className='text-transparent text-stroke-white text-stroke-2'>to shape you</span>
        </div>

        <div className='flex gap-4 lg:flex-row flex-col'>
            {programData.map((program) => (
                <div className='flex flex-col bg-gray p-8 gap-4 justify-between text-white hover:bg-gradient-to-r hover:from-[#fa5042] hover:to-orange-500' key={program.id}>
                    <span className='w-8 h-8 fill-white'>{program.image}</span>
                    <span className='font-bold text-base'>{program.heading}</span>
                    <span className='text-base leading-6'>{program.details}</span>
                    <div className='flex items-center gap-8'>
                        <span>Join Now</span><span>
                        <img src={rightArrow} alt='' className='w-4'/></span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;