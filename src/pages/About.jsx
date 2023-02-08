import React from 'react'
import Jigsaw from '../components/Jigsaw';

const About = () => {
  return (
    <section className=' bg-navy md:h-screen md:grid md:grid-cols-2 md:justify-center md:content-center md:pl-10' id="about">
      <div className='flex flex-col h-screen text-center justify-center '>
        <div className='px-10 lg:pl-20 lg:pr-5'>
          <h1 className='text-3xl mb-10 md:mb-5 text-center text-lightest-slate'>About Me</h1>
          <p className='text-slate text-l text-left'>Hey, I'm Anukrati Mehta, and I turn ideas into products for the web. I have serious passion for crafting dynamic digital experiences through intuitive front-end products.</p><br />
          <p className='text-slate text-l text-left'>Well-organised, enterprising, problem-solver with high attention to detail. I love linguistics, nature, food, and art.</p><br />
          <p className='text-slate text-l text-left'>Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
        </div>
        <div className='text-center'>
          <button
            type="button"
            className="text-green border border-green rounded-md text-lg md:px-3 px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mt-10"
            onClick={() => window.location.href = "#contact"}
          >
            Let's make something!
          </button>
        </div>
      </div>
      <div className='bg-navy md:-ml-10 lg:-ml-0 h-screen z-9 flex justify-center items-center'>
        <Jigsaw />

      </div>
    </section>
  )
}

export default About