import React from 'react'
import SpeakerSingleCard from '../Common/Speaker_Single_Card';
import './index.scss'

const Speakers = () => {
    return (
        <>
            <div className="speaker_main_container">
                <div className="max_width">
                    <div className="speaker_container">
                        <div className="text_container">
                            <div className="heading primary_heading">
                                Speakers
                            </div>
                        </div>

                        <div className="image_main_container">
                            {/* <div className="image_container">
                                <SpeakerSingleCard />
                                <SpeakerSingleCard />
                                <SpeakerSingleCard />
                                <SpeakerSingleCard />
                            </div> */}
                        </div>

                        <div className="revealed_soon_container">
                            <div className="title">
                                Will be revealed soon
                            </div>
                        </div>

                        <div className="intrest_in_speaking_container">
                            <div className="title">
                                Interested in speaking at the event?
                            </div>
                            <div className="button">
                                <button className='btn_primary'>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speakers;