import React, { useEffect } from 'react';
import './footer.css';
import video1 from '../../Assets/video-background-travel(1).mp4';
import { FiSend } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <section className='footer'>
            <div className='videoDiv'>
                <video src={video1} muted loop autoPlay type='video/mp4'></video>
            </div>

            <div className='secContent flex'>
                <div className='contactDiv flex'>
                    <div data-aos='fade-up' className='text'>
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className='inputDiv flex'>
                        <input data-aos='fade-up' type="text" placeholder='Enter Mail Address'/>

                        <button data-aos='fade-up' className='btn flex' type='submit'>
                            SEND <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div data-aos='fade-down' className="logoDiv">
                            <a href="#" className='logo flex'>
                                <SiYourtraveldottv className='icon'/> <span>TravelVN</span>
                            </a>
                        </div>

                        <div data-aos='fade-up' className="footerParagragh">
                            " Sự chuyên nghiệp mang lại cảm xúc thăng hoa cho khách hàng và những giá trị gia tăng cho khách sau mỗi chuyến đi "
                        </div>

                        <div data-aos='fade-up' className="footerSocials flex">
                            <CiFacebook className='icon'/>
                            <FaInstagram  className='icon'/>
                            <CiYoutube  className='icon'/>
                            <IoLogoTwitter   className='icon'/>
                        </div>
                    </div>

                    <div className="footerLinks grid">

                         {/* group 1 */}
                        <div data-aos='fade-up' data-aos-duration="2000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Angency
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>

                        {/* group 2 */}
                        <div data-aos='fade-up' data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Angency
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>

                        {/* group 3 */}
                        <div data-aos='fade-up' data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Angency
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>

                        {/* group 4 */}
                        <div data-aos='fade-up' data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                DESTINATION HOT
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Angency
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL TOUR WEBSITE</small>
                        <small>COPYRIGHTS CLONE - YOUTOBE</small>
                    </div>                    
                </div>
            </div>
        </section>
    )
};

export default Footer;