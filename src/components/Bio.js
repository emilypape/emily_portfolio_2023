import { useState } from 'react';
import headshot from '../assets/images/headshot.jpg';

export default function Bio() {
  return (
    <div className=''>
      <div className='flex ml-16 lg:text-start md:text-start xl:text-start  xl:ml-52 lg:ml-52 md:ml-16'>
        <div className='flex-col mr-[-10em] lg:mr-0 md:mr-0 xl:mr-0'>
          <img
            src={headshot}
            className='lg:hidden xl:hidden med:hidden float-right  rounded-br-lg rounded-tl-lg max-h-[13em] rounded-bl-lg rounded-tr-lg  shadow-xl ml-5 shadow-inner '
          />
          <div className='text-black text-start font-bold text-4xl mb-1'>Emily Pape</div>
          <div className='text-gray-500 text-start font-semibold text-lg  mb-3'>Fullstack Developer</div>
          <p className='text-start text-gray-500 lg:text-start md:text-start xl:text-start lg:mr-10 md:mr-10 xl:mr-10'>
            Hello! I'm Emily and I am an avid hiker and outdoors-woman that you can find on the computer during the
            weekdays. I consider myself an exceptionally well rounded, organized and resourceful Professional. I have
            three years of development experience and a solid academic background including a Bachelors degree and
            several certifications. I am well-versed in four plus coding languages, including Javascript and React.js,
            and am proficient in UI/UX design. I am currenly seeking opportunities that will expand and build upon my
            stack.{' '}
          </p>
          <a
            target='_blank'
            href='https://docs.google.com/document/d/11Qxr9Kp4HDqm8bPyqkSzoaD0Z9jx0iZuqkTX1hYUcL8/edit?usp=sharing'
            className='flex justify-end'>
            <button
              type='button'
              class='font-semibold mt-14 mr-12 py-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2'>
              Resume
            </button>
          </a>
        </div>
        <img
          src={headshot}
          className='hidden lg:block xl:block md:block rounded-br-full rounded-tl-full rounded-tr-full max-h-[23em] max-w-[28em] shadow-xl ml-10 shadow-inner xl:mr-52 lg:mr-52 md:mr-16 '
        />
      </div>
    </div>
  );
}
