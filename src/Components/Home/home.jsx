import React, { useEffect } from 'react';
import './home.css';
import video from '../../Assets/video-background-travel.mp4';
import { IoLocationOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <section className='home'>
            <div className='overlay'></div>
            <video src= {video} muted autoPlay loop type="video/mp4"></video>

            <div className='homeContent container'>
                <div className='textDiv'>

                    <span data-aos='fade-up' className='smallText'>
                        Our Packages
                    </span>

                    <h1 data-aos='fade-up' className='homeTitle'>
                        Search your Holiday
                    </h1>
                </div>

                <div data-aos='fade-up' className='cardDiv grid'>
                    <div className='destinationInput'>
                        <label htmlFor='city'>
                            Search your destination:
                        </label>

                        <div className='input flex'>
                            <input type='text' placeholder='Enter name here...'/>
                            <IoLocationOutline className='icon'/>
                        </div>
                    </div>

                    <div className='dateInput'>
                        <label htmlFor='date'>
                            Select your date:
                        </label>

                        <div className='input flex'>
                            <input type='date' />
                        </div>
                    </div>

                    <div className='priceInput'>
                        <div className='label_total flex'>
                            <label htmlFor="price">Max price:</label>
                            <h3 className='total'>$5000</h3>
                        </div>
                        <div className='input flex'>
                            <input type='range' min="1000" max="5000"></input>
                        </div>
                    </div>

                    <div className='searchOptions flex'>
                        <CiFilter className='icon'/>
                        <span>MORE FILTER</span>
                    </div>
                </div>

                <div data-aos='fade-up' className='homeFooterIcon flex'>
                    <div className='rightIcons'>
                      <CiFacebook className='icon'/>
                      <FaInstagram className='icon'/>
                      <CiYoutube  className='icon'/>

                    </div>

                    <div className='leftIcons'>
                      <BsListTask className='icon'/>
                      <TbApps className='icon'/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;