import React, {useRef} from 'react';
import emailjs  from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ndmgtaj', 'template_of28obm', form.current, 'B9MRGWd47gnhHxvKW')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='flex px-8 gap-40 flex-col lg:flex-row' id='join'>
        <div className='text-white lg:text-5xl font-bold relative text-3xl'>
            <hr className='absolute w-44 border-2 border-orange-400 border-solid rounded-xl -mt-2 '/>
            <div className='flex gap-4'>
                <span className='text-transparent text-stroke-white text-stroke-2 italic'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div className='flex gap-4'>
                <span>YOUR BODY</span>
                <span className='text-transparent text-stroke-white text-stroke-2 italic'> WITH US</span>
            </div>
        </div>
        <div className='flex justify-center items-end'>
            <form className='flex gap-12 bg-gray py-4 px-8'>
                <input type='email' name='user_email' placeholder='Enter your Email Address' className='border-none bg-transparent outline-none text-lightgray placeholder:text-lightgray' onSubmit={sendEmail}></input>
                <button className='py-2 px-4 bg-orange-300 text-white'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join;