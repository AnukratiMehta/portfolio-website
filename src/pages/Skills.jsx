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

const technicalSkills = [
  'Linux',
  'Python',
  'Git',
  'GitHub',
  'SQL',
];

const developmentSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'HTML',
  'CSS',
  'Tailwind CSS',
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
      className="bg-navy min-h-screen lg:pl-[5%] flex flex-col lg:flex-row lg:items-center lg:py-16"
    >
      <div className="order-2 lg:order-1 min-h-screen lg:min-h-0 lg:w-1/2 flex justify-center items-center">
        <Kaleidoscope />
      </div>

      <div className="order-1 lg:order-2 min-h-screen lg:min-h-0 lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-8 lg:pr-20 py-20">
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
            title="Technical"
            skills={technicalSkills}
          />

          <SkillGroup
            title="Software Development"
            skills={developmentSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;