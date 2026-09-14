import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Socials = () => {
  return (
    <div className="hidden md:fixed md:bottom-0 md:left-0 md:p-8 md:flex md:flex-col social md:items-center">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/AnukratiMehta"
        className="my-3"
        title="GitHub"
      >
        <TbBrandGithub className="text-xl hover:-translate-y-1 text-light-slate hover:text-green" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/anukrati-mehta/"
        className="my-3"
        title="LinkedIn"
      >
        <FiLinkedin className="text-xl hover:-translate-y-1 text-light-slate hover:text-green" />
      </a>

      <a
        href="mailto:anukratimehta@gmail.com"
        className="my-3 pb-20"
        title="Email"
      >
        <HiOutlineMail className="text-xl hover:-translate-y-1 text-light-slate hover:text-green" />
      </a>
    </div>
  );
};

export default Socials;