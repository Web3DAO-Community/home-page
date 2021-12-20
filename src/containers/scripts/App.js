import React from 'react';
import '../styles/App.css';
import 'tachyons';

import Nav from './Nav';
import HomePage from './Homepage';
import LearningPage from './LearningPage';
import RoadmapPage from './RoadmapPage';
import JoiningPage from './JoiningPage';
import ToolsPage from './ToolsPage';
import Footer from './Footer';



class App extends React.Component {
  render(){
    return (
      <div className='flex flex-column' >
          <Nav />
        <section id='aboutPageId'>
          <HomePage />
        </section>
        <section id='learningPageId'>
          <LearningPage />
        </section>
        <section id='roadmapPageId'>
          <RoadmapPage />
        </section>
        <section id='joiningPageId'>
          <JoiningPage />
        </section>
        <section id='toolsPageId'>
          <ToolsPage />
        </section>
        <section id='footerId'>
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
