import React from 'react';
import Header from './Header';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import heart from '../assets/heart.png';
import calories from '../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import { Link } from 'react-scroll';
const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className='flex md:justify-between flex-col md:flex-row' id='home'>
        <div className='absolute rounded-2xl blur-3xl -z-10 bg-orange-300 lg:w-96 w-56 h-96 left-0'></div>
        <div className='lg:p-8 p-6 pt-6 basis-3/4 flex flex-col gap-8'>
            <Header />

            <div className='lg:mt-16 mt-0 rounded-3xl bg-[#363d42] w-fit py-5 px-4 text-white items-center relative flex lg:justify-start justify-center uppercase text-sm lg:text-base scale-90 lg:scale-100 lg:ml-0 ml-8'>
                <motion.div
                    className='absolute bg-orange-300 w-20 h-[80%] rounded-2xl left-2'
                    initial={{left: mobile ? '170px' : '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}>

                </motion.div>
                <span className='z-10'>The best fitness club in town</span>
            </div>

            <div className='flex flex-col gap-6 uppercase font-bold lg:text-7xl text-2xl  text-inherit items-center lg:items-start justify-center'>
                <div className=''>
                    <span className='text-transparent text-stroke-white text-stroke-2 italic'>Shape </span>
                    <span className='text-white'>Your</span>
                </div>

                <div>
                    <span className='text-white'>ideal Body</span>
                </div>

                <div className='font-extralight lg:text-base text-sm text-white w-[80%] normal-case lg:tracking-widest tracking-wide text-center lg:text-start'>
                    <span>In here we will help you to shape and build your ideal body and live your life to the fullest</span>
                </div>
            </div>

            <div className='flex flex-row gap-8 '>
                <div className='flex flex-col uppercase'>
                    <span className='lg:text-3xl text-white font-medium tracking-wider text-lg'><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                    <span className='text-gray text-sm lg:text-base'>expert coaches</span>
                </div>
                <div className='flex flex-col uppercase'>
                    <span className='lg:text-3xl text-white font-medium tracking-wider text-lg'><NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
                    <span className='text-gray text-sm lg:text-base'>members joined</span>
                </div>
                <div className='flex flex-col uppercase'>
                    <span className='lg:text-3xl text-white font-medium tracking-wider text-lg'><NumberCounter end={50} start={0} delay='4' preFix='+'/></span>
                    <span className='text-gray text-sm lg:text-base'>fitness programs</span>
                </div>

                <motion.div
                 className='lg:flex hidden gap-4 bg-caloryCard rounded-md p-4 lg:absolute w-fit lg:left-[35rem]'
                 initial={{left: '40rem'}}
                 whileInView={{left: '34rem'}}
                 transition={transition}>
                    <img src={calories} alt='' className='w-12 h-12'/>
                    <div className='flex flex-col justify-between'>
                        <span className='text-gray'>Calories Burned</span>
                        <span className='text-white text-2xl'>220 kcal</span>
                    </div>
                </motion.div>
            </div>

            <div className='flex gap-4 justify-center lg:justify-start mt-8 lg:mt-0'>
                <Link to='programs' spy={true} smooth={true} activeClass='active'><button className='py-2 lg:px-6 px-2 bg-orange-400 text-white border-2 border-transparent'>Get started</button></Link>
                <Link to='testimonials' spy={true} smooth={true} activeClass='active'><button className='py-2 lg:px-6 px-2 border-2 border-orange-300 text-white'>Learn More</button></Link>
            </div>
        </div>
        <div className='basis-1/4 relative lg:bg-orange-300'>
            <button className='py-2 px-4 bg-white absolute lg:right-12 top-8 text-black ml-4 lg:ml-0'><Link to='join' spy={true} smooth={true} activeClass='active'>Join Now</Link></button>

            <motion.div
             className='flex flex-col gap-4 bg-darkGrey w-fit p-4 items-start rounded-md lg:absolute  top-8 lg:top-28 relative'
             transition={transition}
             whileInView={{left: '13rem'}}
             initial={{left: '15rem'}}>
                <img src={heart} alt='' className='w-8'/>
                <span className='text-gray'>Heart Rate</span> <span className='text-white text-lg'>116bpm</span>
            </motion.div>

            <img src={hero_image} alt='' className='lg:absolute relative lg:top-40 lg:right-32 w-96'/>
            <motion.img
             src={hero_image_back} 
             alt='' 
             className='lg:absolute lg:top-16 lg:right-80 lg:-z-10 lg:w-60 hidden lg:flex'
             initial={{right: '11rem'}}
             whileInView={{right: '20rem'}}
             transition={transition}/>
             <img src={hero_image_back} alt='' className='lg:hidden absolute bottom-8 w-60 left-4 h-[36rem] -z-10'/>

            

        </div>
    </div>
  )
}

export default Hero;