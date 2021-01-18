import React, { useState } from 'react';
import './reset.css';
import './App.css';
import { Toast } from 'react-bootstrap'; 
import MoreAboutMe from './components/MoreAboutMe/MoreAboutMe';
import Intro from './components/Intro/Intro';
import ContentFilter from './components/ContentFilter/ContentFilter';
import Footer from './components/Footer/Footer';

function App() {

  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <div className="App">
      <Toast className="toast" show={showA} onClose={toggleShowA}>
          <Toast.Header>
              <img src="Assets/hiBoyEmoji.jpg" className="rounded mr-2" alt="greeting" width="30px" height="30px"/>                
              <strong className="mr-auto">Welcome</strong>
          </Toast.Header>
          <Toast.Body>
              <b>Desktop users</b>: Please HOVER over project images to find out more info.<br></br>
              <b>Mobile users</b>: Please CLICK on bottom right of project images to find out more info.
          </Toast.Body>
      </Toast>
      <MoreAboutMe></MoreAboutMe>
      <Intro></Intro>
      <ContentFilter></ContentFilter>
      <Footer></Footer>
    </div>
  );
}

export default App;
