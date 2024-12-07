import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-12 font-titleFont flex gap-20"
      >
      
      <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Associate Software Engineer"
              subTitle={
                <>
                  Zorrosign Pvt Ltd.<br />
                  Colombo, Sri Lanka
                </>
              }
              result="Dec 2022– Nov 2023"
              des="- Carried out diverse development tasks including frontend and backend development by ensuring highest quality of the code. 
              - Technologies: Angualr, Java, .Springboot, MongoDB"
            />
            <ResumeCard
              title="Trainee Software Engineer"
              subTitle={
                <>
                  WellTech Solutions Pvt Ltd.<br />
                  Colombo, Sri Lanka
                </>
              }
              result="Sep 2021– Mar 2022"
              des="- I wrote well-designed,testable code and gainied a solid foundation in web development.
              - Technologies: React.js, TypeScript, Node.js, PostgreSQL"
            />
          </div>
        </div>
      </motion.div>
    );
  };
  

export default Experience
