import react from 'react';

export default function Featured() {
  return (
    <div>
      <div className='xl:ml-52 lg:ml-52 md:ml-16 xl:mr-52 lg:mr-52 md:mr-16 mt-10'>
        <div className='text-start text-2xl text-black font-bold'>Featured Skills</div>
        <div className='flex text-start mt-5'>
          <div className=' min-w-[18em] min-h-[16em] mr-8   w-full h-full rounded-md bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-200 p-1'>
            <div className='min-h-[16em] bg-white rounded-md p-4'>
              <div className='text-gray-500 font-semibold text-lg  mb-3'>Frontend</div>
              <div className='text-gray-500 mb-5'>
                I maintain profieciency in Javascript, React, HTML, and CSS. I have also built applications using
                Jquery, and templating languages such as Handlebars.js
              </div>
            </div>
          </div>
          <div className='min-w-[18em] min-h-[16em] mr-8  w-full h-full rounded-md bg-gradient-to-r from-purple-200 via-violet-500 to-indigo-600 p-1'>
            <div className=' min-h-[16em] bg-white rounded-md p-4'>
              <div className='text-gray-500 font-semibold text-lg  mb-3'>Backend</div>
              <div className='text-gray-500 mb-5'>
                I have produced applications using several different backend technologies, including: Node.js, SQL,
                Sequelize, Mongoose, MongoDB, Express.js, GraphQl, Socket.io
              </div>
            </div>
          </div>
          <div className='min-h-[16em] min-w-[18em] mr-8  w-full h-full rounded-md bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-200 p-1'>
            <div className='min-h-[16em] bg-white rounded-md p-4'>
              <div className='text-gray-500 font-semibold text-lg  mb-3'>UI/UX Design</div>
              <div className='text-gray-500 mb-5'>
                Beyond custom CSS. I have also worked with several design frameworks, including: Tailwind, Bootstrap,
                and Materialize. Additionally delving into Tailwind's component libraries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
