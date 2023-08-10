import { useRef } from 'react';

export default function Nav({ handleClickScroll }) {
  return (
    <div className='xl:ml-52 md:ml-16 lg:ml-52'>
      <div className='hidden lg:flex md:flex xl:flex text-gray-500 font-md font-semibold mt-14 mb-14'>
        <div
          onClick={() => handleClickScroll('Bio')}
          className='hover:text-black xl:mr-10 cursor-pointer  lg:mr-10 md:mr-6 '>
          Bio
        </div>
        <div
          onClick={() => handleClickScroll('Featured')}
          className='hover:text-black xl:mr-10 cursor-pointer lg:mr-10 md:mr-6'>
          Featured
        </div>
        <div
          onClick={() => handleClickScroll('Portfolio')}
          className='hover:text-black cursor-pointer xl:mr-10  lg:mr-10 md:mr-6'>
          Portfolio
        </div>
        <div
          onClick={() => handleClickScroll('Contact')}
          className='hover:text-black xl:mr-10 cursor-pointer lg:mr-10 md:mr-6'>
          Contact
        </div>
      </div>
    </div>
  );
}
