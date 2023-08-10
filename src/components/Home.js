import { useRef } from 'react';
import Nav from './Nav';
import Bio from './Bio';
import Featured from './Featured';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <div className='xl:ml-52 md:ml-16 lg:ml-52'>
        <div className='flex ml-16 lg:ml-0 md:ml-0 xl:ml-0 lg:flex md:flex xl:flex text-gray-500 font-md font-semibold mt-14 mb-14'>
          <div className=' mr-8 hover:text-black xl:mr-10  lg:mr-10 md:mr-6 '>Bio</div>
          <div className=' mr-8 hover:text-black xl:mr-10  lg:mr-10 md:mr-6'>Featured</div>
          <div className=' mr-8 hover:text-black xl:mr-10  lg:mr-10 md:mr-6'>Portfolio</div>
          <div className='hover:text-black xl:mr-10 lg:mr-10 md:mr-6'>Contact</div>
        </div>
      </div>
      <Bio />
      <Featured />
      <Portfolio />
      <Contact />
    </div>
  );
}
