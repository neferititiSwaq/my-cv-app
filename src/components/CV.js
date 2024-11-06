import React from 'react';
import { motion } from 'framer-motion'; 
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact'; 

const CV = () => {
  return (
    <div className="cv-container">
      <motion.div
        className="left-column"
        initial={{ x: -200, opacity: 0 }}  
        animate={{ x: 0, opacity: 1 }}    
        transition={{ duration: 0.8, delay: 0.2 }}  
      >
        <PersonalInfo />
        <Contact /> 
      </motion.div>

      <motion.div
        className="right-column"
        initial={{ x: 200, opacity: 0 }}   
        animate={{ x: 0, opacity: 1 }}     
        transition={{ duration: 0.8, delay: 0.4 }} 
      >
        <h2>Skills & Experience</h2>
        <Skills />
        <Experience />
      </motion.div>
    </div>
  );
};

export default CV;
