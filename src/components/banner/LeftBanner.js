import React from "react";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">M.D. Sandaruwani</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Excited to contribute as a Full-Stack Software Engineer! Proficient in Java Springboot, Node, React, and Angular, I specialize in crafting scalable web applications.
        A fast learner with a knack for problem-solving and collaboration, and eager to join a dynamic tech team and drive innovation. Let's build something great together!    
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner