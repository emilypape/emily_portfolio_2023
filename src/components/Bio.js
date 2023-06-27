import react from 'react';
import headshot from '../assets/images/headshot.jpg';

export default function Bio() {
  return (
    <div className=''>
      <div className='flex text-start xl:ml-52 lg:ml-52 md:ml-16'>
        <div className='flex-col '>
          <div className='text-black font-bold text-4xl mb-1'>Emily Pape</div>
          <div className='text-gray-500 font-semibold text-lg  mb-3'>Fullstack Developer</div>
          <p className='text-gray-500 text-start mr-10 '>
            Hello! I'm Emily and I am an avid hiker and outdoors-woman that you can find on the computer during the
            weekdays. I consider myself an exceptionally well rounded, organized and resourceful Professional. I have
            three years of development experience and a solid academic background including a Bachelors degree and
            several certifications. I am well-versed in four plus coding languages, including Javascript and React.js,
            and am proficient in UI/UX design. I am currenly seeking opportunities that will expand and build upon my
            stack.{' '}
          </p>
        </div>
        <img
          src={headshot}
          className='rounded-br-full rounded-tl-full rounded-tr-full max-h-[23em] max-w-[28em] shadow-xl ml-10 shadow-inner xl:mr-52 lg:mr-52 md:mr-16'
        />
      </div>
    </div>
  );
}
