import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TGBot"
          des="  This is a Telegram bot for event ticketing that allows users to obtain free tickets and adds them to a single Telegram group dedicated to the event.
            Technologies – Node.js"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="  It is a web-based application that stimulates the customers to put food orders through the internet.
          Technologies – React| Node.js| MongoDB"
          src={projectTwo}
        />
        <ProjectsCard
          title=" Happy Kids Online School"
          des="  It is a web-based application that represents an E-learning Management System for Kids.
          Technologies - Angular| Java | Springboot |MYSQL"
          src={projectThree}
        />
        <ProjectsCard
          title="Tourism Web Application"
          des=" This web application on Sri Lanka tourism. It provides information about the attractive places to visit.
            Technologies – HTML | CSS | JavaScript"
          src={projectThree}
        />
        <ProjectsCard
          title="Pizza Ordering System  "
          des="It is a web-based application that stimulates the customers to put pizza orders through the internet.
            Technologies – PHP | HTML | CSS"
          src={projectOne}
        />
        <ProjectsCard
          title="Library Management System "
          des=" This application for the use of librarians and library users. It can be maintained a catalog of books and managed books issues and returns.
          Technologies – React.js| Node.js | MongoDB"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects
