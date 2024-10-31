import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-[3rem] py-[1rem] flex justify-between border-t font-poppins">
      SHAHID &copy; 2024
      <div className="flex gap-4">
        <a
          href="https://github.com/shahiid-10"
          target="_blank"
          className="transition-transform duration-300 hover:-translate-y-0.5"
        >
          <BsGithub size={20} />
        </a>
        <a
          href="https://x.com/shahid__10__"
          target="_blank"
          className="transition-transform duration-300 hover:-translate-y-0.5"
        >
          <FaXTwitter size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
