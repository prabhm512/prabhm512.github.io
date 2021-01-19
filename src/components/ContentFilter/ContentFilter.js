import React from 'react';
// import ProjectList from '../ProjectList/ProjectList';
import projectData from './projectData';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './css/ContentFilter.css';
import './css/style.css';

function ContentFilter() {
    
        return (
            <div className="container-sm portfolio-all">
                <div className="row">
                    <div className="col-sm-12 portfolio-col bottom">
                        <main className="cd-main-content">
                            <div className="cd-tab-filter-wrapper">
                        
                        <div className="cd-tab-filter">
                            <ul className="cd-filters">
                            <li className="placeholder"> 
                                <a data-type="all" href="#all">All</a> {/* selected option on mobile */}
                            </li> 
                            <li className="filter"><a className="selected" href="#all" data-type="all">All</a></li>
                            <li className="filter" data-filter=".color-1"><a href="#major" data-type="color-1">Major</a></li>
                            <li className="filter" data-filter=".color-2"><a href="#minor" data-type="color-2">Minor</a></li>
                            {/* <li class="filter" data-filter=".color-3"><a href="#0" data-type="color-3">Backend</a></li> */}
                            </ul> {/* cd-filters */}
                        </div> {/* cd-tab-filter */}
                        </div> {/* cd-tab-filter-wrapper */}
                            <section className="cd-gallery">
                                <ul className="projectList">
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[0].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[0].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[0].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                        <li className="mix color-1 check1 radio3 option2">
                                            <div className="container">
                                                <img src="Assets/bap.jpeg" alt="business-advertisement-portal" className="image"/>
                                                <div className="centered">
                                                    <div className="wrapper">
                                                        <div className="link_wrapper">
                                                            <a href="https://business-advertisement-portal.herokuapp.com/" target="_blank" rel="noreferrer" className="changing-link">
                                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                                <span className="btn-txt">Website</span>
                                                                {/* </button> */}
                                                            </a>
                                                            <div className="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {/* </div> */}
                                                        {/* <div class="wrapper"> */}
                                                        <br />
                                                        <div className="link_wrapper">
                                                            <a href="https://github.com/prabhm512/business-advertisement-portal" target="_blank" rel="noreferrer" className="changing-link">
                                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                                <span className="btn-txt">Code</span>
                                                                {/* </button> */}
                                                            </a>
                                                            <div className="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[1].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[1].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[1].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                    <li className="mix color-2 check1 radio2 option3">
                                    <div className="container">
                                        <img src="Assets/employee-directory.png" alt="employee-directory" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://prabhm512.github.io/employee-directory" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Website</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/employee-directory" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[2].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[2].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[2].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                    <li className="mix color-2 check1 radio2 option3">
                                    <div className="container">
                                        <img src="Assets/burger-logger.jpg" alt="burger-logger" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://ps-burger-logger.herokuapp.com/" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Website</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/burger-logger" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[3].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[3].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[3].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                    <li className="mix color-2 check1 radio2 option3" data-bs-toggle="tooltip" data-bs-html="true" title="Node | MongoDB | Express

                        A workout tracker to practice MongoDB.">
                                    <div className="container">
                                        <img src="Assets/workout-tracker.jpg" alt="workout-tracker" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://ps-workout-tracker.herokuapp.com/" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Website</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/workout-tracker" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[4].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[4].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[4].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                    <li className="mix color-1 check2 radio2 option2" data-bs-toggle="tooltip" data-bs-html="true" title="Third Party API's | JS

                        A nearby/top restaurant locator.">
                                    <div className="container">
                                        <img src="Assets/fantastic-food-finder.jpg" alt="fantastic-food-finder" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://prabhm512.github.io/fantastic-food-finder" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Website</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/fantastic-food-finder" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[5].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[5].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[5].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                    <li className="mix color-2 check3 radio2 option4">
                                    <div className="container">
                                        <img src="Assets/workday-scheduler.jpg" alt="workday-scheduler" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://prabhm512.github.io/work-day-scheduler" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Website</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/work-day-scheduler" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[6].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[6].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[6].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                    <li className="mix color-2 check2 radio3 option3">
                                    <div className="container">
                                        <img src="Assets/emp-tracker.jpg" alt="employee-tracker" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://drive.google.com/file/d/1XOWjQuRgM_F00Mw3ydrfIzgJo6np5qRm/view?usp=sharing" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Demo</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/employee-tracker" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[7].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[7].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[7].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>                                   
                                    <li className="mix color-2 check2 radio2 option1">
                                    <div className="container">
                                        <img src="Assets/readme-generator.jpg" alt="readme-generator" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://drive.google.com/file/d/1KeR0acecQa7MNDirhABSZuwqCESTl_ZS/view?usp=sharing" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Demo</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/readme-generator" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger> 
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[8].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[8].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[8].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>
                                    <li className="mix color-2 check1 radio3 option4">
                                    <div className="container">
                                        <img src="Assets/code-quiz.jpg" alt="code-quiz" className="image" />
                                        <div className="centered">
                                        <div className="wrapper">
                                            <div className="link_wrapper">
                                            <a href="https://prabhm512.github.io/code-quiz/" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Website</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                            {/* </div> */}
                                            {/* <div class="wrapper"> */}
                                            <br />
                                            <div className="link_wrapper">
                                            <a href="https://github.com/prabhm512/code-quiz" target="_blank" rel="noreferrer" className="changing-link">
                                                {/* <button class="btn btn-primary hover-btn"> */}
                                                <span className="btn-txt">Code</span>
                                                {/* </button> */}
                                            </a>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger={['hover', 'focus']} placement="auto" 
                                    
                                        overlay={            
                                            <Popover id="popover-basic">
                                                <Popover.Title as="h3">{projectData[9].popoverTitle}</Popover.Title>
                                                <Popover.Content>
                                                {projectData[9].techStack} 
                                                <br></br>
                                                <br></br>
                                                {projectData[9].popoverContent}
                                                </Popover.Content>
                                            </Popover>
                                    }>                                   
                                    <li className="mix color-2 check1 radio2 option3">
                            <div className="container">
                                <img src="Assets/password-generator.jpg" alt="password-generator" className="image" />
                                <div className="centered">
                                <div className="wrapper">
                                    <div className="link_wrapper">
                                    <a href="https://prabhm512.github.io/password-generator" target="_blank" rel="noreferrer" className="changing-link">
                                        {/* <button class="btn btn-primary hover-btn"> */}
                                        <span className="btn-txt">Website</span>
                                        {/* </button> */}
                                    </a>
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                        </svg>
                                    </div>
                                    </div>
                                    {/* </div> */}
                                    {/* <div class="wrapper"> */}
                                    <br />
                                    <div className="link_wrapper">
                                    <a href="https://github.com/prabhm512/password-generator" target="_blank" rel="noreferrer" className="changing-link">
                                        {/* <button class="btn btn-primary hover-btn"> */}
                                        <span className="btn-txt">Code</span>
                                        {/* </button> */}
                                    </a>
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                        </svg>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </li>
                            </OverlayTrigger> 

                                    <li className="gap" />
                                    <li className="gap" />
                                    <li className="gap" />
                                </ul>
                                <div className="cd-fail-message">No results found</div>
                            </section> {/* cd-gallery */}
                        </main> {/* cd-main-content */}
                    </div>
                </div>
            </div>
        )
    }


export default ContentFilter;