import headshot from '../assets/images/headshot.jpg';
import { Icon } from '@iconify/react';

export default function Bio() {
  return (
    <div className='min-h-screen bg-slate-900 flex items-center pt-20'>
      <div className='max-w-6xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16 py-20 w-full'>
        <div className='flex-1 flex flex-col items-center text-center'>
          <div className='text-sm font-bold tracking-widest text-indigo-400 uppercase mb-5'>
            Fullstack Engineer &nbsp;·&nbsp; Developer Advocate &nbsp;·&nbsp; Athos Commerce
          </div>
          <h1 className='text-6xl lg:text-7xl font-black text-white mb-6 leading-none'>
            Emily{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400'>
              Pape.
            </span>
          </h1>
          <p className='text-xl text-slate-300 mb-10 leading-relaxed max-w-lg'>
            I bridge the gap between complex APIs and the developers who use them, building the tools, docs, and
            experiences that make great products feel effortless.
          </p>
          <div className='flex gap-4 flex-wrap justify-center'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://docs.google.com/document/d/11Qxr9Kp4HDqm8bPyqkSzoaD0Z9jx0iZuqkTX1hYUcL8/edit?usp=sharing'
              className='px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity'>
              Resume
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/emily-pape-01776622a/'
              className='flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-indigo-400 hover:text-white transition-colors'>
              <Icon icon='skill-icons:linkedin' width={18} height={18} />
              LinkedIn
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/emilypape'
              className='flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-indigo-400 hover:text-white transition-colors'>
              <Icon icon='radix-icons:github-logo' width={18} height={18} />
              GitHub
            </a>
          </div>
        </div>
        <div className='flex-shrink-0'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-25 scale-110' />
            <img
              src={headshot}
              alt='Emily Pape'
              className='relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
