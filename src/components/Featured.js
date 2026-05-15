import { Icon } from '@iconify/react';

const skills = [
  {
    title: 'Engineering',
    desc: 'Full-stack engineer with deep React and JavaScript roots. Experienced building production integrations, REST APIs, and developer tooling that ships to real users at scale.',
    icons: [
      'akar-icons:react-fill',
      'fluent:javascript-20-regular',
      'la:node',
      'simple-icons:tailwindcss',
    ],
    gradient: 'from-indigo-600 via-violet-500 to-fuchsia-600',
  },
  {
    title: 'Developer Experience',
    desc: 'Designed and implemented OpenAPI specifications, built onboarding tooling and SDKs, and created resources that cut developer time-to-first-call dramatically.',
    icons: ['carbon:api', 'mdi:code-json', 'ph:terminal-bold', 'mdi:book-open-variant'],
    gradient: 'from-fuchsia-600 via-violet-500 to-indigo-600',
  },
  {
    title: 'Advocacy & Content',
    desc: 'Led documentation rewrites, built technical guides, and created community resources. Bridging the gap between what engineers build and what developers actually need.',
    icons: [
      'ph:microphone-bold',
      'mdi:file-document-edit',
      'ph:users-three-bold',
      'ph:lightning-bold',
    ],
    gradient: 'from-indigo-600 via-violet-500 to-fuchsia-600',
  },
];

export default function Featured() {
  return (
    <div className='bg-slate-50 py-28'>
      <div className='max-w-6xl mx-auto px-8 lg:px-16'>
        <div className='text-sm font-bold tracking-widest text-indigo-500 uppercase mb-4'>
          What I Do
        </div>
        <h2 className='text-4xl lg:text-5xl font-black text-slate-900 mb-16'>
          Three hats, one mission.
        </h2>
        <div className='grid lg:grid-cols-3 gap-8'>
          {skills.map(({ title, desc, icons, gradient }) => (
            <div
              key={title}
              className={`rounded-2xl bg-gradient-to-br ${gradient} p-[2px] hover:scale-[1.02] transition-transform duration-300`}>
              <div className='bg-white rounded-2xl p-8 h-full flex flex-col'>
                <h3 className='text-xl font-black text-slate-800 mb-4'>{title}</h3>
                <p className='text-slate-500 text-sm leading-relaxed flex-1 mb-8'>{desc}</p>
                <div className='flex gap-5 justify-center'>
                  {icons.map((icon) => (
                    <Icon key={icon} icon={icon} color='#6b7280' width={32} height={32} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
