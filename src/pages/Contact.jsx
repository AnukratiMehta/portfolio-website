import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLinkedin } from 'react-icons/fi';
import { TbBrandGithub } from 'react-icons/tb';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-navy min-h-[70vh] flex flex-col justify-center items-center px-6 py-24"
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl text-lightest-slate mb-6">
          Let's Connect
        </h1>

        <p className="text-slate leading-relaxed mb-10">
          I'm currently exploring graduate and junior opportunities across
          cybersecurity, cloud security, application security, and secure
          software development. If you'd like to discuss an opportunity, a
          project, or simply connect, I'd be happy to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:anukratimehta@gmail.com"
            className="flex items-center gap-2 text-green border border-green rounded-md px-5 py-3 hover:bg-lightest-navy transition-all ease-in-out duration-200"
          >
            <HiOutlineMail className="text-xl" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/anukrati-mehta/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-green border border-green rounded-md px-5 py-3 hover:bg-lightest-navy transition-all ease-in-out duration-200"
          >
            <FiLinkedin className="text-lg" />
            LinkedIn
          </a>

          <a
            href="https://github.com/AnukratiMehta"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-green border border-green rounded-md px-5 py-3 hover:bg-lightest-navy transition-all ease-in-out duration-200"
          >
            <TbBrandGithub className="text-xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;