import react from 'react';

export default function Nav() {
  return (
    <div className='xl:ml-52 md:ml-16 lg:ml-52'>
      <div className='hidden lg:flex md:flex xl:flex text-gray-500 font-md font-semibold mt-14 mb-14'>
        <div className='hover:text-black xl:mr-10  lg:mr-10 md:mr-6'>Bio</div>
        <div className='hover:text-black xl:mr-10  lg:mr-10 md:mr-6'>Featured</div>
        <div className='hover:text-black xl:mr-10  lg:mr-10 md:mr-6'>Portfolio</div>
        <div className='hover:text-black xl:mr-10 lg:mr-10 md:mr-6'>Contact</div>
      </div>
    </div>
  );
}
