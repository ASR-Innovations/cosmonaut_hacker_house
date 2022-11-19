import React from 'react';
import AboutCards from '../Common/About Card';
import './index.scss';

const About = () => {
    return (
        <>
            <div className="about_main_container">
                <div className="max_width">
                    <div className="about_container">
                        <div className="text_container">
                            <div className="heading primary_heading">
                                About the event
                            </div>
                            <div className="paira primary_paira">
                                Cosmonaut Hacker House aims to connect all cosmonauts in India and bring more awareness about the Cosmos Ecosystem to the Indian Web3 & Developer Community. We intend to make this the most developer-friendly event for new and veteran Cosmonauts.
                            </div>
                        </div>
                        <div className="testimonials_cards_container">
                            <div className="testimonial_cards">
                                <AboutCards
                                    number="01"
                                    title="Hackathon & Bootcamp"
                                    paira="With our one-month virtual bootcamp, conducted by core builders of Cosmos, hackers that are new to Cosmos tech will also get a fair chance to learn and build their project under the guidance and mentorship of these core cosmos builders."
                                />
                                <AboutCards
                                    number="02"
                                    title="Conference"
                                    paira="With our panel discussions and keynote speaker sessions delivered by core cosmos builders, enhance your knowledge about the Cosmos Ecosystem and dive deep into the projects built under it."
                                />
                                <AboutCards
                                    number="03"
                                    title="Workshop"
                                    paira="For the attendees joining us in the event, we'll organize multiple workshops for techies and non-techies to learn about Cosmos, NFTs, DeFi, and much more. Keep your notebooks and pen ready!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;