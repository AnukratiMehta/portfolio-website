// import React from 'react';
// import IMG1 from '../assets/Calculator.png'
// import IMG2 from '../assets/Tic-Tac-Toe.png'
// import IMG3 from '../assets/SQL-Tableau-Visualization.png'
// import IMG4 from '../assets/Dall-E.png'


// import { FiGithub } from 'react-icons/fi'
// import { MdOutlineOpenInNew } from 'react-icons/md'

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Calculator",
//     info: "Information about the project",
//     github: "https://github.com/AnukratiMehta/calculator.git",
//     demo: "https://anukratimehta.github.io/calculator/"
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Tic-Tac-Toe",
//     info: "Information about the project",
//     github: "https://github.com/AnukratiMehta/tic-tac-toe.git",
//     demo: "https://anukratimehta.github.io/tic-tac-toe/"
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: "SQL Visualization",
//     info: "Information about the project",
//     github: "https://github.com/AnukratiMehta/Open-Defecation-Practices.git",
//     demo: "https://public.tableau.com/shared/R47H8953Y?:display_count=n&:origin=viz_share_link"
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: "AI Image Generation",
//     info: "Information about the project",
//     github: "https://github.com/AnukratiMehta/ai-image-generation.git",
//     demo: "https://anukratimehta.github.io/ai-image-generation/"
//   }
// ]

// const Projects = () => {
//   return (
//     <section className='bg-navy px-24' id='projects'>
//       {
//         data.map(({ id, image, title, github, demo, info }) => {
//           return (
//             <div className='h-screen flex flex-row px-auto' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={id}>
//               <div className='bg-light-navy w-1/2 h-1/2 rounded-l-lg lg:rounded-lg'>
//                 <h1 className='text-center text-2xl py-5 text-lightest-slate'>{title}</h1>
//                 <p className='text-slate text-lg px-5'>{info}</p>
//                 <a className="text-lightest-slate hover:text-green text-xl inline-block m-3" href={github} target="_blank"><FiGithub /></a>
//                 <a className="text-lightest-slate hover:text-green text-xl inline-block m-3" href={demo} target="_blank"><MdOutlineOpenInNew /></a>
//               </div>
//               <a href={demo} target="_blank">
//                 <img className='object-cover object-center rounded-lg lg:rounded-l-none' src={image} />
//               </a>

//             </div>

//           )
//         })
//       }
//     </section>
//   );
// };

// export default Projects;

import React from 'react';
import IMG1 from '../assets/Calculator.png'
import IMG2 from '../assets/Tic-Tac-Toe.png'
import IMG3 from '../assets/SQL-Tableau-Visualization.png'
import IMG4 from '../assets/Dall-E.png'


import { FiGithub } from 'react-icons/fi'
import { MdOutlineOpenInNew } from 'react-icons/md'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Calculator",
    info: "Information about the project",
    github: "https://github.com/AnukratiMehta/calculator.git",
    demo: "https://anukratimehta.github.io/calculator/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Tic-Tac-Toe",
    info: "Information about the project",
    github: "https://github.com/AnukratiMehta/tic-tac-toe.git",
    demo: "https://anukratimehta.github.io/tic-tac-toe/"
  },
  {
    id: 3,
    image: IMG3,
    title: "SQL Visualization",
    info: "Information about the project",
    github: "https://github.com/AnukratiMehta/Open-Defecation-Practices.git",
    demo: "https://public.tableau.com/shared/R47H8953Y?:display_count=n&:origin=viz_share_link"
  },
  {
    id: 4,
    image: IMG4,
    title: "AI Image Generation",
    info: "Information about the project",
    github: "https://github.com/AnukratiMehta/ai-image-generation.git",
    demo: "https://anukratimehta.github.io/ai-image-generation/"
  }
]

const Projects = () => {
  return (
    <section className='bg-navy lg:px-24' id='projects'>
      {
        data.map(({ id, image, title, github, demo, info }) => {
          return (
            <div className='h-screen flex lg:px-auto flex-col justify-center items-center lg:flex-row' key={id}>
              <div className='bg-light-navy w-3/4 h-1/3 rounded-lg lg:rounded-lg lg:w-1/2 lg:h-1/2 lg:rounded-r-none'>
                <h1 className='text-center lg:text-2xl text-lg py-5 text-lightest-slate'>{title}</h1>
                <p className='text-slate lg:text-lg text-sm px-5'>{info}</p>
                <a className="text-lightest-slate hover:text-green text-md inline-block m-2 g:text-xl lg:m-3" href={github} target="_blank"><FiGithub /></a>
                <a className="text-lightest-slate hover:text-green text-md lg:text-xl lg:m-3 inline-block m-2" href={demo} target="_blank"><MdOutlineOpenInNew /></a>
              </div>
              <a href={demo} target="_blank" className='w-1/2 h-fit lg:w-auto lg:h-auto md:flex md:justify-center md:items-center'>
                <img className='object-scale-down lg:object-cover object-center rounded-b-lg lg:rounded-lg' src={image} />
              </a>

            </div>

          )
        })
      }
    </section>
  );
};

export default Projects;
