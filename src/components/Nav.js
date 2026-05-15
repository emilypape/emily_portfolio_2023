export default function Nav({ handleClickScroll }) {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800'>
      <div className='max-w-6xl mx-auto px-8 lg:px-16 flex items-center justify-between py-5'>
        <div
          onClick={() => handleClickScroll('Hero')}
          className='text-white font-black text-xl cursor-pointer'>
          EP<span className='text-indigo-400'>.</span>
        </div>
        <div className='hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400'>
          {[
            { id: 'About', label: 'About' },
            { id: 'WhatIDo', label: 'What I Do' },
            { id: 'Work', label: 'Work' },
            { id: 'Contact', label: 'Contact' },
          ].map(({ id, label }) => (
            <div
              key={id}
              onClick={() => handleClickScroll(id)}
              className='hover:text-white cursor-pointer transition-colors duration-200'>
              {label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
