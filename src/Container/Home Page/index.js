import React from 'react';
import About from '../../Components/About';
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
                                    13th, 14th, & 15th January 2023 <br />
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
        <section>
            <div className="gap"></div>
        </section>

            {/* Aboubt Section  */}
            <section>
                <div className="home_about_main_container">
                    <About />
                </div>
            </section>
        </>
    )
}

export default HomePage;