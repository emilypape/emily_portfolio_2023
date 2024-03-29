import React from 'react';
import parkscape from '../assets/images/parkscape.jpg';
import dinnerThyme from '../assets/images/dinnerThyme.jpg';
import { Icon } from '@iconify/react';

export default function Portfolio() {
  return (
    <div>
      <div className='text-start ml-16 text-2xl text-black font-bold xl:ml-52 lg:ml-52 md:ml-16 xl:mr-52 lg:mr-52  mt-14'>
        Portfolio
      </div>
      <div className='flex '>
        <div className='relative mb-[10em] md:mb-32 lg:mb-0 xl:mb-0 flex mt-[18em] lg:mt-44 md:mt-72 xl:mt-44 lg:ml-[25em]  xl:ml-[25em] ml-[20em]'>
          <div classNameName='w-96 mx-auto'>
            {/* <!-- first --> */}
            <div className=''>
              <input className='sr-only peer' type='radio' name='carousel' id='carousel-1' checked />
              {/* <!-- content #1 --> */}
              <div className='w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0'>
                <a target='_blank' rel='noreferrer' href='https://dinner-thyme.herokuapp.com/home'>
                  <img className='rounded-t-lg w-96 h-64' src={dinnerThyme} alt='' />
                </a>
                <div className='py-4 px-8'>
                  <h1 className='hover:cursor-pointer mt-2 text-gray-500  font-bold text-2xl text-start  tracking-tight'>
                    Dinner Thyme
                  </h1>
                  <p className='hover:cursor-pointer py-3 text-gray-500 text-start overflow-scroll max-h-[12em]'>
                    <p className=''>
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        {' '}
                        Dinner Thyme
                      </span>{' '}
                      is a social media app for chefs and recipe enthusiasts! Users can create their own recipes,
                      cookbooks, and community by following users and engaging in comments and likes! Want to plan a
                      party?{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        Dinner Thyme
                      </span>{' '}
                      suggests new users to follow, and recipes you might like! Just save your favorites to a new
                      cookbook and planning is done in an instant. Or, check out your friend's favorites by sharing
                      their cookbooks.
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        {' '}
                        Dinner Thyme
                      </span>{' '}
                      is built using backend technologies such as{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        Next.js
                      </span>
                      ,{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        MySQL
                      </span>
                      , and{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        Sequelize
                      </span>
                      . With{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        React
                      </span>
                      ,
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        Tailwind
                      </span>
                      , and{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                        Custom CSS
                      </span>{' '}
                      supporting the frontend.{' '}
                    </p>
                  </p>
                </div>
                {/* <!-- controls --> */}
                <div className='absolute top-1/2 w-full flex justify-between z-20'>
                  <label
                    for='carousel-3'
                    className='inline-block text-purple-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </label>
                  <label
                    for='carousel-2'
                    className='inline-block text-purple-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- second --> */}
            <div className=''>
              <input className='sr-only peer' type='radio' name='carousel' id='carousel-2' />
              {/* <!-- content #2 --> */}
              <div className='w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0'>
                <a target='_blank' rel='noreferrer' href='https://emilypape.github.io/parkscape/'>
                  <img className='rounded-t-lg w-96 h-64' src={parkscape} alt='' />
                </a>
                <div className='py-4 px-8'>
                  <h1 className='hover:cursor-pointer text-start mt-2 text-gray-500 font-bold text-2xl tracking-tight'>
                    Parkscape
                  </h1>
                  <p className='hover:cursor-pointer py-3 text-gray-600 text-start overflow-scroll max-h-[12em]'>
                    <p className=''>
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        Parkscape
                      </span>{' '}
                      was built to help plan last minute trips to America's National Parks! It utilizes the{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        NPS API
                      </span>
                      , and the{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        OpenWeatherMap API
                      </span>{' '}
                      to give users in depth information on a particular park and the travel conditions. Users can also
                      compile a bucketlist of attractions to the parks, and update and delete from the list as they
                      please.{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        Parkscape
                      </span>{' '}
                      is built with{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        Javascript
                      </span>
                      , <span className='ps-span-text'>JQuery</span>,{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        HTML
                      </span>
                      ,{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        Custom CSS
                      </span>
                      , and{' '}
                      <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600'>
                        Materialize
                      </span>
                      .{' '}
                    </p>
                  </p>
                </div>
                {/* <!-- controls --> */}
                <div className='absolute top-1/2 w-full flex justify-between z-20'>
                  <label
                    for='carousel-1'
                    className='inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </label>
                  <label
                    for='carousel-3'
                    className='inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fill-rule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- three --> */}
          </div>
        </div>
        <div className='  max-w-[35em] text-md text-start xl:ml-52 lg:ml-72 md:ml-16 md:hidden lg:block  mr-[15em] text-gray-500'>
          <div className='hidden lg:blockl md:block xl:block mt-[10em]'>
            My projects offer a creative, innovative design style combined with popular components and style
            conventions. I've designed numerous websites and developed two independent applications and assisted with
            several applications that are deployed and available to the public. I'm well-versed in four plus coding
            languages displayed in my featured projects, including{' '}
            <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
              Javascript
            </span>{' '}
            and{' '}
            <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
              React.js
            </span>
            , and proficient in{' '}
            <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
              UI/UX design
            </span>
            .
            <a target='_blank' href='https://github.com/emilypape' className=' flex justify-center mt-10  '>
              <Icon icon='radix-icons:github-logo' color='gray' width={50} height={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
