// src/components/MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am committed to continuous learning and improvement, actively seeking opportunities to expand my knowledge and contribute to collaborative environments. My goal is to leverage my skills and experience to drive technological advancements and deliver impactful solutions.
        </p>
      </section>
      
      <section id="education" className="section">
        <h2>Education</h2>
        <ul>
          <li><strong>JSS Academy of Technical Education</strong> - Master of Computer Application (MCA) – 7.4/10 (Sept 2022 - July 2024)</li>
          <li><strong>University of Allahabad</strong> - Bachelor of Computer Applications – 83% (July 2019 - July 2022)</li>
          <li><strong>Kendriya Vidyalaya, New Cantt, Allahabad</strong> - 12th Grade – 72%</li>
        </ul>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <h3>Navodita Infotech</h3>
        <p><em>C++ Programming Intern (Jan 2024 – Mar 2024)</em></p>
        <ul>
          <li>Developed a Data Structures and Algorithms Visualizer in C++ to facilitate understanding of core concepts.</li>
          <li>Enabled user interaction by incorporating features for adding/removing elements and real-time visualization updates.</li>
          <li>Designed and implemented a user-friendly interface with intuitive controls for seamless navigation.</li>
          <li>Engaged with the community to gather feedback and implement improvements.</li>
          <li><strong>Tech Stack:</strong> C++ | OpenGL | Data Structure and Algorithm</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <h3>E-Learning Platform</h3>
        <ul>
          <li>Developed a comprehensive E-learning platform using Django.</li>
          <li>Conducted regular code reviews to maintain high code quality.</li>
          <li>Designed and implemented data visualization tools using Chart.js.</li>
          <li>Created a responsive interface with Bootstrap and JQuery.</li>
          <li><strong>Tech Stack:</strong> Django | Bootstrap | JQuery | Chart.js</li>
        </ul>

        <h3>Expense Tracker</h3>
        <ul>
          <li>Developed a robust expense tracking application using the MERN stack.</li>
          <li>Implemented user authentication and customizable transaction categories.</li>
          <li>Incorporated data visualization with Chart.js.</li>
          <li><strong>Tech Stack:</strong> React.js | Material-UI | Node.js | Express.js | MongoDB</li>
        </ul>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>C++, C, Python</li>
          <li>Linux, Node.js, Express.js, React.js, HTML/CSS</li>
          <li>Git, MySQL, MongoDB</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:gaurav.jss.au@gmail.com">gaurav.jss.au@gmail.com</a></p>
        <p>Phone: +91 7459074155</p>
      </section>
    </div>
  );
};

export default MainContent;
