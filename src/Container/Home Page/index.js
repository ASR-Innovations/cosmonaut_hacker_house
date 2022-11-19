/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import Partners from '../../Components/Partner';
import PotentialProject from '../../Components/Potential_Project';
import Speakers from '../../Components/Speaker';
import './index.scss';

const HomePage = () => {
    return (
        <>
            {/* Hero section  */}
            <section>
                <div className="home_main_container ">
                    <div className="max_width">
                        <div className="home_container " >
                            <div className="text_box mt-7" data-aos="fade-up" data-aos-duration="1000">
                                <div className="title">
                                    Cøsmonaut Hacker House
                                </div>
                                <div className="paira">
                                    27th, 28th, & 29th January 2023 <br />
                                    Radisson Blu, Bangalore, India

                                </div>
                                <div className="button">
                                    <a href="https://forms.gle/o1xqMebf5GMpbmGx9" target="_blank"><button className='btn_primary'>JOIN WAITLIST</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;