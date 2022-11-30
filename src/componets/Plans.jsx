import React from 'react';
import {plansData} from '../data/plansData';
import whiteTick from '../assets/whiteTick.png';
import { Link } from 'react-scroll'

const Plans = () => {
  return (
    <div className='px-8 flex flex-col relative gap-16' id='plans'> 
        <div className='absolute rounded-2xl blur-3xl -z-10 bg-orange-300 w-[32rem] h-[23rem] left-0 top-24'></div>
        <div className='absolute rounded-2xl blur-3xl -z-10 bg-orange-300 w-[32rem] h-[23rem] right-0 top-40'></div>
        <div className='flex lg:flex-row flex-col lg:gap-52 gap-4 lg:items-start items-center font-bold text-3xl justify-center text-white uppercase italic'>
            <span className='text-transparent text-stroke-white text-stroke-2'>Ready to start</span>
            <span>your journey</span>
            <span className='text-transparent text-stroke-white text-stroke-2'>now with us</span>
        </div>

        <div className='flex lg:flex-row flex-col items-center justify-center gap-16'>
            {plansData.map(( plan ) =>(
                <div className='flex flex-col bg-caloryCard text-white gap-8 p-8 w-64 even:bg-gradient-to-r from-[#fa5042] to-orange-500 even:scale-110' key={plan.id}>
                    <span className='fill-orange-400 w-8 h-8 even:fill-white'>{plan.icon}</span>
                    <span className='text-base font-bold'>{plan.name}</span>
                    <span className='font-bold text-5xl'>$ {plan.price}</span>

                    <div className='flex flex-col gap-4'>
                        {plan.features.map((feature, i) => (
                            <div className='flex gap-4 items-center' key={i}>
                                <img src={whiteTick} alt='' className='w-4'/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span className='text-sm'>see more benefits  </span>
                    </div>
                    <button className='py-2 px-4 bg-white text-black'><Link to='join' spy={true} smooth={true} activeClass='join'>Join now</Link></button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans;