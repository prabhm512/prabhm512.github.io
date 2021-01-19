import React from 'react';
import './css/MoreAboutMe.css';

// Images
import github from "../assets/github.png";
import resume from "../assets/resume.png"
import linkedin from "../assets/linkedin.png";

function MoreAboutMe() {

    return (
        <div className="details">
            <a href="https://github.com/prabhm512" target="_blank" rel="noreferrer"><img src={github} className="link-img" alt="github" data-bs-toggle="tooltip" data-bs-placement="top" title="My Github" /></a>
            <a href="https://drive.google.com/file/d/1mbQyqjw86Mw5xeUguFLerz3LUmmalIK_/view?usp=sharing" target="_blank" rel="noreferrer"><img src={resume} className="link-img" alt="resume" data-bs-toggle="tooltip" data-bs-placement="top" title="My Resume" /></a>         
            <a href="https://www.linkedin.com/in/prabhmeharsingh" target="_blank" rel="noreferrer"><img src={linkedin} className="link-img" alt="linkedIn" data-bs-toggle="tooltip" data-bs-placement="top" title="My LinkedIn" /></a>
        </div>
    )
}

export default MoreAboutMe;