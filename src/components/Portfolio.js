const highlights = [
  {
    tag: 'Corporate Replatform',
    title: 'Athos Commerce Platform',
    desc: 'Led the developer experience work for the Searchspring → Athos Commerce replatform. Defined the company\'s OpenAPI specification from scratch, built tooling to accelerate developer onboarding, and rewrote the entire documentation suite.',
    bullets: ['OAS spec defined end-to-end', 'Developer onboarding tools built', 'Full docs overhaul'],
    brands: null,
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    tag: 'Enterprise Integrations',
    title: 'Brand Storefronts',
    desc: 'Forward-facing customer engineering for household-name brands on the Searchspring platform. Custom integrations, storefront builds, and production-grade implementations where reliability was non-negotiable.',
    bullets: null,
    brands: ['Mattel', 'Williams Sonoma', 'Samsonite', 'Skims'],
    gradient: 'from-indigo-600 to-fuchsia-600',
  },
  {
    tag: 'Developer Tooling',
    title: 'Resources & SDKs',
    desc: 'Designed and shipped developer tools, SDK resources, and technical guides that reduced integration complexity and gave developers a clear, well-lit path from zero to production.',
    bullets: ['Reusable SDK resources', 'Technical quickstart guides', 'API reference docs'],
    brands: null,
    gradient: 'from-fuchsia-600 to-purple-600',
  },
];

export default function Portfolio() {
  return (
    <div className='bg-white py-28'>
      <div className='max-w-6xl mx-auto px-8 lg:px-16'>
        <div className='text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4'>Work</div>
        <h2 className='text-4xl lg:text-5xl font-black text-slate-900 mb-16'>What I've shipped.</h2>
        <div className='grid lg:grid-cols-3 gap-8'>
          {highlights.map(({ tag, title, desc, bullets, brands, gradient }) => (
            <div
              key={title}
              className='group border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-indigo-100 transition-all duration-300'>
              <div
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${gradient} mb-5`}>
                {tag}
              </div>
              <h3 className='text-xl font-black text-slate-900 mb-3'>{title}</h3>
              <p className='text-slate-500 text-sm leading-relaxed mb-6'>{desc}</p>
              {bullets && (
                <ul className='space-y-2'>
                  {bullets.map((b) => (
                    <li key={b} className='flex items-center gap-2 text-sm text-slate-600'>
                      <span className='w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0' />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {brands && (
                <div className='flex flex-wrap gap-2'>
                  {brands.map((b) => (
                    <span
                      key={b}
                      className='px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-700'>
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
