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
                                    <button className='btn_primary'>JOIN WAITLIST</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gap  */}
            <section id='about'>
                <div className="gap"></div>
            </section>

            {/* About Section  */}
            <section >
                <div className="home_about_main_container" data-aos="fade-up" data-aos-duration="1000">
                    <About />
                </div>
            </section>

            {/* Gap  */}
            <section id='speakers'>
                <div className="gap"></div>
            </section>

            <section>
                <div className="home_speaker_main_container" data-aos="fade-up" data-aos-duration="1000">
                    <Speakers />
                </div>
            </section>

            {/* Gap  */}
            <section id='sponsors'>
                <div className="gap"></div>
            </section>

            <section>
                <div className="home_potential_project_main_container" data-aos="fade-up" data-aos-duration="1000">
                    <PotentialProject />
                </div>
            </section>

            {/* Gap  */}
            <section id='partners'>
                <div className="gap"></div>
            </section>

            <section>
                <div className="home_partner_main_container" data-aos="fade-up" data-aos-duration="1000">
                    <Partners />
                </div>
            </section>

            {/* Gap  */}
            <section>
                <div className="gap"></div>
            </section>

            <section>
                <div className="home_footer_main_container">
                    <Footer />
                </div>
            </section>
        </>
    )
}

export default HomePage;