import React from 'react';
import Kaleidoscope from '../components/Kaleidoscope';

const securitySkills = [
  'Network Security',
  'Penetration Testing',
  'Cloud Security',
  'Application & Web Security',
  'Incident Management',
  'Business Resilience',
  'Cryptography',
  'Governance, Risk & Compliance',
  'AI/ML Security',
];

const programmingSkills = [
  'Java',
  'JavaScript',
  'TypeScript',
  'SQL',
];

const developmentSkills = [
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Linux',
  'Git',
  'GitHub',
];

const SkillGroup = ({ title, skills }) => (
  <div>
    <h2 className="text-green text-lg mb-3">
      {title}
    </h2>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-slate border border-lightest-navy bg-light-navy rounded-md px-3 py-2 text-sm hover:text-green hover:border-green transition-all ease-in-out duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-navy min-h-screen px-6 py-24 lg:px-[5%] lg:flex lg:items-center"
    >
      <div className="lg:w-1/2 flex justify-center items-center mb-16 lg:mb-0">
        <Kaleidoscope />
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center px-2 md:px-10 lg:px-8 lg:pr-20">
        <h1 className="text-3xl text-lightest-slate mb-4">
          Skills
        </h1>

        <p className="text-slate leading-relaxed mb-10">
          Selected skills developed through cybersecurity study, professional
          software development, and hands-on technical work.
        </p>

        <div className="space-y-8">
          <SkillGroup
            title="Cybersecurity"
            skills={securitySkills}
          />

          <SkillGroup
            title="Programming"
            skills={programmingSkills}
          />

          <SkillGroup
            title="Development & Tools"
            skills={developmentSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;