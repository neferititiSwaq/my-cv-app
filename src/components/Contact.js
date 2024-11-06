import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing specific icons

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Information</h2>
      <ul>
        <li>
          <FaPhone /> <span>(123) 456-7890</span>
        </li>
        <li>
          <FaEnvelope /> <span>thembisilemathibela2010@gmail.com</span>
        </li>
        <li>
          <FaLinkedin /> <span>https://www.linkedin.com/in/mathibela-thembisile-1b4276115/</span>
        </li>
        <li>
          <FaGithub /> <span>https://github.com/neferititiSwaq</span> {/* Corrected here */}
        </li>
      </ul>
    </div>
  );
};

export default Contact;
