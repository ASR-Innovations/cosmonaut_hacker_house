import React from 'react'
import './index.scss';
import clip from '../../../asset/image/Clip.svg'

const AboutCards = ({
    number,
    title,
    paira
}) => {
    return (
        <>
            <div className="about_cards_main_container">
                <div className="about_cards_container">
                    <div className="box_1">
                        <div className="box_2">
                            <div className="number">
                                <div className="number_text">{number}</div>
                                <div className="underline"></div>
                            </div>
                            <div className="title">{title}</div>
                            <div className="paira">
                                {paira}
                            </div>
                        </div>
                        <div className="clip">
                            <img src={clip} alt="Clip" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCards;