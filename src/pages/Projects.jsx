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
    info: "A feature-rich calculator built using Javascript that showcases my ability to implement complex functionality using a user-friendly interface. The calculator performs basic arithmetic operations, including addition, subtraction, multiplication, and division, and is designed to be highly responsive and adaptable. It features two screens: one for making new calculations and another for displaying previous calculations. In developing this calculator, I took a user-centered approach, ensuring that the interface was easy to use and understand, and had the same familiar appeal as the physical calculator we used growing up.",
    github: "https://github.com/AnukratiMehta/calculator.git",
    demo: "https://anukratimehta.github.io/calculator/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Tic-Tac-Toe",
    info: "A fun and interactive Tic-Tac-Toe game developed using Javascript. The game features a visually appealing and user-friendly interface, allowing players to enjoy the classic game with a modern twist. As the developer, I utilized my skills in Javascript, HTML, and CSS to create the game logic and implement user interaction for an engaging experience. The project showcases my ability to build dynamic web applications and bring traditional games to life in a digital format.",
    github: "https://github.com/AnukratiMehta/tic-tac-toe.git",
    demo: "https://anukratimehta.github.io/tic-tac-toe/"
  },
  {
    id: 3,
    image: IMG3,
    title: "SQL Visualization",
    info: "The project involved extracting and cleaning data from a SQL database using advanced techniques, then analyzing it to generate meaningful insights. My proficiency in writing complex SQL queries and manipulating data is displayed, along with my ability to communicate these insights through Tableau visualizations. This project highlights my skills in SQL and data analysis, and my capacity to drive better business outcomes with data-driven insights.",
    github: "https://github.com/AnukratiMehta/Open-Defecation-Practices.git",
    demo: "https://public.tableau.com/shared/R47H8953Y?:display_count=n&:origin=viz_share_link"
  },
  {
    id: 4,
    image: IMG4,
    title: "AI Image Generation",
    info: "The website allows users to generate unique images based on textual descriptions, leveraging the power of DALL-E API. The user inputs are stored in a MongoDB database, and the generated images are hosted on Cloudinary for efficient management and retrieval. This project demonstrates my ability to work with AI APIs, build scalable databases, and implement efficient image management systems, providing a comprehensive showcase of my skills in full-stack web development.",
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
              <div className='bg-light-navy w-3/4 h-fit rounded-lg'>
                <h1 className='text-center lg:text-2xl text-lg py-5 text-lightest-slate'>{title}</h1>
                <p className='text-slate lg:text-lg text-sm px-5'>{info}</p>
                <div className='flex flex-row justify-end p-2'>
                <a className="text-lightest-slate hover:text-green text-md m-2 lg:text-xl lg:m-3" href={github} target="_blank" rel="noreferrer"><FiGithub /></a>
                <a className="text-lightest-slate hover:text-green text-md lg:text-xl lg:m-3 m-2" href={demo} target="_blank" rel="noreferrer"><MdOutlineOpenInNew /></a>
                </div>
              </div>
              <a href={demo} target="_blank" rel="noreferrer" className='w-1/2 h-fit lg:w-auto lg:h-auto md:flex md:justify-center md:items-center'>
                <img alt={title} className='object-scale-down lg:rounded-l-none lg:rounded-r lg:object-cover object-center rounded-b-lg' src={image} />
              </a>

            </div>

            

          )
        })
      }
    </section>
  );
};

export default Projects;
