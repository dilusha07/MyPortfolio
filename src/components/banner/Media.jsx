import React from 'react'
import { FaLinkedinIn, FaGithub, FaMedium, FaJava, FaReact } from "react-icons/fa";
import { SiAngular, SiSpringboot, SiNodedotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/dilusha-sandaruwani-98435b1aa/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://github.com/dilusha07" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
          <FaGithub />
        </a>
          <a 
            href="https://dilushasandaruwani07.medium.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bannerIcon"
          >
            <FaMedium />
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiAngular />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media
