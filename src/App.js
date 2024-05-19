import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Introduction />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
