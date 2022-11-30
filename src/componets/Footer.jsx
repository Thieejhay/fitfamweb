import React from 'react';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedIn from '../assets/linkedin.png';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='relative'>
        <hr className='border-2 border-solid border-orange-400'/>
        <div className='py-4 px-8 flex flex-col gap-16 items-center justify-center h-80'>
            <div className='flex gap-16'>
                <img src={github} alt="" className='w-8 h-8 cursor-pointer'/>
                <img src={instagram} alt="" className='w-8 h-8 cursor-pointer'/>
                <img src={linkedIn} alt="" className='w-8 h-8 cursor-pointer'/>
            </div>
            <div>
                <img src={logo} alt='' className='w-40'/>
            </div>
        </div>
        <div className='absolute rounded-2xl blur-3xl -z-10 bg-orange-300 w-[26rem] h-[12rem] right-40 bottom-0'></div>
        <div className='absolute rounded-2xl blur-3xl -z-10 bg-orange-300 w-[26rem] h-[12rem] left-40 bottom-0'></div>
    </div>
  )
}

export default Footer;