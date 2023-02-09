import React from 'react';
import Typewriter from "typewriter-effect";
import CursorTrail from '../components/CursorTrail';
import Resume from '../assets/Resume.pdf'
import Mine from '../assets/Mine.jpeg'


const Home = () => {
  return (
    <section className="flex flex-col bg-navy md:h-screen md:grid md:grid-cols-2 md:justify-center md:content-center md:pl-10" id='home'>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <CursorTrail />
      </div>
      <div className='hidden md:flex md:justify-center md:items-center md:mb-20'>
        <div className='lg:w-2/5 md:w-1/2 rounded-3xl' style={{ background: "linear-gradient(45deg, transparent, #64ffda, transparent)" }}>
          <img src={Mine} alt="Anukrati Mehta" className="rounded-3xl overflow-hidden -rotate-12 hover:rotate-0" style={{ transition: 'all 400ms ease' }} />
        </div>
      </div>
      <div className="flex flex-col h-screen text-center justify-evenly">
        <div className=''>
          <h1 className="my-1 md:my-2 lg:my-3 text-2xl  md:text-3xl  lg:text-4xl text-green">Hey there!</h1>
          <h1 className="my-1 md:my-2 lg:my-3 text-2xl md:text-3xl lg:text-4xl text-lightest-slate">I'm Anukrati,</h1>
          <h1 className="my-1 md:my-2 lg:my-3 text-3xl md:text-4xl lg:text-5xl text-slate">
            <span className="typewriter inline-block">
              <Typewriter
                options={{
                  strings: ['Fullstack', 'Frontend', 'Backend', 'Web'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="inline-block ml-1">Developer</span>
          </h1>
        </div>
        <div className='space-y-9 flex flex-col items-center md:flex md:flex-row md:justify-evenly md:space-y-0'>
          <button type="button" className="lg:px-4 lg:text-xl py-2 px-4 md:px-2 w-fit text-lg text-green border border-green rounded-md hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center"
            onClick={() => window.open(Resume, "_blank")}>
            Resume
          </button>
          <button
            type="button"
            className="lg:px-4 lg:text-xl py-2 px-4 w-fit md:px-2 text-lg text-green border border-green rounded-md hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center"
            onClick={() => window.location.href = "#contact"}
          >
            Let's talk!
          </button>
        </div>
        </div>
        <div className='md:hidden h-screen flex flex-col justify-evenly items-center'>
        <div className='w-1/2 rounded-3xl' style={{background: "linear-gradient(45deg, transparent, #64ffda, transparent)"}}>
        <img src={Mine} alt="Anukrati Mehta" className="rounded-3xl overflow-hidden -rotate-12 hover:rotate-0" style={{transition: 'all 400ms ease'}}/>
        </div>
        <h1 className='md:hidden text-2xl text-lightest-slate'>Building the web, one pixel at a time.</h1>
      </div>
    </section>
  )
}

export default Home