import React from 'react'
import Jigsaw from '../components/Jigsaw';

const About = () => {
  return (
    <section className='bg-navy md:h-screen  md:grid md:grid-cols-2 md:justify-center md:content-center md:pl-10' id="about">
      <div className='my-[30%] md:my-0 flex flex-col h-screen text-center justify-center'>
        <div className='px-10 lg:pl-20 lg:pr-5'>
          <h1 className='text-3xl mb-10 md:mb-5 text-center text-lightest-slate'>About Me</h1>
          <p className='text-slate text-l text-left'>Welcome to my digital portfolio, I'm Anukrati Mehta - a web developer who transforms ideas into innovative products for the web. With a deep-seated passion for crafting dynamic user experiences, I utilize my expertise in front-end development to bring your vision to life.</p><br />
          <p className='text-slate text-l text-left'>As a well-organized and enterprising individual, I have a knack for finding creative solutions to complex problems. My attention to detail ensures that every aspect of a project is executed with precision.</p><br />
          <p className='text-slate text-l text-left'>When I'm not coding, I explore the world, seeking new experiences and perspectives through my passions for travel, linguistics, food, and art. I'm always on the lookout for ambitious projects and positive people to collaborate with, as I continue to push the boundaries of front-end development. Let's create something great together.</p>
        </div>
        <div className='text-center'>
          <button
            type="button"
            className="text-green border border-green rounded-md text-lg md:px-3 px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mt-10"
            onClick={() => window.location.href = "#contact"}
          >
            Ready to connect?
          </button>
        </div>
      </div>
      <div className='bg-navy md:-ml-10  h-screen z-9 flex justify-evenly text-center items-center flex-col'>
        <Jigsaw />
        <h1 className='px-[10%] text-center md:hidden text-2xl text-lightest-slate'>If you liked the puzzle, you'll love my other <a href='#projects' className='text-green hover:underline'>projects.</a></h1>
      </div>
    </section>
  )
}

export default About