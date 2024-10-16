// src/components/Sidebar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import profilePic from './assets/gimg.jpeg'; // Adjust the path as needed

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Hamburger icon */}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <img src={profilePic} alt="Gaurav Mishra" className="profile-pic" />
        <h3>Gaurav Mishra</h3>
        <p>Software Developer</p>
        <p>Contact: <a href="mailto:gaurav.jss.au@gmail.com">gaurav.jss.au@gmail.com</a></p>
        <p>Phone: 7459074155</p>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
