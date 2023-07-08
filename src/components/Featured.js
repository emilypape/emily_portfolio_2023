import react from 'react';
import { Icon } from '@iconify/react';
export default function Featured() {
  return (
    <div>
      <div className='xl:ml-52 lg:ml-52 md:ml-16 xl:mr-52 lg:mr-52 md:mr-16 mt-10'>
        <div className='text-start text-2xl text-black font-bold'>Featured Skills</div>
        <div className='flex text-start mt-5'>
          <div className=' min-w-[18em] min-h-[16em] mr-8   w-full h-full rounded-md bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 p-1'>
            <div className='min-h-[16em] bg-white rounded-md p-4'>
              <div className='text-gray-500 font-semibold text-lg  mb-3'>Frontend</div>
              <div className='text-gray-500 mb-8'>
                Strong understanding of the React ecosystem, hooks, and state. High proficiency in Javascript, HTML,
                CSS, and DOM manipulation. Experience building applications using Jquery, and templating languages such
                as Handlebars.js
              </div>
              <div className='flex justify-between '>
                <Icon icon='akar-icons:react-fill' color='gray' width={40} height={40} />
                <Icon icon='fluent:javascript-20-regular' color='gray' width={40} height={40} />
                <Icon icon='dashicons:html' color='gray' width={40} height={40} />
                <Icon icon='fluent:document-css-24-regular' color='gray' width={40} height={40} />
              </div>
            </div>
          </div>
          <div className='min-w-[18em] min-h-[16em] mr-8  w-full h-full rounded-md bg-gradient-to-r from-fuchsia-600 via-violet-500 to-indigo-600 p-1'>
            <div className=' min-h-[16em] bg-white rounded-md p-4'>
              <div className='text-gray-500 font-semibold text-lg  mb-3'>Backend</div>
              <div className='text-gray-500 mb-2'>
                Produced many applications using Node.js, MySQL, and Express.js. High understanding when it comes to
                using and building RESTful APIs. Experience handling HTTP requests and third party APIs. Experience with
                MongoDB, GraphQL, and websockets. Proficiency with Next.js
              </div>
              <div className='flex justify-between'>
                <Icon icon='la:node' color='gray' width={40} height={40} />
                <Icon icon='carbon:sql' color='gray' width={40} height={40} />
                <Icon icon='teenyicons:nextjs-outline' color='gray' width={40} height={40} />
                <Icon icon='devicon-plain:mongodb-wordmark' color='gray' width={40} height={40} />
              </div>
            </div>
          </div>
          <div className='min-h-[16em] min-w-[18em] mr-8  w-full h-full rounded-md bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-600 p-1'>
            <div className='min-h-[16em] bg-white rounded-md p-4'>
              <div className='text-gray-500 font-semibold text-lg  mb-3'>UI/UX Design</div>
              <div className='text-gray-500 mb-2'>
                Strong understanding of UI/UX design principles with an emphasis in usability and readability. Heavy use
                of custom CSS, Flexbox, and Grid. Additional strong skills with CSS frameworks such as: Tailwind,
                Bootstrap, Material.UI, and Materialize.
              </div>
              <div className='flex justify-between '>
                <Icon icon='simple-icons:tailwindcss' color='gray' width={40} height={40} />
                <Icon icon='bi:bootstrap' color='gray' width={40} height={40} />
                <Icon icon='mdi:material-ui' color='gray' width={40} height={40} />
                <Icon icon='devicon-plain:materializecss' color='gray' width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='text-start font-semibold text-gray-500 mt-4'>Contact for all skills</div>
          <div className='mt-2'>
            <Icon icon='ic:outline-arrow-right' color='gray' width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
