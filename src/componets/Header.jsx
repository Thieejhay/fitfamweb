import React, { useState } from 'react';
import logo from '../assets/logo.png';
import bars from '../assets/bars.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='flex justify-between'>
        <img src={logo} alt='what' className='w-[10rem] h-[3rem]'/>

      <div>
        <div className='hidden lg:flex lg:items-center space-x-8'>
          <Link to='home' spy={true} smooth={true} activeClass='active'><p className='hover:cursor-pointer hover:text-orange-300 text-gray'>Home</p></Link>
          <Link to='programs' spy={true} smooth={true} activeClass='active'><p className='hover:cursor-pointer hover:text-orange-300 text-gray'>Programs</p></Link>
          <Link to='reasons' spy={true} smooth={true} activeClass='active'><p className='hover:cursor-pointer hover:text-orange-300 text-gray'>Reasons</p></Link>
          <Link to='plans' spy={true} smooth={true} activeClass='active'><p className='hover:cursor-pointer hover:text-orange-300 text-gray'>Plans</p></Link>
          <Link to='testimonials' spy={true} smooth={true} activeClass='active'><p className='hover:cursor-pointer hover:text-orange-300 text-gray'>Testimonials</p></Link>
        </div>
        <div className='p-2 bg-appColor rounded-md lg:hidden' onClick={()=> setMenuOpened(true)}>
            <img src={bars} alt=''style={{width: '1.5rem', height: '1.5rem'}}/>
        </div>
      </div>

      { menuOpened && (
         <motion.div className='flex items-center flex-col text-start z-20 justify-start p-8 fixed w-screen lg:hidden h-fit top-4 right-0 bottom-0 space-y-8 bg-appColor' initial={{ x:'100vw'}}
         animate={{ x: 0}} transition={{type: 'spring', duration: 2, bounce: 0.3, delay: 0.4}}>
           <Link to='home' spy={true} smooth={true} onClick={()=>setMenuOpened(false)} activeClass='active'><p className='text-gray'>Home</p></Link>
           <Link to='programs' spy={true} smooth={true} onClick={()=>setMenuOpened(false)} activeClass='active'><p className='text-gray'>Programs</p></Link>
           <Link to='reasons' spy={true} smooth={true} onClick={()=>setMenuOpened(false)} activeClass='active'><p className='text-gray'>Reasons</p></Link>
           <Link to='plans' spy={true} smooth={true} onClick={()=>setMenuOpened(false)} activeClass='active'><p className='text-gray'>Plans</p></Link>
           <Link to='testimonials' spy={true} smooth={true} onClick={()=>setMenuOpened(false)} activeClass='active'><p className='text-gray'>Testimonials</p></Link>
         </motion.div>
    )}
    </div>
  )
}

export default Header;