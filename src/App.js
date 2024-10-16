// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
