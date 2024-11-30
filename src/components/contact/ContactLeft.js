import React from 'react';
import { FaGithub, FaMedium, FaLinkedinIn } from 'react-icons/fa';
import {contactImg} from "../../assets/index";

const ContactLeft = () => {
    return (
      <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
        <img
          className="w-full h-48 object-cover rounded-lg mb-2"
          src={contactImg}
          alt="contactImg"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white">M.D. Sandaruwani</h3>
          <p className="text-lg font-normal text-gray-400">
            Full Stack Software Engineer
          </p>
          <p className="text-base text-gray-400 tracking-wide">
          If you're seeking a developer who can turn your ideas into reality, solve complex problems, and deliver high-quality software solutions, feel free to connect with me. Let's connect and explore how we can work together to achieve your goals.

          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+94 7645890</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">sandaruwanidilusha1@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
      </div>
    );
  }
export default ContactLeft
