import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './css/swiper.css';
import './css/Intro.css';

// Images have to be imported indivudually. Not working otherwise
import indexImg from '../assets/index.jpg';
import html from '../assets/html-css.jpg';
import js from '../assets/js.png';
import react from '../assets/react.png';
import node from '../assets/node.jpg';
import mysql from '../assets/mysql.jpg';
import mongo from '../assets/mongo.jpg'; 
import git from '../assets/git.jpg';
import express from '../assets/express.jpg';

function Intro() {

    // install Swiper components
    SwiperCore.use([Navigation, Pagination, Scrollbar]);

    return (
        <div className="container-sm intro">
            <div className="row">
                <div className="col-sm-12 index-col">
                <h1>Prabh Singh</h1>
                <hr />
                {/* Face image and link to social media */}
                <aside>
                    <div className="face-image">
                    <img src={indexImg} className="index-img" alt="my face"/>
                    </div>
                </aside>
                {/* All paragraphs (to the right of image and socials) */}
                <section className="no-wrap-text">
                    <h3 className="description">Foodie, sports buff, travel enthusiast... and a full stack web developer with proficiency in the following technologies.</h3>
                    <br />
                </section>
                {/* Swiper */}
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        280: { slidesPerView:2, spaceBetween:0 },
                        360: { slidesPerView:3, spaceBetween:0 },
                        768: { slidesPerView:4, spaceBetween:0 },
                        1024: { slidesPerView:7, spaceBetween:0 }
                    }}
                    pagination={{clickable:true, el:".swiper-pagination"}}
                    >
                    <SwiperSlide><img src={html} data-bs-toggle="tooltip" data-bs-placement="top" title="HTML & CSS" alt="HTML & CSS"/></SwiperSlide>
                    <SwiperSlide><img src={js} data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript" alt="JavaScript"/></SwiperSlide>
                    <SwiperSlide><img src={react} data-bs-toggle="tooltip" data-bs-placement="top" title="React.js" alt="React.js"/></SwiperSlide>
                    <SwiperSlide><img src={node} data-bs-toggle="tooltip" data-bs-placement="top" title="Node.js" alt="Node.js"/></SwiperSlide>
                    <SwiperSlide><img src={mysql} data-bs-toggle="tooltip" data-bs-placement="top" title="MySQL" alt="MySQL"/></SwiperSlide>
                    <SwiperSlide><img src={mongo} data-bs-toggle="tooltip" data-bs-placement="top" title="MongoDB" alt="MongoDB"/></SwiperSlide>
                    <SwiperSlide><img src={git} data-bs-toggle="tooltip" data-bs-placement="top" title="Git" alt="Git"/></SwiperSlide>
                    <SwiperSlide><img src={express} data-bs-toggle="tooltip" data-bs-placement="top" title="Express" alt="Express"/></SwiperSlide>
                    {/* Add Pagination */}
                    <div className="swiper-pagination"></div>
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Intro;

