import React from 'react';
import Typewriter from "typewriter-effect";
import CursorTrail from '../components/CursorTrail';
import Resume from '../assets/Resume.pdf'


const Home = () => {
  return (
    <section className="h-[calc(100vh-58px)] bg-navy md:h-screen md:grid md:grid-cols-2 md:justify-center md:content-center md:pl-10 lg:pt-20" id='home'>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <CursorTrail />
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
            <span class="inline-block ml-1">Developer</span>
          </h1>
        </div>
        <div class='space-y-9 flex flex-col items-center md:flex md:flex-row md:justify-evenly md:space-y-0'>
          <button type="button" class="lg:px-4 lg:text-xl py-2 px-4 md:px-2 w-fit text-lg text-green border border-green rounded-md hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center"
            onClick={() => window.open(Resume, "_blank")}>
            Resume
          </button>
          <button
            type="button"
            class="lg:px-4 lg:text-xl py-2 px-4 w-fit md:px-2 text-lg text-green border border-green rounded-md hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center"
            onClick={() => window.location.href = "#contact"}
          >
            Let's talk!
          </button>
        </div>
      </div>
      <div className='hidden md:z-9 lg:-mt-10 md:flex md:justify-center md:items-center'>
        <h1>Something Here</h1>
      </div>
    </section>
  )
}

export default Home