import React from 'react'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import adidas from '../../assets/adidas.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';

const Reason = () => {
  return (
    <div id='reasons' className='px-4 flex gap-8 lg:flex-row flex-col'>
        <div className='basis-1/2 grid grid-cols-3 gap-4'>
            <img src={image1} alt='' className='object-cover w-52 row-span-3 h-[28rem]'/>
            <img src={image2} alt=''className='object-cover w-auto h-64 col-span-2'/>
            <img src={image3} alt=''className='object-cover w-56'/>
            <img src={image4} alt=''className='object-cover w-40'/>
        </div>
        <div className='basis-1/2 flex flex-col uppercase gap-4'>
            <span className='font-bold text-orange-300'>some reasons</span>

            <div className='text-white text-5xl font-bold'>
                <span className='text-transparent text-stroke-white text-stroke-2 italic'>Why </span>
                <span>choose us?</span>
            </div>

            <div className='flex flex-col gap-4 text-white'>
                <div className='flex text-base gap-4'>
                    <img src={tick} alt="" className='h-8 w-8'></img>
                    <span>OVER 140+ COACHES</span>
                </div>
                <div className='flex text-base gap-4'>
                    <img src={tick} alt="" className='h-8 w-8'/>
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div className='flex text-base gap-4'>
                    <img src={tick} alt="" className='h-8 w-8'/>
                    <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                </div>
                <div className='flex text-base gap-4'>
                    <img src={tick} alt=""className='h-8 w-8' />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>

            <span className='text-gray font-normal'>OUR PATRTNERS</span>

            <div className='flex gap-4'>
                <img src={nb} alt="" className='w-12'/>
                <img src={adidas} alt="" className='w-12'/>
                <img src={nike} alt="" className='w-12'/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Reason;;