import React from 'react'

const Footer = () => {
  return (
    <section className='bg-navy h-auto pt-5 pb-5'>
      <p className='text-center text-lightest-slate'>
        Built with <span className="heart">&#10084;</span> by Anukrati Mehta
      </p>
      <div className="text-center">
        <a target="_blank" rel="noreferrer" href='https://github.com/AnukratiMehta/portfolio-website.git' className="text-md px-4 text-lightest-slate hover:text-green">Source code</a>
      </div>
    </section>
  )
}

export default Footer
