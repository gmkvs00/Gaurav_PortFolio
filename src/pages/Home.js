// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <section id='home'>
            <h2>Welcome to My Portfolio</h2>
            <p>I'm Gaurav Mishra, a Software Developer.</p>
          </section>
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
