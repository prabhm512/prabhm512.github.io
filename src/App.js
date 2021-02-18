import React, { useState } from 'react';
import './App.css';
import { Toast } from 'react-bootstrap'; 
import MoreAboutMe from './components/MoreAboutMe/MoreAboutMe';
import Intro from './components/Intro/Intro';
import ContentFilter from './components/ContentFilter/ContentFilter';
import Footer from './components/Footer/Footer';

// Images
import welcome from './components/assets/hiBoyEmoji.jpg';
import important from './components/assets/important.png';

function App() {

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true)

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <div className="App">
      
      <Toast className="toast" show={showA} onClose={toggleShowA}>
          <Toast.Header>
              <img src={welcome} className="rounded mr-2" alt="greeting" width="30px" height="30px"/>                
              <strong className="mr-auto">Welcome</strong>
          </Toast.Header>
          <Toast.Body>
              <b>Desktop users</b>: Please HOVER over project images to find out more info.<br></br>
              <b>Mobile users</b>: Please CLICK on bottom right of project images to find out more info.
          </Toast.Body>
      </Toast>
      <Toast className="toast" show={showB} onClose={toggleShowB}>
          <Toast.Header>
              <img src={important} className="rounded mr-2" alt="important" width="21px" height="21px"/>                 
              <strong className="mr-auto">Important</strong>
          </Toast.Header>
          <Toast.Body>
              My websites are hosted on a free service. They will be a little slow to load. Please be patient and pardon me for the inconvenience.
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
