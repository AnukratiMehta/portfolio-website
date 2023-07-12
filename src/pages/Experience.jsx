import React from 'react';
import IMG1 from '../assets/Probooking.png'
import VID1 from '../assets/Probooking.webm'

import { useState } from 'react';

import { MdOutlineOpenInNew } from 'react-icons/md'
import { MdReadMore } from 'react-icons/md'

const data = [
  {
    id: 1,
    video: VID1,
    poster: IMG1,
    info: "Utilized my expertise in HTML, CSS, JavaScript, React, Vue JS, Ajax, Ionic, jQuery, and Bootstrap to design and develop the company website.<br /><br />Contributed to UI design and mobile framework initiatives, continuously expanding my skill set and staying up-to-date with the latest trends and best practices in web development.<br /><br />Carried out Root Cause Analysis to understand and account for anomalies in product code and bug fixes.<br /><br />Responsible for developing the mobile app of the company website by collaborating with design and strategy teams to create a seamless UI using Vue, Ionic, and Tailwind.",
    title: "Probooking.io",
    demo: "https://getprobooking.com/"
  },
];

const Experience = () => {
  const [showInfo, setShowInfo] = useState({});

  const handleClick = id => {
    setShowInfo({ ...showInfo, [id]: !showInfo[id] });
  };

  return (
    <section className='bg-navy lg:my-[10%] lg:px-24' id='experience'>
      {data.map(({ id, image, video, poster, title, github, demo, info }) => {
        return (
          <div className='h-screen flex px-auto  flex-col lg:flex-row justify-center items-center' key={id}>
            <div className='flex-col justify-center items-center text-center'>
              <h1 className='text-center text-3xl py-5 text-lightest-slate hover:text-green'><a href={demo} target="_blank" rel="noreferrer">{title}</a></h1>
              <div className='flex justify-center max-w-md xl:max-w-xl 2xl:max-w-3xl items-center bg-light-navy rounded-xl p-[5%] lg:mx-0 mx-[6%]'>
                {showInfo[id] && showInfo[id] ? (
                  <p className='text-slate max-w-md lg:text-lg text-sm text-justify' dangerouslySetInnerHTML={{ __html: info }}></p>
                ) : (
                  <>
                    {video ? (
                      <video controls poster={poster} className='rounded-xl'>
                        <source src={video} type='video/mp4' />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <a href={demo} target='_blank' rel='noreferrer'>
                        <img alt={title} src={image} className='rounded-xl' />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className='flex flex-row lg:flex-col p-2'>
              <a title='Live demo' className="text-lightest-slate hover:text-green text-md lg:text-xl lg:m-3 m-2" href={demo} target="_blank" rel="noreferrer"><MdOutlineOpenInNew /></a>
              <p title='Project information' className="text-lightest-slate hover:text-green text-md m-2 lg:text-2xl lg:m-2 cursor-pointer" onClick={() => handleClick(id)}><MdReadMore /></p>
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default Experience;
