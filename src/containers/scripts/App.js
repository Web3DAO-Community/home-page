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
        <HomePage />
        <LearningPage />
        <RoadmapPage />
        <JoiningPage />
        <ToolsPage />
        <Footer />
      </div>
    );
  }
}

export default App;
