import React from 'react';
import { motion } from 'framer-motion'; 
import profilePic from '../images/profile.jpg'; // Your actual profile image

const PersonalInfo = () => {
  return (
    <motion.div
      className="personal-info"
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }}  
      transition={{ duration: 0.8 }} 
    >
      {/* Profile Picture */}
      <motion.img 
        src={profilePic} 
        alt="Maria Thembi Mathibela" 
        className="profile-pic"
        whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.5 }} 
      />
      
      {/* Name */}
      <h1>Maria Thembi Mathibela</h1>
      
      {/* Profile Title */}
      <h2 className="profile-title">Profile</h2>

      {/* Profile Summary */}
      <p className="profile-summary">
        Hello! I am Maria Thembi Mathibela, and I am currently a Full Stack Web Development student enrolled in bootcamp. 
        I have a passion for both front-end and back-end development, actively learning technologies like React, Tailwind, Node.js, and Webpack.
      </p>

      <p className="profile-summary">
        I enjoy building dynamic, visually appealing web applications, and I'm always eager to explore new tools and frameworks to enhance my projects. 
        My experience includes creating responsive web designs, integrating Framer Motion for animations, and working with various JavaScript libraries to bring modern and interactive user experiences to life.
      </p>

      <p className="profile-summary">
        Although I'm still in the learning phase, my goal is to continuously develop my skills, apply them to real-world projects, and collaborate with teams to deliver high-quality applications. 
        I'm particularly focused on mastering the technical and design aspects of web development to stand out in the industry.
      </p>

      <p className="profile-summary">
        Outside of my technical skills, I have a diverse background, including experience in Farming, which has taught me patience, persistence, and a strong work ethic. 
        I'm excited to bring these qualities into my journey as a web developer.
      </p>
    </motion.div>
  );
};

export default PersonalInfo;
