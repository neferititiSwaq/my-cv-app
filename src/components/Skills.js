import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}   
      animate={{ opacity: 1 }}    
      transition={{ duration: 1 }} 
    >
      <h3>Skills</h3>
      <ul className="skills-list"> {/* Add the skills-list class here */}
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>APIs</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>React</li>
        <li>React-Bootstrap</li>
        <li>Webpack</li>
        <li>Git/Github</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>Testing Libraries</li>
        <li>State management Libraries</li>
        {/* Add more skills */}
      </ul>
    </motion.div>
  );
};

export default Skills;
