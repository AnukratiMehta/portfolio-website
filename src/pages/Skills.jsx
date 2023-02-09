import React from 'react';
import Kaleidoscope from '../components/Kaleidoscope';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNpm, SiNodedotjs, SiNodemon, SiP5Dotjs, SiTailwindcss, SiExpress, SiMongodb, SiOpenapiinitiative, SiGit, SiGithub, SiBootstrap, SiJquery, SiSass, SiRedux, SiD3Dotjs, SiGnubash, SiPostgresql, SiMysql } from 'react-icons/si'
import { useEffect } from 'react';
import $ from 'jquery';

const Skills = () => {

  useEffect(() => {
    $('.icon').hover(function () {
      $('.icon').not(this).addClass('blur');
    }, function () {
      $('.icon').removeClass('blur');
    });
  }, []);

  return (
    <section id='skills' className='bg-navy lg:h-screen lg:flex lg:items-center lg:pt-12'>
      <div className='h-screen lg:w-1/2 flex justify-center items-center'>
        <Kaleidoscope />
      </div>
      <div className='h-screen lg:w-1/2 flex flex-col justify-center items-center lg:mr-10 lg:pr-10 lg:-mt-10'>
        <h1 className='lg:-mt-10 mb-8 text-3xl lg:text-center text-lightest-slate'>Toolkit</h1>
        <div className='grid grid-cols-5 gap-10 md:gap-12 lg:gap-10'>
          <a href='https://www.javascript.com/' target="_blank" rel="noreferrer" data-hover="JavaScript" className="hovertext icon hover:scale-110"><SiJavascript className='text-green text-4xl ' /></a>
          <a href='https://html.com/' data-hover="HTML" className="hovertext icon hover:scale-110"><SiHtml5 className='text-green text-4xl ' /></a>
          <a href='https://www.w3.org/Style/CSS/Overview.en.html' data-hover="CSS" className="hovertext icon hover:scale-110"><SiCss3 className='text-green text-4xl ' /></a>
          <a href='https://reactjs.org/' data-hover="React" className="hovertext icon hover:scale-110"><SiReact className='text-green text-4xl ' /></a>
          <a href='https://www.npmjs.com/' data-hover="npm" className="hoverleft icon hover:scale-110"><SiNpm className='text-green text-4xl ' /></a>
          <a href='https://nodejs.org/en/' data-hover="Node.js" className="hovertext icon hover:scale-110"><SiNodedotjs className='text-green text-4xl ' /></a>
          <a href='https://nodemon.io/' data-hover="nodemon" className="hovertext icon hover:scale-110"><SiNodemon className='text-green text-4xl ' /></a>
          <a href='https://p5js.org/' data-hover="p5.js" className="hovertext icon hover:scale-110"><SiP5Dotjs className='text-green text-4xl ' /></a>
          <a href='https://tailwindcss.com/' data-hover="Tailwind" className="hovertext icon hover:scale-110"><SiTailwindcss className='text-green text-4xl ' /></a>
          <a href='https://expressjs.com/' data-hover="Express" className="hoverleft icon hover:scale-110"><SiExpress className='text-green text-4xl ' /></a>
          <a href='https://www.mongodb.com/' data-hover="MongoDB" className="hovertext icon hover:scale-110"><SiMongodb className='text-green text-4xl ' /></a>
          <a href='https://www.openapis.org/' data-hover="OpenApi" className="hovertext icon hover:scale-110"><SiOpenapiinitiative className='text-green text-4xl ' /></a>
          <a href='https://git-scm.com/' data-hover="Git" className="hovertext icon hover:scale-110"><SiGit className='text-green text-4xl ' /></a>
          <a href='https://github.com/' data-hover="GitHub" className="hovertext icon hover:scale-110"><SiGithub className='text-green text-4xl ' /></a>
          <a href='https://getbootstrap.com/' data-hover="Bootstrap" className="hoverleft icon hover:scale-110"><SiBootstrap className='text-green text-4xl ' /></a>
          <a href='https://jquery.com/' data-hover="JQuery" className="hovertext icon hover:scale-110"><SiJquery className='text-green text-4xl ' /></a>
          <a href='https://sass-lang.com/' data-hover="Sass" className="hovertext icon hover:scale-110"><SiSass className='text-green text-4xl ' /></a>
          <a href='https://redux.js.org/' data-hover="Redux" className="hovertext icon hover:scale-110"><SiRedux className='text-green text-4xl ' /></a>
          <a href='https://d3js.org/' data-hover="D3.js" className="hovertext icon hover:scale-110"><SiD3Dotjs className='text-green text-4xl ' /></a>
          <a href='https://devdocs.io/bash/' data-hover="BASH" className="hoverleft icon hover:scale-110"><SiGnubash className='text-green text-4xl ' /></a>
          <a href='https://www.postgresql.org/' data-hover="PostgreSQL" className="hovertext icon hover:scale-110"><SiPostgresql className='text-green text-4xl ' /></a>
          <a href='https://www.mysql.com/' data-hover="MySQL" className="hovertext icon hover:scale-110"><SiMysql className='text-green text-4xl ' /></a>
        </div>
      </div>
    </section>
  )
}

export default Skills