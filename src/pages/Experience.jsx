import React from 'react';
import IMG1 from '../assets/Probooking.png';
import VID1 from '../assets/Probooking.webm';
import IMG2 from '../assets/astonish.png';
import VID2 from '../assets/astonish.mp4';

import { MdOutlineOpenInNew } from 'react-icons/md';

const experience = [
  {
    id: 1,
    role: 'Website Developer',
    company: 'Astonish Chemicals Pvt. Ltd.',
    dates: 'Aug 2023 – Aug 2024',
    description:
      'Led the end-to-end development and deployment of AstonishChem.com using React, TypeScript, Node.js, and Tailwind CSS, including backend development, DNS configuration, and production hosting.',
    video: VID2,
    poster: IMG2,
    link: 'https://astonishchem.com/',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Probooking.io',
    dates: 'Apr 2023 – Jul 2023',
    description:
      'Developed responsive web applications using React, Vue.js, JavaScript, HTML, and CSS, while contributing to UI design, content management, and mobile-focused development.',
    video: VID1,
    poster: IMG1,
    link: 'https://getprobooking.com/',
  },
  {
    id: 3,
    role: 'Content Operations Team Lead',
    company: 'WittyPen',
    dates: 'Jan 2018 – Oct 2019',
    description:
      'Managed writers and client-facing content delivery across technology and other specialist industries, conducting research and producing reports, whitepapers, and digital content.',
  },
];

const Experience = () => {
  return (
    <section
      className="bg-navy py-24 px-6 md:px-12 lg:px-24"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-center text-lightest-slate mb-4">
          Experience
        </h1>

        <p className="text-slate text-center max-w-2xl mx-auto mb-14">
          My professional background spans software development, research, and
          content operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map(
            ({ id, role, company, dates, description, video, poster, link }) => (
              <div
                key={id}
                className={`bg-light-navy rounded-xl p-6 flex flex-col justify-between ${
                  id === 3 ? 'md:col-span-2' : ''
                }`}
              >
                {video && (
                  <div className="mb-6">
                    <video
                      controls
                      poster={poster}
                      className="rounded-xl w-full"
                    >
                      <source src={video} />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h2 className="text-xl md:text-2xl text-lightest-slate">
                        {role}
                      </h2>

                      <h3 className="text-green mt-1">
                        {company}
                      </h3>
                    </div>

                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        title={`View ${company}`}
                        className="text-lightest-slate hover:text-green text-xl"
                      >
                        <MdOutlineOpenInNew />
                      </a>
                    )}
                  </div>

                  <p className="text-slate text-sm mt-2 mb-5">
                    {dates}
                  </p>

                  <p className="text-slate leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;