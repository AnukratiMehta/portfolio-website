import React from 'react'
import Jigsaw from '../components/Jigsaw';

const About = () => {
  return (
    <section
      className='bg-navy md:h-screen md:grid md:grid-cols-2 md:justify-center md:content-center md:pl-10'
      id="about"
    >
      <div className='my-[30%] md:my-0 flex flex-col h-screen text-center justify-center'>
        <div className='px-10 lg:pl-20'>
          <h1 className='text-3xl mb-10 md:mb-5 text-center text-lightest-slate'>
            About Me
          </h1>

          <p className='text-slate text-l text-left'>
            I'm Anukrati Mehta, a First Class Honours MSc Cybersecurity graduate
            from the National College of Ireland, with a Higher Diploma in
            Computing and an earlier background in Journalism and Communication.
          </p>
          <br />

          <p className='text-slate text-l text-left'>
            My path into cybersecurity has taken me through software development,
            web development, and security research. I'm particularly interested in
            building and understanding secure, reliable systems, with academic
            experience across network and application security, cloud security,
            incident management, cryptography, and AI/ML in cybersecurity.
          </p>
          <br />

          <p className='text-slate text-l text-left'>
            Before moving into computing, I worked across journalism, research,
            and content operations. That multidisciplinary background has shaped
            how I approach technical problems: with curiosity, clear communication,
            and an ability to look at problems from different perspectives.
          </p>
        </div>

        <div className='text-center'>
          <button
            type="button"
            className="text-green border border-green rounded-md text-lg md:px-3 px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mt-10"
            onClick={() => window.location.href = "#contact"}
          >
            Shall we talk?
          </button>
        </div>
      </div>

      <div className='bg-navy md:-ml-10 h-screen z-9 flex justify-evenly text-center items-center flex-col'>
        <Jigsaw />

        <h1 className='px-[10%] text-center md:hidden text-2xl text-lightest-slate'>
          Curious about what I've worked on? Explore my{' '}
          <a
            href='#projects'
            className='text-green hover:underline'
          >
            projects.
          </a>
        </h1>
      </div>
    </section>
  )
}

export default About