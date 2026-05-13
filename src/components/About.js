const timeline = [
  {
    period: '2023',
    role: 'Software Support Engineer',
    company: 'Searchspring',
    desc: 'Started at Searchspring in a forward-facing technical support role, getting deep into the platform and building expertise fast.',
  },
  {
    period: '2023 – 2025',
    role: 'Software Engineer II, Customer Engineering',
    company: 'Searchspring → Athos Commerce',
    desc: 'Forward-facing engineering for household-name brands. Built and shipped custom integrations for Mattel, Williams Sonoma, Samsonite, and Skims.',
  },
  {
    period: 'Dec 2025 – Present',
    role: 'Lead Developer Advocate',
    company: 'Athos Commerce',
    desc: 'Leading the developer experience through a full corporate replatform — defining our OpenAPI spec, building tooling, and rewriting docs end-to-end.',
  },
];

export default function About() {
  return (
    <div className='bg-white py-28'>
      <div className='max-w-6xl mx-auto px-8 lg:px-16'>
        <div className='text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4'>About</div>
        <h2 className='text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight'>
          From shipping features to
          <br />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500'>
            building developer experiences.
          </span>
        </h2>
        <div className='grid lg:grid-cols-2 gap-10 text-slate-500 text-lg leading-relaxed mb-20'>
          <p>
            I joined Searchspring (now{' '}
            <span className='font-semibold text-slate-800'>Athos Commerce</span>) in 2023 and
            quickly moved through the ranks from Software Support Engineer into customer-facing
            engineering — building and shipping storefronts for brands like{' '}
            <span className='font-semibold text-slate-800'>
              Mattel, Williams Sonoma, Samsonite, and Skims
            </span>
            . Integrations where reliability wasn't optional.
          </p>
          <p>
            In December 2025 I stepped into leading developer advocacy. I defined our OpenAPI spec,
            built tooling and resources for developers, and overhauled our docs from the ground up.
            I care about the space between a great API and developers actually loving it — that gap
            is where I do my best work.
          </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-6'>
          {timeline.map(({ period, role, company, desc }) => (
            <div key={role} className='border-l-4 border-indigo-500 pl-6 py-1'>
              <div className='text-xs font-bold text-indigo-500 tracking-widest uppercase mb-1'>
                {period}
              </div>
              <div className='text-lg font-black text-slate-900 mb-0.5'>{role}</div>
              <div className='text-sm font-semibold text-slate-400 mb-3'>{company}</div>
              <div className='text-slate-500 text-sm leading-relaxed'>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
