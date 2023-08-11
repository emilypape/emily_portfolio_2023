import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <div className=' bg-gray-200'>
      <div className=' mt-52 flex justify-between xl:ml-52 lg:ml-52 md:ml-16 xl:mr-52 lg:mr-52 md:mr-16'>
        <div className='mt-10 hidden lg:block md:hidden xl:block'>
          <div>
            <div className='text-start text-3xl tracking-tight font-bold  text-black'>
              Let's{' '}
              <span className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                chat.
              </span>{' '}
            </div>
            <div className=' text-3xl tracking-tight font-bold text-start text-black'>Tell me about your</div>
            <div className='text-start mb-4 text-3xl font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
              team.
            </div>
          </div>
          <div className='text-gray-500 mt-5 font-bold'>Let's create something together 👋 </div>
          <div className='shadow-lg rounded-lg p-2 mt-12 flex bg-white'>
            <Icon icon='line-md:email-twotone' color='gray' width={40} height={40} />
            <div className='text-start ml-5'>
              <div className='font-bold'>Mail me at</div>
              <a type='email' href='mailto:eap6787@gmail.com'>
                <div className='font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 '>
                  eap6787@gmail.com
                </div>
              </a>
            </div>
          </div>
        </div>
        <section class='bg-gray-200'>
          <div class='  mx-auto max-w-screen-md'>
            <h2 class='py-3 mb-4 text-3xl tracking-tight font-bold text-end text-gray-900 dark:text-black'>
              Send me a message 🚀
            </h2>
            <form action='https://formsubmit.co/eap6787@gmail.com' method='POST' class='space-y-8 min-w-[40em]'>
              <div>
                <input type='hidden' name='_next' value='https://emilypape.github.io/emily_portfolio_2023/' />
                <input
                  type='hidden'
                  name='_autoresponse'
                  value='Thank you for reaching out! I look forward to discussing your inquiry further!'
                />
                <input
                  type='email'
                  name='email'
                  id='email'
                  class='shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
                  placeholder='email*'
                  required
                />
              </div>
              <div>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  class='block p-3 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='subject*'
                  required
                />
              </div>
              <div class='sm:col-span-2'>
                <textarea
                  type='text'
                  name='message'
                  id='message'
                  rows='6'
                  class='block p-2.5 w-full text-sm  bg-white-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 '
                  placeholder='Tell me a little more about the role...'></textarea>
              </div>
              <button
                type='submit'
                class='font-semibold mt-10  py-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300   rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-16'>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
