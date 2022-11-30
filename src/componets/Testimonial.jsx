import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialData';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';
import { motion } from 'framer-motion';


const Testimonial = () => {
    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0);
    const tlength = testimonialsData.length;

  return (
    <div className='flex flex-col lg:flex-row gap-4 px-8' id='testimonials'>
        <div className='flex basis-1/2 gap-8 flex-col uppercase text-white'>
            <span className='text-orange-300 font-bold'>Testimonials</span>
            <span className='text-transparent text-stroke-white text-stroke-2 italic font-bold lg:text-5xl text-2xl'>What they</span>
            <span className='font-bold lg:text-5xl text-2xl'>say about us</span>
            <motion.span
             className='normal-case text-justify tracking-wider leading-10'
             key={selected}
             initial={{opacity: 0, x: 100}}
             animate={{opacity: 1, x: 0}}
             exit={{opacity:0, x: -100}}
             transition={transition}>{testimonialsData[selected].review}</motion.span>
            <div className='flex'>
            <span className='text-orange-400'>{testimonialsData[selected].name}</span><span>-{testimonialsData[selected].status}</span>
            </div>
        </div>
        <div className='relative basis-1/2 flex lg:flex-row flex-col gap-8 lg:gap-0 items-center justify-center'>
            <motion.div
             className='lg:absolute w-64 h-80 border-2 border-orange-400 bg-transparent right-36 top-4 relative hidden lg:flex'
             initial={{opacity: 0, x: -100}}
             whileInView={{opacity: 1, x:0}}
             transition={transition}></motion.div>
            <motion.img
             src={testimonialsData[selected].image} 
             alt='' className='lg:absolute w-64 h-80 object-cover lg:right-32 lg:top-8 top-0 right-0 relative self-center'
             key={selected}
             initial={{opacity: 0, x: 100}}
             animate={{opacity: 1, x: 0}}
             exit={{opacity:0, x: -100}}
             transition={transition}/>

            <div className='flex gap-4 absolute lg:bottom-4 lg:left-12 -bottom-16 left-0'>
                <img src={leftArrow} alt='' className='w-8 cursor-pointer' onClick={() => {
                    selected === 0 ? setSelected(tlength - 1) : setSelected((prev) => prev - 1);
                }}/>
                <img src={rightArrow} alt=''className='w-8 cursor-pointer' onClick={() => {
                    selected === tlength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
                }}/>
            </div>
        </div>
    </div>
  )
}

export default Testimonial;