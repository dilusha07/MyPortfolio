import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        {/* part one */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2007 - 2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title=" B.Sc. (Hons.) in Software Engineering"
              subTitle=" University of Kelaniya, Sri Lanka (Feb 2019– July 2023)"
              result="3.21/4"
              des=" Specialized Domains: Web Development, Data Science and Engineering, Net-centric Applications, Business Engineering"
            />
            <ResumeCard
              title=" G.C.E Advanced Level Examination - 2017"
              subTitle=" Mahinda Rajapaksa College, Matara (Jun 2013 - Aug 2016)"
              result="Z-Score: 1.5671"
              des="A: Mathematics | B: Physics | B: Chemistry A: General IT"
            />
            <ResumeCard
              title="G.C.E Ordinary Level Examination - 2012"
              subTitle=" Godapitiya Central College, Matara (Jan 2007 – Jun 2013)"
              result="A - 8 & B – 1
"
              des="Secondary education."
            />
          </div>
        </div>
        {/* part Two */}
  
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Associate Software Engineer"
              subTitle="Zorrosign Pvt Ltd. - (Dec 2022– Nov 2023)"
              result="Colombo, Sri Lanka"
              des="- Carried out diverse development tasks including frontend and backend development by ensuring highest quality of the code. 
              - Technologies: Angualr, Java, .Springboot, MongoDB"
            />
            <ResumeCard
              title="Trainee Software Engineer"
              subTitle="WellTech Solutions Pvt Ltd. - (Sep 2021– Mar 2022)"
              result="Colombo, Sri Lanka"
              des="- I wrote well-designed,testable code and gainied a solid foundation in web development.
              - Technologies: React.js, TypeScript, Node.js, PostgreSQL"
            />
          </div>
        </div>
      </motion.div>
    );
  }

export default Education
