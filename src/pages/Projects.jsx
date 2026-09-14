import React from 'react';

import IMG1 from '../assets/Hear-Hear.png';
import VID1 from '../assets/Hear-Hear.webm';

import IMG2 from '../assets/Dall-E.png';
import VID2 from '../assets/Dall-E.webm';

import IMG3 from '../assets/SQL-Tableau-Visualization.png';
import VID3 from '../assets/SQL-Tableau-Visualization.webm';

import { FiGithub } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';

const projects = [
  {
    id: 1,
    title: 'Music App',
    description:
      'Built a full-stack music discovery application using external API integration, database management, and responsive web development.',
    video: VID1,
    poster: IMG1,
    github: 'https://github.com/AnukratiMehta/hear-hear.git',
    demo: 'https://anukratimehta.github.io/hear-hear/',
  },
  {
    id: 2,
    title: 'AI Image Generation',
    description:
      'Built a full-stack application that generates images from text prompts using the DALL-E API, with MongoDB for data storage and Cloudinary for image management.',
    video: VID2,
    poster: IMG2,
    github: 'https://github.com/AnukratiMehta/ai-image-generation.git',
    demo: 'https://anukratimehta.github.io/ai-image-generation/',
  },
  {
    id: 3,
    title: 'SQL Visualization',
    description:
      'Analysed and cleaned structured data using SQL, then translated the results into Tableau visualisations to communicate patterns and insights.',
    video: VID3,
    poster: IMG3,
    github: 'https://github.com/AnukratiMehta/Open-Defecation-Practices.git',
    demo: 'https://public.tableau.com/shared/R47H8953Y?:display_count=n&:origin=viz_share_link',
  },
];

const Projects = () => {
  return (
    <section
      className="bg-navy py-24 px-6 md:px-12 lg:px-24"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl text-center text-lightest-slate mb-4">
          Projects
        </h1>

        <p className="text-slate text-center max-w-2xl mx-auto mb-14">
          Selected work across cybersecurity research, software development,
          AI, and data analysis.
        </p>

        {/* MSc Research Project */}
        <div className="bg-light-navy rounded-xl p-8 md:p-10 mb-16">
          <p className="text-green text-sm uppercase tracking-wider mb-3">
            MSc Cybersecurity Research
          </p>

          <h2 className="text-2xl md:text-3xl text-lightest-slate mb-5">
            Deepfake Detection & Digital Evidence Reliability
          </h2>

          <p className="text-slate leading-relaxed mb-5">
            Investigated how video compression affects not only the accuracy of
            AI-based deepfake detection, but also the reliability of model
            confidence across 30 machine-learning model configurations.
          </p>

          <p className="text-slate leading-relaxed mb-5">
            Evaluated confidence using Expected Calibration Error (ECE), and
            developed a baseline-relative framework that classified results as
            Usable, Inconclusive, or Not Reliable for forensic assessment.
          </p>

          <p className="text-slate leading-relaxed mb-6">
            The research demonstrated that accuracy and reliability can diverge
            significantly: ViT produced the lowest mean accuracy (~58%), while
            achieving the highest proportion of results classified as Usable
            (77%).
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              'Python',
              'Machine Learning',
              'Computer Vision',
              'Model Calibration',
              'Expected Calibration Error',
              'Deepfake Detection',
            ].map((item) => (
              <span
                key={item}
                className="text-green border border-green rounded-md px-3 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map(
            ({
              id,
              title,
              description,
              video,
              poster,
              github,
              demo,
            }) => (
              <div
                key={id}
                className="bg-light-navy rounded-xl p-5 flex flex-col"
              >
                <video
                  controls
                  poster={poster}
                  className="rounded-xl w-full mb-5"
                >
                  <source src={video} />
                  Your browser does not support the video tag.
                </video>

                <h2 className="text-xl text-lightest-slate mb-3">
                  {title}
                </h2>

                <p className="text-slate leading-relaxed flex-grow">
                  {description}
                </p>

                <div className="flex gap-5 mt-6">
                  <a
                    title="Source code"
                    className="text-lightest-slate hover:text-green text-xl"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>

                  <a
                    title="Live demo"
                    className="text-lightest-slate hover:text-green text-xl"
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdOutlineOpenInNew />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;