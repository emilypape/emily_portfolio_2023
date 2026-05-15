import { Icon } from '@iconify/react';

const links = [
  {
    icon: 'line-md:email-twotone',
    label: 'Email',
    display: 'eap6787@gmail.com',
    href: 'mailto:eap6787@gmail.com',
  },
  {
    icon: 'skill-icons:linkedin',
    label: 'LinkedIn',
    display: 'emily-pape-01776622a',
    href: 'https://www.linkedin.com/in/emily-pape-01776622a/',
  },
  {
    icon: 'radix-icons:github-logo',
    label: 'GitHub',
    display: 'emilypape',
    href: 'https://github.com/emilypape',
  },
];

export default function Contact() {
  return (
    <div className='bg-slate-900 py-28'>
      <div className='max-w-6xl mx-auto px-8 lg:px-16'>
        <div className='text-sm font-bold tracking-widest text-indigo-400 uppercase mb-4'>
          Contact
        </div>
        <div className='lg:grid lg:grid-cols-2 gap-16 items-end'>
          <div>
            <h2 className='text-4xl lg:text-5xl font-black text-white mb-6 leading-tight'>
              Let's{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400'>
                connect.
              </span>
            </h2>
            <p className='text-slate-400 text-lg mb-10 leading-relaxed'>
              Whether you want to talk engineering, developer experience, or have a role that sounds
              like a fit — I'd love to hear from you.
            </p>
            <div className='space-y-3'>
              {links.map(({ icon, label, display, href }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors duration-200'>
                  <Icon icon={icon} color='#818cf8' width={26} height={26} />
                  <div>
                    <div className='text-xs text-slate-400 font-semibold mb-0.5'>{label}</div>
                    <div className='text-indigo-400 font-semibold text-sm'>{display}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className='mt-12 lg:mt-0'>
            <form
              action='https://formsubmit.co/eap6787@gmail.com'
              method='POST'
              className='space-y-4'>
              <input
                type='hidden'
                name='_next'
                value='https://emilypape.github.io/emily_portfolio_2026/'
              />
              <input
                type='hidden'
                name='_autoresponse'
                value='Thanks for reaching out — I look forward to connecting!'
              />
              <input
                type='email'
                name='email'
                placeholder='Your email*'
                required
                className='w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors'
              />
              <input
                type='text'
                name='subject'
                placeholder='Subject*'
                required
                className='w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors'
              />
              <textarea
                name='message'
                rows={5}
                placeholder='Your message...'
                className='w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors resize-none'
              />
              <button
                type='submit'
                className='w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
