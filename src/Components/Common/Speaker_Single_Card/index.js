import React from 'react';
import './index.scss';
import userImage from '../../../asset/image/user_Image.jpeg';

const SpeakerSingleCard = () => {
    return (
        <>
            <div className="speaker_card_main_container">
                <div className="speaker_card_container">
                    <div className="image_bg_container">
                        <div className="image_container">
                            <img src={userImage} alt="user" />
                        </div>
                        <div className="bubble"></div>
                    </div>

                 

                </div>
            </div>
        </>
    )
}

export default SpeakerSingleCard